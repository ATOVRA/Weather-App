// const KEY = '96b947a45d33d7dc1c49af3203966408'
// Aloqa: Telegram => @akror_web
const KEY = "d8d9f7d0351f2dd32a1b8ec87151cb15";

const getData = async (city) => {
  const base = "https://api.openweathermap.org/data/2.5/weather";
  const query = `?q=${city}&units=metric&appid=${KEY}`;

  Loading(true);
  const req = await fetch(base + query);
  const data = await req.json();
  Loading(false);

  return data;
};
