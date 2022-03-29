/*
Author - rahulmoje
*/
import { API } from "../API";

export const validateCouponCode = async (couponCode) => {
  const response = await fetch(`${API}/applyCoupon/${couponCode}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  })
  const data = await response.json()
  return data
};


