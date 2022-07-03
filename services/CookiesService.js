import Cookies from "universal-cookie";

const cookies = new Cookies();

class CookiesService {
  get(key) {
    return cookies.get(key);
  }

  set(key, value, options) {
    return cookies.set(key, value, options);
  }

  remove(key) {
    return cookies.remove(key, { path: "/" });
  }
}

export default new CookiesService();
