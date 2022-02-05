import axios from "axios";

const serverApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export const getCampByType = async (type: string) => {
  const response = await serverApi.get(`/camps?type=${type}`);
  try {
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCamp = async (campId: number) => {
  const response = await serverApi.get(`/camps${campId}`);
  try {
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
