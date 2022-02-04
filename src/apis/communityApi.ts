import axios from "axios";

const serverApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getCommunities = async () => {
  const response = await serverApi.get(`/api/communities`);
  try {
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCommunity = async (communityId: number) => {
  const response = await serverApi.get(`/communities/${communityId}`);
  try {
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
