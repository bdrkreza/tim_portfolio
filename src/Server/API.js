import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default API;

export const multipleFilesUpload = async (data, options) => {
  try {
    await axios.post(API + "multipleFiles", data, options);
  } catch (error) {
    throw error;
  }
};

export const getMultipleFiles = async () => {
  try {
    const { data } = await axios.get(API + "getMultipleFiles");
    return data;
  } catch (error) {
    throw error;
  }
};
