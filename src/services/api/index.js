import request from "./wrapper";

const login = (payload) => {
  return request({
    url: "/api/users.login_mobile_external",
    method: "POST",
    data: payload,
  });
};

const register = (payload) => {
  return request({
    url: "/api/register",
    method: "POST",
    data: payload,
  });
};

const api = {
  register,
  login,
};

export default api;
