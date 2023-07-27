import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  //programmatic navigation
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const long = searchParams.get("long");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h2>
        Position: {lat},{long}
      </h2>
      <button onClick={() => setSearchParams({ lat: 23, long: 50 })}>
        Change position
      </button>
    </div>
  );
}

export default Map;
