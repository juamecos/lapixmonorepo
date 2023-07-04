interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
	initialValues: Record<string, any>;
	validationSchema: Record<string, any>;
	onSubmit: (values: Record<string, any>) => void;
	children: React.ReactNode;
}

export default FormProps;
