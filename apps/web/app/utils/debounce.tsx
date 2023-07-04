

type TimerHandle = ReturnType<typeof setTimeout>;

/**
 * Debounces a function call, ensuring it's only executed after a specified delay
 * of inactivity.
 * @param func The function to debounce.
 * @param delay The delay in milliseconds.
 * @returns A debounced version of the function.
 */
export default function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
  let timer: TimerHandle | null;

  return function debounced(...args: Parameters<T>): void {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func(...args);
      timer = null;
    }, delay);
  };
}