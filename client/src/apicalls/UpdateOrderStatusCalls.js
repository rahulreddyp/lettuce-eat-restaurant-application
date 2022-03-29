import { API } from "../API";

export const getAllOrders = () => {
  return fetch(`${API}/getAllOrders`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const getOrderById = (id) => {
  return fetch(`${API}/getOrderById/${id}`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};
