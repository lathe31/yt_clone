import axios from "axios";
// const KEY = `AIzaSyAmwqinVY6JpdiaA81f5P6GtigAP2j6nTA`;
// const KEY = `AIzaSyC0WZkouNazPeH3hS2HbbKfcgWH_vQ4FdI`;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
