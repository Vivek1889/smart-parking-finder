import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import { useEffect, useState } from "react";
import axios from "axios";

function PathMap({ booking }) {
  const [route, setRoute] = useState([]);
  const start = [28.6139, 77.209]; //delhi
  const end = [Number(booking.latitude), Number(booking.longitude)];
  useEffect(() => {
    const getRoute = async () => {
      try {
        const res = await axios.get(
          `https://router.project-osrm.org/route/v1/driving/${start[1]},${start[0]};${end[1]},${end[0]}?overview=full&geometries=geojson`,
        );

        const coordinates = res.data.routes[0].geometry.coordinates;

        // Convert [lng, lat] → [lat, lng]
        const formattedRoute = coordinates.map(([lng, lat]) => [lat, lng]);

        setRoute(formattedRoute);
      } catch (err) {
        console.error(err);
      }
    };

    getRoute();
  }, []);

  return (
    <MapContainer
      center={start}
      zoom={10}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Start Marker */}
      <Marker position={start} />

      {/* End Marker */}
      <Marker position={end} />

      {/* Route Line */}
      {route.length > 0 && <Polyline positions={route} />}
    </MapContainer>
  );
}

export default PathMap;
