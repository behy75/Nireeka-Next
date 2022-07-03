import axios from "axios";
import CookiesService from "../../services/CookiesService";

let nsdUrl = "https://app.nireeka.com";

const NSDHttp = async () => {
  const token = CookiesService.get("nsd_token");

  let headers = null;
  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  const instance = axios.create({
    baseURL: nsdUrl,
    headers,
  });

  return instance;
};

export default NSDHttp;
