import axios from "axios";

const ajax = axios.create({
  baseURL: "xxxxxxx"
});

ajax.interceptors.request.use(
  config => {
    let token = localStorage.getItem("token");
    if (token === null) {
      console.log("没有token");
    } else {
      config.headers.Authorization = token;
    }
    return config;
  },
  error => Promise.reject(error)
);

ajax.interceptors.response.use(
  response => {
    const responseData = response.data;
    if (isEmpty(responseData)) {
      return {};
    }
    if (responseData.success) {
      return responseData.data;
    }
    return Promise.reject(response);
  },
  error => {
    const errorResponse = error.response;
    if (!errorResponse) {
      return Promise.reject({ errorMessage: "未知错误", status: 500 });
    }
    if (errorResponse.status === 403) {
      console.log("返回单点登录");
    }
    return Promise.reject({
      ...errorResponse.data,
      status: errorResponse.status
    });
  }
);

export default ajax;
