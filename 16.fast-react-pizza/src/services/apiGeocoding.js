export async function getAddress({ latitude, longitude }) {
  const apiKey = "Your Api key...";
  const res = await fetch(
    `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=${apiKey}`,
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();

  return data;
}
