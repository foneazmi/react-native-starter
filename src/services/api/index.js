import request from './wrapper';

const login = payload => {
  return request({
    url: '/users/login',
    method: 'PATCH',
    data: payload,
  });
};

const register = payload => {
  return request({
    url: '/users/register',
    method: 'POST',
    data: payload,
  });
};

//Booking
const getListProject = () => {
  return request({
    url: '/booking/get_project',
    method: 'GET',
  });
};
const getListRoom = id => {
  return request({
    url: `/booking/get_room/${id}`,
    method: 'GET',
  });
};

const booking = payload => {
  return request({
    url: '/booking/create',
    method: 'POST',
    data: payload,
  });
};

const bookingInformation = (id, payload) => {
  return request({
    url: `/booking/${id}/detail`,
    method: 'PUT',
    data: payload,
  });
};
const reschedule = (id, payload) => {
  return request({
    url: `/booking/${id}/edit`,
    method: 'PUT',
    data: payload,
  });
};

//Payment

const getListBooking = id => {
  return request({
    url: 'installment/detail',
    method: 'GET',
  });
};

const paymentInformation = payload => {
  return request({
    url: '/installment/request',
    method: 'POST',
    data: payload,
  });
};

const requestPayment = (bank, payload) => {
  return request({
    url: `/installment/request/${bank}`,
    method: 'POST',
    data: payload,
  });
};

const api = {
  register,
  login,

  //Booking
  getListRoom,
  getListProject,
  booking,
  bookingInformation,
  reschedule,

  //payment
  getListBooking,
  paymentInformation,
  requestPayment,
};

export default api;
