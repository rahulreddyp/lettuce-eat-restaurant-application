import { API } from "../API";

export const validateCouponCode = async (couponCode) => {
    try {
        const res = await fetch(`${API}/applyCoupon/${couponCode}`, {
            method: "GET",
        });
        return await res.json();
    } catch (err) {
        return console.log(err);
    }
};