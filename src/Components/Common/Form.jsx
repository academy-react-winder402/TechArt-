import { Form, Formik } from "formik";

const Forms = ({
  initialValues,
  placeholder,
  onSubmit,
  children,
  validationSchema,
  enableReinitialize,
}) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize={enableReinitialize}
      >
        {(form) => {
          return (
            <Form>
              {typeof children == "function" ? children(form) : children}
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export { Forms };
