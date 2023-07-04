'use client';
import React from 'react';
import styles from './Map.module.scss';
import MapProps from './MapProps';
import {
	Map as Mapycz,
	MarkerLayer,
	Marker,
	MouseControl,
	KeyboardControl,
	Clusterer,
	MapProvider,
	MultipleMarkers,
	ZoomControl,
} from 'mapy-cz-react';

const borderCoordinates = [
	{ longitude: 14.4608576, latitude: 50.0963478 }, // Czech Republic border coordinate 1
	{ longitude: 16.6231535, latitude: 49.186054 }, // Czech Republic border coordinate 2
	// Add more border coordinates if needed
];

interface MarkerData {
	gps: { longitude: number, latitude: number };
	name: string;
}

const markersData: MarkerData[] = [];

for (let i = 0; i < 50; i++) {
	const ratio = i / 50; // Calculate the ratio to evenly distribute markers
	const longitude =
		borderCoordinates[0].longitude +
		(borderCoordinates[1].longitude - borderCoordinates[0].longitude) * ratio;
	const latitude =
		borderCoordinates[0].latitude +
		(borderCoordinates[1].latitude - borderCoordinates[0].latitude) * ratio;

	markersData.push({
		gps: { longitude, latitude },
		name: 'Lundegaard s.r.o.',
	});
}

// TODO put map in a separate page or modal or drawer

export default function Map({ height, width }: MapProps) {
	return (
		<div className={styles.Map}>
			<MapProvider center={{ lng: 14.4608576, lat: 50.0963478 }}>
				<>
					<Mapycz height={height} width={width}>
						<>
							<ZoomControl />
							<KeyboardControl />
							<MouseControl zoom pan wheel />
							<MarkerLayer>
								<Clusterer />

								<MultipleMarkers
									markersData={markersData.map(point => ({
										coords: point.gps,
										tooltip: point.name,
										...point,
									}))}
								/>
							</MarkerLayer>
						</>
					</Mapycz>
				</>
			</MapProvider>
		</div>
	);
}
