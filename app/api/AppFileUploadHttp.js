import axios from "axios";
import CookiesService from "../../services/CookiesService";

let apiUrl = "https://nireeka.com";

const AppFileUploadHttp = async () => {
  const token = CookiesService.get("access_token");

  let headers = null;
  if (token) {
    headers = {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    };
  }

  const instance = axios.create({
    baseURL: apiUrl,
    headers,
  });

  return instance;
};

export default AppFileUploadHttp;
