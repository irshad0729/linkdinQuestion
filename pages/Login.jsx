import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const defaultValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = yup.object().shape({
  name: yup.string().required("Please enter the name"),
  email: yup.string().required().email("plz enter valid email"),
});
const handleSubmit = (values) => {
  console.log(values);
};

const Login = () => {
  return (
    <>
      <h1>Login form using formik and yup library</h1>
      <Formik
        initialValues={defaultValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <Field type="text" name="name" />
            <p style={{ color: "red" }}>
              <ErrorMessage name="name" />
            </p>
          </div>
          <div>
            <Field type="email" name="email" />
            <p style={{ color: "red" }}>
              <ErrorMessage name="email" />
            </p>
          </div>
          <div>
            <Field type="password" name="password" />
            <p style={{ color: "red" }}>
              <ErrorMessage name="password" />
            </p>
          </div>
          <div>
            <button type="submit" name="submit" value="submit">
              Sign In
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
