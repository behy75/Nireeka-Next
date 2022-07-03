import CookiesService from "./CookiesService";
// import Cookies from "universal-cookie";

class AuthService {
  // handleLoginSuccess(accessToken) {
  //   const options = { path: "/" };
  //   CookiesService.set("access_token", accessToken, options);
  // }
  handleLoginToNSDSuccess(accessToken) {
    const options = { path: "/" };
    CookiesService.set("access_token", accessToken, options);
  }
  // refreshTokenSuccess(refreshToken) {
  //   const options = { path: "/" };
  //   CookiesService.set("refresh_token", refreshToken, options);
  // }
  // destroyingRefreshToken() {
  //   CookiesService.set("refresh_token");
  // }
  // handleLogoutSuccess() {
  //   CookiesService.remove("access_token");
  // }
  handleLogoutFromNSDSuccess() {
    CookiesService.remove("access_token");
  }
}

export default new AuthService();
