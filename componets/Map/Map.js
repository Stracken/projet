import 'leaflet/dist/leaflet.css'
import { MapContainer,TileLayer } from 'react-leaflet'

function Map() {
    return (
        <iframe className="map" src="https://umap.openstreetmap.fr/fr/map/projet_1037297" title="Carte sans nom" />
    );
}

export default Map;