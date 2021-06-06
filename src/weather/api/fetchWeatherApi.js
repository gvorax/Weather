import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_key = "4c10523ea74e398c6c0bcb594c3c7899";

const FetchWeatherApi = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_key,
    },
  });
  return data;
};
export default FetchWeatherApi;

// axios
//   .post("https://anibla-project.herokuapp.com/api/auth/login", request)
//   .then((res) => {
//     alert(res.data.message + " " + "Success Login");
//     if (res.status == 200) {
//       window.location.replace("./user");
//     }
//   })
//   .catch((err) => {
//     document.getElementById("errormessage").innerHTML =
//       "Login yoki parol noto'g'ri kiritildi. Iltimos tekshirib qaytadan kiring!";
//     document.getElementById("errormessage").classList.toggle("d-block");
//   });
