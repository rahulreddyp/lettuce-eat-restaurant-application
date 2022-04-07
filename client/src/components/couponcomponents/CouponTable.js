import { Table } from "react-bootstrap"
import { useState, useEffect } from "react"
import { retrieveCoupons } from "../../apicalls/CouponCalls"
const CouponTable = () => {

    const [coupons, setCoupons] = useState([])

    useEffect(() => {
        retrieveCoupons().then((response) => {
            console.log("Coupons", response);
            setCoupons(response)
        });
        return () => {
            setCoupons({});
        };
    }, []);
    
    return (
        <div className="py-3 text-center">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Coupon Code</th>
                        <th>Discount Percentage</th>
                        <th>Expiry Date</th>
                    </tr>
                    {
                        coupons.map((coupon) => (
                            <tr key={coupon._id}>
                                <td>{coupon.couponCode}</td>
                                <td>{coupon.discountPercentage}%</td>
                                <td>{new Date(coupon.expiryDate).toLocaleDateString("en-CA")}</td>
                            </tr>
                        ))
                    }
                </thead>
            </Table>
        </div>
    )
}

export default CouponTable