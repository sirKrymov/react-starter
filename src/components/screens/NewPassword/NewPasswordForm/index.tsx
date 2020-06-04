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

import { INewPasswordRequest } from 'types/auth.interface';

interface IProps {
  onSubmit(values: IFormValues): void;
  submitFetching?: boolean;
}

interface IFormValues extends Partial<INewPasswordRequest> {}

const initialFormValues: IFormValues = {
  confirmPassword: '',
  newPassword: ''
};

function NewPasswordFormBase({
  submitFetching
}: IProps & FormikProps<IFormValues>): ReactElement {
  return (
    <Form>
      <FormBlock marginBottom="s6">
        <FormText text="New password" type="title" />
      </FormBlock>

      <FormBlock marginBottom="s2">
        <Field required name="newPassword">
          {({ field, meta: { touched, error } }: FieldProps): ReactElement => {
            return (
              <FieldLabel
                blockTitle
                subLabel="Required"
                status={{ error: touched && !!error, des: error }}
                label="New password"
              >
                <BoolRp
                  render={({ boolValue, toggleBool }): ReactElement => (
                    <Input
                      {...field}
                      placeholder="Enter new password here"
                      rightBlock={
                        <VisibilityIcon
                          onClick={toggleBool}
                          isVisible={boolValue}
                          id="np-form-new-password-icon"
                        />
                      }
                      error={touched && !!error}
                      type={boolValue ? 'text' : 'password'}
                      id="np-form-new-password"
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
                          id="np-form-confirm-password-icon"
                        />
                      }
                      error={touched && !!error}
                      type={boolValue ? 'text' : 'password'}
                      id="np-form-confirm-password"
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
          id="np-form-submit-btn"
        >
          Set new password
        </Button>
      </FormBlock>

      <FormBlock alignH="center">
        <Link to={urls.auth.signin} id="np-form-back-link">
          Back to sign in
        </Link>
      </FormBlock>
    </Form>
  );
}

export const NewPasswordForm = withFormik({
  mapPropsToValues: () => initialFormValues,

  validationSchema: Yup.object().shape({
    newPassword: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword')], 'Passwords must match')
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
})(NewPasswordFormBase);
