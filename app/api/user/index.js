import AppHttp from "../AppHttp";

const getPersonalData = async () => {
  const http = await AppHttp();
  let res;
  try {
    res = await http.get(`/api/me`);
  } catch (error) {
    res = {
      data: "err",
    };
  }
  return res.data;
};

const getOrdersData = async () => {
  const http = await AppHttp();
  const { data } = await http.get(`/api/orders`);
  return data;
};

const getBikesData = async () => {
  const http = await AppHttp();
  const { data } = await http.get(`/api/bikes`);
  return data;
};

const getLeaderBoardData = async () => {
  const http = await AppHttp();
  const res = await http.get(`/api/leader-board`);
  return res.data;
};

const getPaymentsData = async () => {
  const http = await AppHttp();
  const { data } = await http.get(`/api/payments`);
  return data;
};

export {
  getPersonalData,
  getBikesData,
  getOrdersData,
  getLeaderBoardData,
  getPaymentsData,
};
