import { Container, Image, Form, Row, Col, Button } from "react-bootstrap"
import { saveCoupon } from "../../apicalls/CouponCalls";
import CouponSuccess from "./CouponSuccess";
import { useState, useRef, useEffect } from "react";
import { retrieveCoupons } from "../../apicalls/CouponCalls";
const AddCoupon = () => {

  //Regex for validations
  const onlyNumbersRegex = /^[0-9]*$/
  const couponCodeRegex = /^[A-Za-z0-9_-]*$/

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
  

  //Main payment form
  const [couponForm, setCouponForm] = useState({
    couponCode: "",
    discountPercentage: "",
    expiryDate: ""
  });

  const scrollRef = useRef(null);

  const [couponSuccess, setCouponSuccess] = useState(false);
  const [couponId, setCouponId] = useState("");

  const [validated, setValidated] = useState(false);

  //Form errors
  const [formErrors, setFormErrors] = useState({});

  //Common method to update form fields
  const updateFormFields = (formFieldName, formFieldValue) => {
    setCouponForm({
      ...couponForm,
      [formFieldName]: formFieldValue,
    });
    setFormErrors({});
  };

  //On submitting form
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const currentErrors = validateForm();
    if (Object.keys(currentErrors).length > 0) {
      setFormErrors(currentErrors);
      setValidated(false);
      setCouponSuccess(false);
      scrollRef.current.scrollIntoView();
    } else {
      saveCoupon(couponForm).then((response) => {
        if (response.success) {
          setValidated(true);
          setCouponSuccess(true);
          setCouponId(response.id);
        } else {
          setValidated(false);
          setCouponSuccess(false);
          setFormErrors({ message: "Failed to save coupon. Please try again" });
          scrollRef.current.scrollIntoView();
        }
      });
    }
  };

  //Form validations
  const validateForm = () => {
    const errors = {};
    if (!onlyNumbersRegex.test(couponForm.discountPercentage)) {
      errors.discountPercentage = "Discount percentage should only be a number";
    }
    if (!couponCodeRegex.test(couponForm.couponCode)) {
      errors.couponCode = "Coupon code should consist of only letters and digits";
    } else {
        checkAlreadyExistingCode(errors)
    }
    if (new Date() > new Date(couponForm.expiryDate)) {
        errors.expiryDate = "Expiry date should be greater than today"
    }

    return errors;
  };

  const checkAlreadyExistingCode = (errors) => {
      var present = false
      for(var i=0;i<coupons.length;i++) {
          if(coupons[i].couponCode.toLowerCase() === couponForm.couponCode.toLowerCase()) {
              present = true
          }
      }
      if(present) {
        errors.couponCode = "Coupon already exists";
      }
  }

    
  return(
<Container>
      {couponSuccess === false ? (
        <div className="py-3 text-center">
          <Image
            className="mb-4 mx-auto d-block"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcp5A_15f6JRTCG__u8xicumSBBoBIXy1B6w&usqp=CAU"
            alt=""
            height="15%"
            width="15%"
          />
          <h2>Add new coupon</h2>
          <div ref={scrollRef}>
            <Container className="p-1 col-md-6 block-example">
              <Form validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3 justify-content-md-center">
                  <Form.Group as={Col} md="6">
                    <Form.Label> {formErrors.message}</Form.Label>
                  </Form.Group>
                </Row>
                <Row className="mb-3 justify-content-md-center">
                  <Form.Group as={Col} md="6">
                    <Form.Label>Coupon Code</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      id="couponCode"
                      value={couponForm.couponCode}
                      placeholder="Enter coupon code"
                      onChange={(e) =>
                        updateFormFields("couponCode", e.target.value)
                      }
                      isInvalid={!!formErrors.couponCode}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {formErrors.couponCode}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3 justify-content-md-center">
                  <Form.Group as={Col} md="6">
                    <Form.Label>Discount Percentage</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      id="discountPercentage"
                      value={couponForm.discountPercentage}
                      placeholder="Enter discount percentage"
                      onChange={(e) =>
                        updateFormFields("discountPercentage", e.target.value)
                      }
                      isInvalid={!!formErrors.discountPercentage}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {formErrors.discountPercentage}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3 justify-content-md-center">
                  <Form.Group as={Col} md="6">
                    <Form.Label>Expiry date</Form.Label>
                    <Form.Control
                      required
                      type="date"
                      id="expiryDate"
                      value={couponForm.expiryDate}
                      onChange={(e) =>
                        updateFormFields("expiryDate", e.target.value)
                      }
                      isInvalid={!!formErrors.expiryDate}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {formErrors.expiryDate}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3 justify-content-md-center">
                  <Form.Group as={Col} md="6">
                    <Button as="input" type="submit" value="Submit" />
                  </Form.Group>
                </Row>
              </Form>
            </Container>
          </div>
        </div>
      ) : (
        <CouponSuccess couponId={couponId} />
      )}
    </Container>
  )

    
}


export default AddCoupon