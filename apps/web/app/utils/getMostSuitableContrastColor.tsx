

export default function getMostSuitableContrastColor(imageUrl: string, threshold: number = 128): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = "Anonymous";
  
      image.onload = function () {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
  
        if (!context) {
          reject("Failed to create 2D context");
          return;
        }
  
        canvas.width = image.width;
        canvas.height = image.height;
  
        context.drawImage(image, 0, 0);
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
  
        const colorMap = new Map<string, number>();
  
        for (let i = 0; i < imageData.length; i += 4) {
          const r = imageData[i];
          const g = imageData[i + 1];
          const b = imageData[i + 2];
  
          const color = `${r},${g},${b}`;
          if (colorMap.has(color)) {
            colorMap.set(color, colorMap.get(color)! + 1);
          } else {
            colorMap.set(color, 1);
          }
        }
  
        let maxCount = 0;
        let mostFrequentColor = "";
  
        colorMap.forEach((count, color) => {
          if (count > maxCount) {
            maxCount = count;
            mostFrequentColor = color;
          }
        });
  
        const [r, g, b] = mostFrequentColor.split(",").map(Number);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
        const contrastColor = brightness > threshold ? "black" : "white";
        resolve(contrastColor);
      };
  
      image.onerror = function () {
        reject("Failed to load image");
      };
  
      image.src = imageUrl;
    });
  }


