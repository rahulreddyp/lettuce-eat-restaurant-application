import { Container, Button } from "react-bootstrap"
import { retrieveCoupons } from "../../apicalls/CouponCalls"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import CouponTable from "./CouponTable"
import NoCoupons from "./NoCoupons"

const CouponsBlock = () => {

    const [coupons, setCoupons] = useState([])
    const user = JSON.parse(localStorage.getItem("user"))
    const isAdmin = user == null ? false : user.email === "group01@gmail.com"
    const navigate = useNavigate()

    useEffect(() => {
        retrieveCoupons().then((response) => {
            console.log("Coupons", response);
            setCoupons(response)
        });
        return () => {
            setCoupons({});
        };
    }, []);

    const redirectToAddCoupon = () => {
        navigate('/addCoupon')
    }

    return (
        <Container>
            {
                isAdmin
                ? <Button type="submit" onClick = {redirectToAddCoupon}>Add new coupon</Button>
                : <div></div>
            }
            {
                isAdmin && coupons.length > 0
                ? <CouponTable />
                : <div></div>
            }
            {
                (!isAdmin
                ?  coupons.length > 0
                    ? <CouponTable />
                    : <NoCoupons />
                : <div></div>)
            }
        </Container >
    )
}


export default CouponsBlock