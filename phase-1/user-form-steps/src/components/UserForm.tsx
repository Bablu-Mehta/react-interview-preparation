import { useFormik } from "formik";
import { useState } from "react";
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
    zip: yup
      .string()
      .matches(/^\d{6}$/, "Zip code must be 6 digits")
      .required("Zip is required."),
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
    onSubmit: (values) => {
      const { name, email, street, city, zip } = values;
      if (step == 1) {
        if (!name) {
          formik.setFieldError("name", "Please enter name.");
          return;
        }

        if (!email) {
          formik.setFieldError("email", "Please enter email");
          return;
        }
        setStep(2);
      } else if (step == 2) {
        if (!street) {
          formik.setFieldError("street", "Please enter street");
          return;
        }

        if (!city) {
          formik.setFieldError("city", "Please enter City");
          return;
        }

        if (!zip) {
          formik.setFieldError("zip", "Please enter Zip code");
          return;
        }
        setStep(3);
      }
      if (step < 3) {
        return;
      }
      alert("form submitted successfully");
      formik.resetForm();
      setStep(1);
    },
  });

  console.log(formik.errors, "errors")

  const handleValueChange = (value: string, name: string) => {
    formik.setFieldValue(name, value);
    formik.setFieldError(name, "");
  };

  const isStepValid = () => {
    if (step === 1) return formik.values.name && formik.values.email;
    if (step === 2)
      return formik.values.street && formik.values.city && formik.values.zip;
    return true;
  };

  const validateStep = async () => {
    try {
      if (step === 1) {
        await validation.validateAt("name", formik.values);
        await validation.validateAt("email", formik.values);
      }
      if (step === 2) {
        await validation.validateAt("street", formik.values);
        await validation.validateAt("city", formik.values);
        await validation.validateAt("zip", formik.values);
      }
      return true;
    } catch (error) {
      // formik.setErrors({ ...formik.errors, [error.path]: error.message });
      return false;
    }
  };
  

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = await validateStep();
    if (isValid) setStep((prev) => prev + 1);
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
            <span>
              <strong>Name:</strong> {formik?.values?.name}
            </span>
            <span>
              <strong>Email:</strong> {formik?.values?.email}
            </span>
            <span>
              <strong>Street:</strong> {formik?.values?.street}
            </span>
            <span>
              <strong>City:</strong> {formik?.values?.city}
            </span>
            <span>
              <strong>Zip Code:</strong> {formik?.values?.zip}
            </span>
          </div>
        )}

        <div className="button_container">
          {step > 1 && (
            <button
              onClick={(e) => {
                e.preventDefault();
                setStep((prev) => prev - 1);
              }}
            >
              Previous
            </button>
          )}
           {step < 3 && <button onClick={handleNext} disabled={!isStepValid()}>Next</button>}

          {step == 3 && <button type="submit">Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default UserForm;
