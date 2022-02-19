import React, { useEffect, useState } from "react";
import logo from "../assets/login/amazonlogo.png";
import facebook from "../assets/login/facebook.png";
import google from "../assets/login/google.png";
import errorimg from "../assets/login/errorimg.png";
import treeimage from "../assets/login/Rectangle4.png";

const LoginPage = () => {
  const initialValue = { email: "", password: "" };
  const [formValues, setFormValue] = useState(initialValue);
  const [formErrors, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target);

    const { name, value } = e.target;

    setFormValue({ ...formValues, [name]: value });
    setIsSubmit(true);

    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    //prevents page from getting refresh
    e.preventDefault();

    setFormError(validate(formValues));
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regerex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "The email field is required";
    } else if (!regerex.test(values.email)) {
      errors.email = "The is not valid email format!";
    }

    if (!values.password) {
      errors.password = "The password field is required";
    }

    return errors;
  };

  return (
    <div className="lg-container">
      <div className="tsection"></div>
      <div className="lg-cards">
        <div className="lg-cards-top">
          <img className="logo" src={logo}></img>
        </div>
        <div className="lg-header">
          <h3>Login</h3>
        </div>
        <div className="lg-timg">
          <img src={treeimage}></img>
        </div>
        {/* <pre>{JSON.stringify(formValues,undefined,2)}</pre> */}
        <form className="form_container" onSubmit={handleSubmit}>
          <div className="txt_field">
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Email.."
            />
            <span></span>
            <label>Email</label>
          </div>
          {formErrors && formErrors.email && (
            <div className="error">
              <img src={errorimg} />
              <p>{formErrors.email}</p>
            </div>
          )}
          <div className="txt_field">
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              placeholder="Password.."
            />
            <span></span>
            <label>Password</label>
          </div>
          {formErrors && formErrors.password && (
            <div className="error">
              <img src={errorimg} />
              <p>{formErrors.password}</p>
            </div>
          )}
          <button className="submit_button">Submit</button>
          <div className="submit-text">
            <p className="fp-primary">Forgot Password?</p>
            <p className="fp-red">New User? Sign Up</p>
          </div>
          <div className="signin-option">
            <p className="or">or</p>
          </div>
          <div className="google-section">
            <img src={google}></img>
            <p className="tagline">CONTINUE WITH GOOGLE</p>
          </div>
          <div className="facebook-section">
            <img src={facebook}></img>
            <p className="tagline">CONTINUE WITH FACEBOOK</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
