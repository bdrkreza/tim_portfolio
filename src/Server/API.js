import axios from "axios";

const apiUrl = "http://localhost:5000/api/";

export const multipleFilesUpload = async (data) => {
  try {
    await axios.post(apiUrl + "post", data);
  } catch (error) {
    throw error;
  }
};

export const getMultipleFiles = async () => {
  try {
    const { data } = await axios.get(apiUrl + "project_get");

    return data;
  } catch (error) {
    throw error;
  }
};
