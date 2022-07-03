import AppHttp from "../AppHttp";

const getHelp = async () => {
  const http = await AppHttp();
  const { data } = await http.get(`/api/help-center`);
  return data;
};

export { getHelp };
