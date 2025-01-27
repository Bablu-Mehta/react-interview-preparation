import { useFormik } from "formik";
import {  MouseEvent, useState } from "react";
import * as yup from "yup";
import "./userFrom.css";

const UserForm = () => {
  const [step, setStep] = useState<number>(1);

  const validation = yup.object({
    name: yup.string().required("Name is required."),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required."),
    street: yup.string().required("Street is required."),
    city: yup.string().required("City is required."),
    zip: yup.number().required("Zip is required."),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      street: "",
      city: "",
      zip: "",
    },
    validationSchema: validation,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: () => {
      alert("form submitted successfully");
      formik.resetForm();
      setStep(1);
    },
  });

  const handleValueChange = (value: string, name: string) => {
    formik.setFieldValue(name, value);
    formik.setFieldError(name, "");
  };

  const handleNext = (e: MouseEvent<HTMLButtonElement>) => {
    if (step == 1) {
      if (!formik?.values?.email || !formik?.values?.name) {
        return;
      }
    } else if (step == 2) {
      if (
        !formik?.values?.city ||
        !formik?.values?.street ||
        !formik?.values?.zip
      ) {
        return;
      }
    }

    // formik.setErrors({});
    // formik.setFieldError("city", "");
    // formik.setFieldError("street", "");
    // formik.setFieldError("zip", "");

    setStep((prev) => prev + 1);
  };

  return (
    <div className="main_container">
      <form onSubmit={formik.handleSubmit} className="form-container">
        <h2>Step: {step}</h2>
        {step == 1 && (
          <>
            <div className="input_container">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={formik?.values?.name}
                onChange={(e) => handleValueChange(e?.target?.value, "name")}
              />
              {formik?.errors?.name && (
                <span className="error">{formik?.errors?.name}</span>
              )}
            </div>
            <div className="input_container">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                value={formik?.values?.email}
                onChange={(e) => handleValueChange(e?.target?.value, "email")}
              />
              {formik?.errors?.email && (
                <span className="error">{formik?.errors?.email}</span>
              )}
            </div>
          </>
        )}

        {step == 2 && (
          <>
            <div className="input_container">
              <label htmlFor="street">Street</label>
              <input
                type="text"
                name="street"
                value={formik?.values?.street}
                onChange={(e) => handleValueChange(e?.target?.value, "street")}
              />
              {formik?.errors?.street && (
                <span className="error">{formik?.errors?.street}</span>
              )}
            </div>
            <div className="input_container">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                value={formik?.values?.city}
                onChange={(e) => handleValueChange(e?.target?.value, "city")}
              />
              {formik?.errors?.city && (
                <span className="error">{formik?.errors?.city}</span>
              )}
            </div>
            <div className="input_container">
              <label htmlFor="zip">Zip Code</label>
              <input
                type="number"
                name="zip"
                value={formik?.values?.zip}
                onChange={(e) => handleValueChange(e?.target?.value, "zip")}
              />
              {formik?.errors?.zip && (
                <span className="error">{formik?.errors?.zip}</span>
              )}
            </div>
          </>
        )}
        {step == 3 && (
          <div className="summary_container">
            <span>Name: {formik?.values?.name}</span>
            <span>Email: {formik?.values?.email}</span>
            <span>Street: {formik?.values?.street}</span>
            <span>City: {formik?.values?.city}</span>
            <span>Zip Code: {formik?.values?.zip}</span>
          </div>
        )}

        <div className="button_container">
          {step > 1 && (
            <button
              onClick={() => {
                setStep((prev) => prev - 1);
              }}
            >
              Previous
            </button>
          )}
          {step < 3 && <button type="submit" >Next</button>}

          {step == 3 && <button type="submit">Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default UserForm;
