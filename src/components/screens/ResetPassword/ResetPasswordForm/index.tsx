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
import { FieldLabel } from 'components/view/atoms/FieldLabel';
import { Button } from 'components/view/atoms/Button';
import { Input } from 'components/view/atoms/Input';
import { Link } from 'components/view/atoms/Link';

import urls from 'constants/urls';

import { IResetPasswordRequest } from 'types/auth.interface';

interface IProps {
  onSubmit(values: IFormValues): void;
  submitFetching?: boolean;
  error?: string;
}

interface IFormValues extends IResetPasswordRequest {}

const initialFormValues: IFormValues = {
  email: ''
};

function ResetPasswordFormBase({
  submitFetching,
  error
}: IProps & FormikProps<IFormValues>): ReactElement {
  return (
    <Form>
      <FormBlock marginBottom="s6">
        <FormText text="Reset password" type="title" />
      </FormBlock>

      <FormBlock marginBottom="s6">
        <FormText
          type="subtitle"
          text="Enter the email address associated with your account, and we’ll email you a link to reset your password."
        />
      </FormBlock>

      <FormBlock marginBottom="s2">
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
                  id="rp-form-email"
                />
              </FieldLabel>
            );
          }}
        </Field>
      </FormBlock>

      {!!error && (
        <FormBlock marginBottom="s6">
          <FormText type="simple" text={`Error ${error}`} />
        </FormBlock>
      )}

      <FormBlock marginBottom="s3">
        <Button
          loading={submitFetching}
          height="lg"
          type="submit"
          id="rp-form-submit-btn"
        >
          Send reset link
        </Button>
      </FormBlock>

      <FormBlock alignH="center">
        <Link to={urls.auth.signin} id="rp-form-back-link">
          Back to sign in
        </Link>
      </FormBlock>
    </Form>
  );
}

export const ResetPasswordForm = withFormik({
  mapPropsToValues: () => initialFormValues,

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Email not valid')
      .required('Email is required')
  }),

  validateOnMount: true,

  handleSubmit: (values, { props }: FormikBag<IProps, IFormValues>) => {
    props.onSubmit(values);
  },

  validate: () => {
    const errors: FormikErrors<IFormValues> = {};

    return errors;
  }
})(ResetPasswordFormBase);
