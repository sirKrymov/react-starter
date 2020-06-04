import React, { ReactElement } from 'react';

// node modules
import * as Yup from 'yup';
import {
  FormikErrors,
  FormikValues,
  FormikProps,
  withFormik,
  FieldProps,
  FormikBag,
  Field,
  Form
} from 'formik';

// custom components
import { FieldLabel } from 'components/view/atoms/FieldLabel';
import { Button } from 'components/view/atoms/Button';
import { Input } from 'components/view/atoms/Input';

// constants

// services

// utils

// styles
import './styles.scss';

// imported interfaces and types

// inner interfaces and types
interface IProps {
  submitNetProcess?: boolean;
  onSubmit(values: IFormValues): void;
}

interface IFormValues {
  example: string;
}

const initialFormValues: IFormValues = {
  example: ''
};

function ExampleFormBase({
  submitNetProcess
}: IProps & FormikProps<IFormValues>): ReactElement {
  return (
    <Form className="example-form">
      <Field required name="example">
        {({ field, meta: { touched, error } }: FieldProps): ReactElement => {
          return (
            <FieldLabel
              blockTitle
              subLabel="Required"
              status={{ error: touched && !!error, des: error }}
              label="Email address"
            >
              <Input
                {...field}
                placeholder="Enter your example here"
                error={touched && !!error}
                id="ex-form-example"
              />
            </FieldLabel>
          );
        }}
      </Field>

      <Button
        loading={submitNetProcess}
        height="lg"
        type="submit"
        id="ex-form-submit-btn"
      >
        Submit
      </Button>
    </Form>
  );
}

export const ExampleForm = withFormik({
  mapPropsToValues: () => initialFormValues,

  validationSchema: Yup.object().shape({
    example: Yup.string().required('Example is required')
  }),

  validateOnMount: true,

  handleSubmit: (
    values,
    { resetForm, props }: FormikBag<IProps, IFormValues>
  ) => {
    props.onSubmit(values);
    resetForm();
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validate: (_values: FormikValues) => {
    const errors: FormikErrors<IFormValues> = {};

    return errors;
  }
})(ExampleFormBase);
