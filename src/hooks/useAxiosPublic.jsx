import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000",
  //   baseURL: "",
});

export default function useAxiosPublic() {
  return axiosPublic;
}
