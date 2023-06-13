const fs = require('fs');
const readline = require('readline');

// Crear subdirectorio y archivos
function createSubDirectory(directory, componentName) {
	const subDirectoryPath = `${directory}/${componentName}`;

	// Crear subdirectorio
	fs.mkdirSync(subDirectoryPath);

	// Crear archivo index.tsx
	fs.writeFileSync(
		`${subDirectoryPath}/index.tsx`,
		`export { default } from './${componentName}';\n`,
	);

	// Crear archivo componentName.tsx
	fs.writeFileSync(
		`${subDirectoryPath}/${componentName}.tsx`,
		`import React from 'react';
import styles from './${componentName}.module.scss';
import ${componentName}Props from './${componentName}Props';

export default function ${componentName}(props: ${componentName}Props) {
  return (
    <div className={styles.${componentName}}>
      ${componentName}
    </div>
  );
}
`,
	);

	// Crear archivo componentName.module.scss
	fs.writeFileSync(
		`${subDirectoryPath}/${componentName}.module.scss`,
		`.${componentName} {
  /* Agrega estilos aquí */
  height: 100px;
  width: 100px;
  background-color: #f0f0f0;
}
`,
	);

	// Crear archivo componentName.spec.tsx
	fs.writeFileSync(
		`${subDirectoryPath}/${componentName}.spec.tsx`,
		`import { render, screen } from '@testing-library/react';
import ${componentName} from './${componentName}';

describe('${componentName}', () => {
  it('renders ${componentName} component', () => {
    render(<${componentName} />);
    const componentElement = screen.getByText('${componentName}');
    expect(componentElement).toBeInTheDocument();
  });
});
`,
	);

	// Crear archivo componentNameProps.tsx
	fs.writeFileSync(
		`${subDirectoryPath}/${componentName}Props.tsx`,
		`interface ${componentName}Props {
  // Define las propiedades aquí
}

export default ${componentName}Props;
`,
	);

	console.log(
		`Se ha creado el subdirectorio y los archivos en: ${subDirectoryPath}`,
	);
}

// Pedir datos al usuario
function promptUserInput() {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	rl.question(
		'Ingrese la subcarpeta de components (atoms, molecules, organisms): ',
		subFolder => {
			rl.question('Ingrese el nombre del componente: ', componentName => {
				createSubDirectory(
					`C:/Users/juanjo/Projects/lapix/apps/web/app/components/${subFolder}`,
					componentName,
				);
				rl.close();
			});
		},
	);
}

// Ejecutar script
promptUserInput();
