import React from 'react';

// import { Marker, TileLayer } from 'react-leaflet';
import { MapContainer as LeafletMap, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import '../assets/Map.css';
import { showDataOnMap } from '../util';


function Map({ countries, casesType, center, zoom }) {
    
    function ChangeView({ center, zoom }) {
        const map = useMap();
        map.setView(center, zoom);
        return null;
    }
    
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom} scrollWheelZoom={false}>
                <ChangeView center={center} zoom={zoom} />
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy <a href="http://osm.org/copyright>OpenStreeetMap </a> contributors'
                />
                {showDataOnMap(countries, casesType)}
            </LeafletMap>
        </div>
    )
}

export default Map
