import React, { ReactElement } from 'react';

import * as Yup from 'yup';
import {
  FormikErrors,
  FormikProps,
  withFormik,
  FieldProps,
  FormikBag,
  Field
} from 'formik';

import { Form, FormBlock, FormText } from 'components/view/compound/Form';
import { VisibilityIcon } from 'components/view/atoms/VisibilityIcon';
import { FieldLabel } from 'components/view/atoms/FieldLabel';
import { BoolRp } from 'components/logic/renderProp/BoolRp';
import { Button } from 'components/view/atoms/Button';
import { Input } from 'components/view/atoms/Input';
import { Link } from 'components/view/atoms/Link';

import urls from 'constants/urls';

import { ISignupRequest } from 'types/auth.interface';

interface IProps {
  onSubmit(values: IFormValues): void;
  submitFetching?: boolean;
}

interface IFormValues extends ISignupRequest {}

const initialFormValues: IFormValues = {
  confirmPassword: '',
  firstName: '',
  lastName: '',
  password: '',
  email: ''
};

function SignupFormBase({
  submitFetching
}: IProps & FormikProps<IFormValues>): ReactElement {
  return (
    <Form>
      <FormBlock marginBottom="s6">
        <FormText text="Sign up" type="title" />
      </FormBlock>

      <FormBlock marginBottom="s2">
        <Field required name="firstName">
          {({ field, meta: { touched, error } }: FieldProps): ReactElement => {
            return (
              <FieldLabel
                blockTitle
                subLabel="Required"
                status={{ error: touched && !!error, des: error }}
                label="First name"
              >
                <Input
                  {...field}
                  placeholder="Enter your first name"
                  error={touched && !!error}
                  id="su-form-firstname"
                />
              </FieldLabel>
            );
          }}
        </Field>

        <Field required name="lastName">
          {({ field, meta: { touched, error } }: FieldProps): ReactElement => {
            return (
              <FieldLabel
                blockTitle
                subLabel="Required"
                status={{ error: touched && !!error, des: error }}
                label="Last name"
              >
                <Input
                  {...field}
                  placeholder="Enter your last name"
                  error={touched && !!error}
                  id="su-form-lastname"
                />
              </FieldLabel>
            );
          }}
        </Field>

        <Field required name="email">
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
                  placeholder="Enter your email here"
                  error={touched && !!error}
                  id="su-form-email"
                />
              </FieldLabel>
            );
          }}
        </Field>

        <Field required name="password">
          {({ field, meta: { touched, error } }: FieldProps): ReactElement => {
            return (
              <FieldLabel
                blockTitle
                subLabel="Required"
                status={{ error: touched && !!error, des: error }}
                label="Password"
              >
                <BoolRp
                  render={({ boolValue, toggleBool }): ReactElement => (
                    <Input
                      {...field}
                      placeholder="Enter your password here"
                      rightBlock={
                        <VisibilityIcon
                          onClick={toggleBool}
                          isVisible={boolValue}
                          id="su-form-password-icon"
                        />
                      }
                      error={touched && !!error}
                      type={boolValue ? 'text' : 'password'}
                      id="su-form-password"
                    />
                  )}
                />
              </FieldLabel>
            );
          }}
        </Field>

        <Field required name="confirmPassword">
          {({ field, meta: { touched, error } }: FieldProps): ReactElement => {
            return (
              <FieldLabel
                blockTitle
                subLabel="Required"
                status={{ error: touched && !!error, des: error }}
                label="Confirm password"
              >
                <BoolRp
                  render={({ boolValue, toggleBool }): ReactElement => (
                    <Input
                      {...field}
                      placeholder="Confirm password here"
                      rightBlock={
                        <VisibilityIcon
                          onClick={toggleBool}
                          isVisible={boolValue}
                          id="su-form-confirm-password-icon"
                        />
                      }
                      error={touched && !!error}
                      type={boolValue ? 'text' : 'password'}
                      id="su-form-confirm-password"
                    />
                  )}
                />
              </FieldLabel>
            );
          }}
        </Field>
      </FormBlock>

      <FormBlock marginBottom="s3">
        <Button
          loading={submitFetching}
          height="lg"
          type="submit"
          id="su-form-submit-btn"
        >
          Sign up
        </Button>
      </FormBlock>

      <FormBlock alignH="center">
        <Link to={urls.auth.signin} id="su-form-back-link">
          Back to sign in
        </Link>
      </FormBlock>
    </Form>
  );
}

export const SignupForm = withFormik({
  mapPropsToValues: () => initialFormValues,

  validationSchema: Yup.object().shape({
    firstName: Yup.string().required('Email is required'),
    lastName: Yup.string().required('Email is required'),
    email: Yup.string()
      .email('Email not valid')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Password is required')
  }),

  validateOnMount: true,

  handleSubmit: (values, { props }: FormikBag<IProps, IFormValues>) => {
    props.onSubmit(values);
  },

  validate: () => {
    const errors: FormikErrors<IFormValues> = {};

    return errors;
  }
})(SignupFormBase);
