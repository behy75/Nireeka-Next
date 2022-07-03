import AppHttp from "../AppHttp";

const getAllCategory = async (category) => {
  const http = await AppHttp();
  const { data } = await http.get(`/api/help-center/category/${category}/all`);
  return data;
};

export { getAllCategory };
