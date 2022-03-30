/*
Author - rahulmoje
*/
import { useRef, useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { saveCardDetails } from "../../apicalls/PaymentCalls";
import CardSuccess from "./CardSuccess";

const CryptoJS = require("crypto-js");

const AddCard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  //Regex for validations
  const onlyNumbersRegex = /^[0-9]*$/;
  const nameRegex = /^[a-zA-Z\s]*$/;
  const dateExpiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;

  //Main payment form
  const [cardForm, setCardForm] = useState({
    cardType: "",
    cardNumber: "",
    cardName: "",
    cardValidity: "",
    cvv: "",
  });

  const scrollRef = useRef(null);

  const [cardSuccess, setCardSuccess] = useState(false);
  const [cardId, setCardId] = useState("");

  cardForm.userId = user === null ? 1 : user.id;
  cardForm.userEmail = user === null ? "example@gmail.com" : user.email;

  const [validated, setValidated] = useState(false);

  //Form errors
  const [formErrors, setFormErrors] = useState({});

  //Common method to update form fields
  const updateFormFields = (formFieldName, formFieldValue) => {
    setCardForm({
      ...cardForm,
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
      setCardSuccess(false);
      scrollRef.current.scrollIntoView();
    } else {
      cardForm.cvv = CryptoJS.AES.encrypt(
        JSON.stringify(cardForm.cvv),
        "csci5409_project_group01"
      ).toString();
      saveCardDetails(cardForm).then((response) => {
        if (response.success) {
          setValidated(true);
          setCardSuccess(true);
          setCardId(response.id);
        } else {
          setValidated(false);
          setCardSuccess(false);
          setFormErrors({ message: "Failed to save a card. Please try again" });
          scrollRef.current.scrollIntoView();
        }
      });
    }
  };

  //Form validations
  const validateForm = () => {
    const errors = {};
    if (cardForm.cardType === "" || cardForm.cardType === "Choose card type") {
      errors.cardType = "Choose either debit or credit for card type";
    }
    if (!onlyNumbersRegex.test(cardForm.cardNumber)) {
      errors.cardNumber = "Card number should consist of only digits";
    }
    if (cardForm.cardNumber.length !== 16) {
      errors.cardNumber = "Card number should be of 16 digits";
    }
    if (!nameRegex.test(cardForm.cardName)) {
      errors.cardName = "Card name should consist of only alphabets and spaces";
    }
    if (!dateExpiryRegex.test(cardForm.cardValidity)) {
      errors.cardValidity =
        "Validity date should only consist of digits in the format MM/YYYY with appropriate month and year";
    }
    if (!onlyNumbersRegex.test(cardForm.cvv)) {
      errors.cvv = "CVV should only consist of digits";
    }
    if (cardForm.cvv.length !== 3) {
      errors.cvv = "CVV should be of 3 digits";
    }
    return errors;
  };

  return (
    <Container>
      {cardSuccess === false ? (
        <div className="py-3 text-center">
          <Image
            className="mb-4 mx-auto d-block"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcp5A_15f6JRTCG__u8xicumSBBoBIXy1B6w&usqp=CAU"
            alt=""
            height="15%"
            width="15%"
          />
          <h2>Add new card</h2>
          <p className="lead">
            Add a new card below for a faster checkout process
          </p>
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
                    <Form.Label>Card type</Form.Label>
                    <Form.Select
                      onChange={(e) =>
                        updateFormFields("cardType", e.target.value)
                      }
                      isInvalid={!!formErrors.cardType}
                    >
                      <option value="">Choose card type</option>
                      <option value="Debit">Debit</option>
                      <option value="Credit">Credit</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {formErrors.cardType}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3 justify-content-md-center">
                  <Form.Group as={Col} md="6">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      id="cardNumber"
                      value={cardForm.cardNumber}
                      placeholder="Enter card number"
                      onChange={(e) =>
                        updateFormFields("cardNumber", e.target.value)
                      }
                      isInvalid={!!formErrors.cardNumber}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {formErrors.cardNumber}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3 justify-content-md-center">
                  <Form.Group as={Col} md="6">
                    <Form.Label>Cardholder's name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      id="cardHolderName"
                      value={cardForm.cardName}
                      placeholder="Enter cardholders name"
                      onChange={(e) =>
                        updateFormFields("cardName", e.target.value)
                      }
                      isInvalid={!!formErrors.cardName}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {formErrors.cardName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3 justify-content-md-center">
                  <Form.Group as={Col} md="6">
                    <Form.Label>Card validity</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      id="cardValidity"
                      value={cardForm.cardValidity}
                      placeholder="Enter card expiry - mm/yyyy"
                      onChange={(e) =>
                        updateFormFields("cardValidity", e.target.value)
                      }
                      isInvalid={!!formErrors.cardValidity}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {formErrors.cardValidity}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3 justify-content-md-center">
                  <Form.Group as={Col} md="6">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      id="cardCvv"
                      value={cardForm.cvv}
                      placeholder="Enter CVV"
                      onChange={(e) => updateFormFields("cvv", e.target.value)}
                      isInvalid={!!formErrors.cvv}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {formErrors.cvv}
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
        <CardSuccess cardId={cardId} />
      )}
    </Container>
  );
};

export default AddCard;
