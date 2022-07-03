import AppHttp from "../AppHttp";

const getResault = async (search) => {
  const http = await AppHttp();
  const { getResault } = await http.get(`/api/help-center/search?q=${search}`);
  return getResault;
};

export { getResault };
