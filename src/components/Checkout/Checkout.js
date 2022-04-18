import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
const Checkout = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const pNumberRef = useRef("");
  const addressRef = useRef("");

  const submitCheckout = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phoneNumber = pNumberRef.current.value;
    const address = addressRef.current.value;
    if (name && email && phoneNumber && address) {
      toast.success("Congratulations,You are now a part of My Journey", {
        theme: "colored",
      });
    } else {
      toast.error("Please Fill Up the Full Form", {
        theme: "colored",
      });
    }
  };
  return (
    <div className="mb-10">
      <h2 className="text-center m-3 font-mono font-bold">Confirm Checkout</h2>
      <Form className="mx-auto w-full sm:w-96 md:w-96 border-2 p-4 rounded-md">
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter Your Full Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter Email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your Phone Number</Form.Label>
          <Form.Control
            ref={pNumberRef}
            type="tel"
            placeholder="Enter Phone Number"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your Address</Form.Label>
          <Form.Control
            ref={addressRef}
            type="text"
            placeholder="Enter Address"
            required
          />
        </Form.Group>
        <Button variant="dark" type="submit" onClick={submitCheckout}>
          Confirm Checkout
        </Button>
        <ToastContainer />
      </Form>
    </div>
  );
};

export default Checkout;
