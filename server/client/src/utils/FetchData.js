import axios from "axios";
import { API_URL } from "./config";
axios.defaults.withCredentials = true;

export const postAPI = async (url, post, token) => {
  const res = await axios.post(`/api/${url}`, post, {
    headers: { "Content-Type": "application/json", Authorization: token },
  });

  return res;
};

export const getAPI = async (url, token) => {
  const res = await axios.get(`${API_URL}/api/${url}`, {
    headers: { Authorization: token },
  });

  return res;
};

export const patchAPI = async (url, post, token) => {
  const res = await axios.patch(`${API_URL}/api/${url}`, post, {
    headers: { Authorization: token },
  });

  return res;
};

export const putAPI = async (url, post, token) => {
  const res = await axios.put(`${API_URL}/api/${url}`, post, {
    headers: { Authorization: token },
  });

  return res;
};

export const deleteAPI = async (url, token) => {
  const res = await axios.delete(`${API_URL}/api/${url}`, {
    headers: { Authorization: token },
  });

  return res;
};
