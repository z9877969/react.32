import axios from "axios";

export const getImagesApi = ({ page, search }) => {
  return axios
    .get()
    .then((data) => data)
    .catch((err) => {
      throw err;
    });
};
