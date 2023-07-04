// Create a page for the map component

import Map from 'apps/web/app/components/organisms/Map/Map';

export interface MapProps {}

export default function MapPage(props: MapProps) {
	return (
		<main className='container'>
			<h1 className='container__welcome'>Welcome to Map!</h1>
			{/* if document then render map */}
			<Map height='100vh' width='100vw' />
		</main>
	);
}
