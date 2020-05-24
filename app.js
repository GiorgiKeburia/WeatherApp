var input = document.querySelector(".input");
var main = document.querySelector(".name");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");
var clouds = document.querySelector(".clouds");
var button = document.querySelector(".btn");
var cityBtns = document.querySelector(".main-buttons");

// Type Any City Name And Get Current Weather

button.addEventListener("click", async () => {
  const api_call = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=787e0529053a07336af550f332196220&units=metric`
  );

  try {
    const data = await api_call.json();

    main.innerHTML = data.name;
    desc.innerHTML = `აღწერა - ${data.weather[0].description}`;
    temp.innerHTML = `ტემპერატურა - ${data.main.temp}`;
    input.value = "";
  } catch (err) {
    alert("Wrong city name!", err);
  }
});

cityBtns.addEventListener("click", async (e) => {
  const el = e.target.textContent; // თბილისი, ქუთაისი ან ბათუმი
  let name;

  if (el === "თბილისი") {
    name = "tbilisi";
  } else if (el === "ქუთაისი") {
    name = "kutaisi";
  } else {
    name = "batumi";
  }

  const api_call = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=787e0529053a07336af550f332196220&units=metric`
  );

  try {
    const data = await api_call.json();

    main.innerHTML = data.name;
    desc.innerHTML = `აღწერა - ${data.weather[0].description}`;
    temp.innerHTML = `ტემპერატურა - ${data.main.temp} &#8451;`;
    input.value = "";
  } catch (err) {
    alert("Wrong city name!", err);
  }
});

//Start Page  Content
window.addEventListener("load", async (event) => {
  const api_call = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Tbilisi&appid=787e0529053a07336af550f332196220&units=metric`
  );

  try {
    const data = await api_call.json();

    main.innerHTML = data.name;
    desc.innerHTML = `აღწერა - ${data.weather[0].description}`;
    temp.innerHTML = `ტემპერატურა - ${data.main.temp} &#8451;`;
    input.value = "";
  } catch (err) {
    alert("Wrong city name!", err);
  }
});
