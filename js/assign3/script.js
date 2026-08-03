const apiKey = '289daa8abec7e117541fbfe1894f62df';

async function getWeather(city) {
  try {
    let raw = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    );
    if (!raw.ok) {
      throw new Error('City not found..');
    }
    let real = await raw.json();
    console.log(real);
  } catch (err) {
    console.log(err.message);
  }
}

getWeather('Mumbai');
