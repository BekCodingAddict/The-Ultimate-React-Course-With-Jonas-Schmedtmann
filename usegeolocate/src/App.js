import { useState } from "react";

function useGeolocate() {
  const [isLoading, setIsloading] = useState(false);
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geoLoacation!");
    setIsloading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsloading(false);
      },
      (error) => {
        setError(error.message);
        setIsloading(false);
      }
    );
  }

  return { isLoading, position, error, getPosition };
}

function App() {
  const [countClicks, setCountClicks] = useState(0);
  const {
    isLoading,
    position: { lat, lng },
    error,
    getPosition,
  } = useGeolocate();

  function handleClicks() {
    setCountClicks((count) => count + 1);
    getPosition();
    console.log(lat, lng);
  }

  return (
    <div>
      <button onClick={handleClicks} disabled={isLoading}>
        Get my position
      </button>
      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {isLoading && !error && lat && lng && (
        <p>
          Your GPS position:
          <a
            target="_blank"
            rel="noreferrer"
            href={`https:www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}
      <p>Your request position {countClicks} times</p>
    </div>
  );
}

export default App;
