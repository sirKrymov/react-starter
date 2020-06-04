import React, { ReactElement } from 'react';

import { useTranslation } from 'react-i18next';
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

import { ISigninRequest } from 'types/auth.interface';

interface IProps {
  onSubmit(values: IFormValues): void;
  submitFetching?: boolean;
}

interface IFormValues extends ISigninRequest {}

const initialFormValues: IFormValues = {
  password: '',
  email: ''
};

function SigninFormBase({
  submitFetching
}: IProps & FormikProps<IFormValues>): ReactElement {
  const { t } = useTranslation();

  return (
    <Form>
      <FormBlock marginBottom="s6">
        <FormText text={t('signinPage.formTitle')} type="title" />
      </FormBlock>

      <FormBlock marginBottom="s2">
        <Field required name="email">
          {({ field, meta: { touched, error } }: FieldProps): ReactElement => {
            return (
              <FieldLabel
                blockTitle
                subLabel={t('signinPage.fieldRequired')}
                status={{ error: touched && !!error, des: error }}
                label={t('signinPage.emailField.label')}
              >
                <Input
                  {...field}
                  placeholder={t('signinPage.emailField.placeholder')}
                  error={touched && !!error}
                  id="si-form-email"
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
                          id="si-form-password-icon"
                        />
                      }
                      error={touched && !!error}
                      type={boolValue ? 'text' : 'password'}
                      id="si-form-password"
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
          id="si-form-submit-btn"
        >
          Sign in
        </Button>
      </FormBlock>

      <FormBlock alignH="center">
        <Link to={urls.auth.resetPassword} id="si-form-back-link">
          Forgot password?
        </Link>
      </FormBlock>
    </Form>
  );
}

export const SigninForm = withFormik({
  mapPropsToValues: () => initialFormValues,

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Email not valid')
      .required('Email is required'),
    password: Yup.string().required('Password is required')
  }),

  validateOnMount: true,

  handleSubmit: (values, { props }: FormikBag<IProps, IFormValues>) => {
    props.onSubmit(values);
  },

  validate: () => {
    const errors: FormikErrors<IFormValues> = {};

    return errors;
  }
})(SigninFormBase);
