
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationSchema = Yup.object({
  userName: Yup.string()
    .trim()
    .required("Username is required")
    .min(2, "Username must be at least 2 characters"),
  email: Yup.string()
    .trim()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .trim()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ userName: "", email: "", password: "" }}
      validationSchema={RegistrationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const payload = {
            userName: values.userName.trim(),
            email: values.email.trim().toLowerCase(),
            password: values.password.trim(),
          };

          await new Promise((r) => setTimeout(r, 700));

          console.log("Registration payload (password omitted):", {
            userName: payload.userName,
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
            <label htmlFor="userName">Username :</label>
            <Field
              id="userName"
              name="userName"
              type="text"
              autoComplete="username"
            />
            <ErrorMessage
              name="userName"
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
