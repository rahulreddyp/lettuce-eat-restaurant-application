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
    }
  })
  const data = await response.json()
  return data
};

export const retrieveCoupons = async () => {
  const response = await fetch(`${API}/coupons`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  const data = await response.json()
  return data
}

export const saveCoupon = async(coupon) => {
  const response = await fetch(`${API}/coupons`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(coupon)
  })
  const data = await response.json()
  return data
}


