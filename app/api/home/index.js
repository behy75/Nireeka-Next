import AppHttp from "../AppHttp";

const getData = async () => {
  const http = await AppHttp();
  const { data } = await http.get(`/api/home-page`);
  return data;
};

export { getData };
