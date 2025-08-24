
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationSchema = Yup.object({
  username: Yup.string()
  .required("Username is required")
  .trim()
  .min(2, "Username must be at least 2 characters"),
  email: Yup.string()
  .required("Email is required")
  .trim()
  .email("Invalid email address"),
  password: Yup.string()
  .required("Password is required")
  .trim()
  .min(6, "Password must be at least 6 characters"),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={RegistrationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const payload = {
            username: values.username.trim(),
            email: values.email.trim().toLowerCase(),
            password: values.password.trim(),
          };

          await new Promise((r) => setTimeout(r, 700));

          console.log("Registration payload (password omitted):", {
            username: payload.username,
            email: payload.email,
          });

          resetForm();
          alert("Registration successful!");
        } catch (e) {
          alert("An error occurred. Please try again.");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form noValidate>
          <div>
            <label htmlFor="username">Username :</label>
            <Field
              id="username"
              name="username"
              type="text"
              autoComplete="username"
            />
            <ErrorMessage
              name="username"
              component="div"
              role="alert"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label htmlFor="email">Email :</label>
            <Field
              id="email"
              name="email"
              type="email"
              autoComplete="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              role="alert"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label htmlFor="password">Password :</label>
            <Field
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
            />
            <ErrorMessage
              name="password"
              component="div"
              role="alert"
              className="text-red-500 text-sm"
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Loading..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
