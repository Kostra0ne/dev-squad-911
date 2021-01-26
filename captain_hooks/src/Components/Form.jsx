import React, { useState } from "react";
import { useForm } from "hooks/useForm";
import Button from "Components/Button";
import "styles/Form.scss";

const Form = (props) => {
  console.log(props);

  const { formValues, handleChange, getInputProps } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isAdmin: false,
  });

  const [image, setImage] = useState({
    fakeURL: "",
    file: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const fullObject = { ...formValues, image: image.file };
    // Posting
    //console.log(fullObject);
  };

  const handleImage = (event) => {
    const fakeURL = URL.createObjectURL(event.target.files[0]);
    // setTempImageURL(fakeURL);
    setImage({
      fakeURL: fakeURL,
      file: event.target.files[0],
    });
    // console.log(event.target.files[0]);
  };

  return (
    <>
      <pre>{JSON.stringify(formValues, null, 2)}</pre>

      <img src={image.fakeURL} alt="" />

      <form autoComplete="off" className="Form" onSubmit={handleSubmit}>
        <h1 className="Form__title">Subscribe</h1>
        <div className="Form__group">
          <label className="Form__label" htmlFor="firstName">
            First name
          </label>
          <input
            className="Form__input"
            type="text"
            {...getInputProps("firstName")}
          />
        </div>
        <div className="Form__group">
          <label className="Form__label" htmlFor="lastName">
            Last name
          </label>
          <input
            {...getInputProps("lastName")}
            className="Form__input"
            type="text"
          />
        </div>
        <div className="Form__group">
          <label className="Form__label" htmlFor="email">
            Email
          </label>
          <input
            {...getInputProps("email")}
            className="Form__input"
            type="email"
          />

          <input
            onChange={handleImage}
            className="Form__input"
            id="image"
            type="file"
            name="image"
          />
        </div>
        <div className="Form__group">
          <label className="Form__label" htmlFor="password">
            Password
          </label>
          <input
            onChange={handleChange}
            className="Form__input"
            id="password"
            type="password"
            name="password"
          />
        </div>
        <div className="Form__group">
          <label className="Form__label" htmlFor="isAdmin">
            Admin
          </label>
          <input
            onChange={handleChange}
            className="Form__input"
            id="isAdmin"
            name="isAdmin"
            type="checkbox"
          />
        </div>
        <Button type="success">Submit</Button>
      </form>
    </>
  );
};

export default Form;
