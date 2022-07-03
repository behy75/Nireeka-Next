import AppHttp from "../AppHttp";

const postLoginToServer = async (data) => {
  const http = await AppHttp();
  const response = await http.post("/api/login", {
    ...data,
    _method: "post",
  });
  const loginData = response.data;
  const token = loginData.data.token;
  CookiesService.set("access_token", token);
};

export { postLoginToServer };
