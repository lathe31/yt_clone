import axios from "axios";

export default axios.create({
  baseURL: `https://api.unsplash.com`,
  headers: {
    Authorization: "Client-ID 998zFpK3FYxFXbMNqalPr9uDJmWRppSp2sTpGLTLDgk",
  },
});
