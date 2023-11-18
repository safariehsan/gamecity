import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "055b42b17ac445e28f14837afcf4d316",
  },
});
