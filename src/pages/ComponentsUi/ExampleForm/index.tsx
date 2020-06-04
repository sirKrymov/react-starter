// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React from 'react';

import {
  FormikErrors,
  FormikProps,
  withFormik,
  FieldProps,
  FormikBag,
  Field
} from 'formik';
import { ValueType } from 'react-select';
import * as Yup from 'yup';
import moment from 'moment';

import { Form, FormBlock, FormText } from 'components/view/compound/Form';
import { VisibilityIcon } from 'components/view/atoms/VisibilityIcon';
import { InputSearch } from 'components/view/atoms/InputSearch';
import { MultiSelect } from 'components/view/atoms/MultiSelect';
import { DatePeriod } from 'components/view/compound/DatePeriod';
import { FieldLabel } from 'components/view/atoms/FieldLabel';
import { DatePicker } from 'components/view/atoms/DatePicker';
import { InputPhone } from 'components/view/atoms/InputPhone';
import { InputCode } from 'components/view/atoms/InputCode';
import { AttachRp } from 'components/logic/renderProp/AttachRp';
import { Textarea } from 'components/view/atoms/Textarea';
import { Checkbox } from 'components/view/atoms/Checkbox';
import { Wysiwyg } from 'components/view/atoms/Wysiwyg';
import { BoolRp } from 'components/logic/renderProp/BoolRp';
import { Upload } from 'components/view/compound/Upload';
import { Attach } from 'components/view/compound/Attach';
import { Button } from 'components/view/atoms/Button';
import { Switch } from 'components/view/atoms/Switch';
import { Select } from 'components/view/atoms/Select';
import { Rating } from 'components/view/atoms/Rating';
import { Input } from 'components/view/atoms/Input';
import { Link } from 'components/view/atoms/Link';

import {
  ACCEPTED_IMAGE_FORMATS,
  ACCEPTED_VIDEO_FORMATS,
  ACCEPTED_FILE_FORMATS
} from '../../../constants/configs';
import urls from '../../../constants/urls';

import { SelectOptionType } from '../../../types/components.interface';

interface Props {
  onSubmit(values: FormValues): void;
  submitFetching?: boolean;
}

interface FormValues {
  lengthTextarea: string;
  simpleTextarea: string;
  simpleSelect: Record<string, any> | null;
  multiSelect: Record<string, any>[] | null;
  inputSearch: string;
  simpleInput: string;
  inputPhone: string;
  datePicker: string;
  inputCode: string;
  checkbox: boolean;
  password: string;
  fromDate: string;
  wysiwyg: string;
  attach: Array<Record<string, any>>;
  switch: boolean;
  upload: string;
  toDate: string;
  rating: number;
  email: string;
}

const initialFormValues: FormValues = {
  lengthTextarea: '',
  simpleTextarea: '',
  simpleSelect: null,
  multiSelect: null,
  simpleInput: '',
  inputSearch: '',
  datePicker: '',
  inputPhone: '',
  inputCode: '',
  checkbox: false,
  password: '',
  fromDate: '',
  wysiwyg: '',
  switch: false,
  upload: '',
  toDate: '',
  attach: [],
  rating: 0,
  email: ''
};

function ExampleFormBase({
  submitFetching,
  setFieldValue
}: Props & FormikProps<FormValues>) {
  return (
    <Form>
      <FormBlock marginBottom="s3">
        <FormText text="Form title example" type="title" />
      </FormBlock>

      <FormBlock marginBottom="s3">
        <FormText text="Form subtitle example" type="subtitle" />
      </FormBlock>

      <FormBlock marginBottom="s3">
        <FormText text="Form simple text example" type="simple" />
      </FormBlock>

      <FormBlock marginBottom="s3">
        <Field name="inputSearch">
          {({ field }: FieldProps) => {
            return (
              <InputSearch
                {...field}
                id="test-search-input-field"
                onClear={() => null}
              />
            );
          }}
        </Field>
      </FormBlock>

      <Field required name="inputPhone">
        {({ field, meta: { touched, error } }: FieldProps) => {
          return (
            <FieldLabel
              blockTitle
              subLabel="Required"
              status={{ error: touched && !!error, des: error }}
              label="Phone"
            >
              <InputPhone {...field} id="test-input-phone" />
            </FieldLabel>
          );
        }}
      </Field>

      <FormBlock>
        <Field required name="email">
          {({ field, meta: { touched, error } }: FieldProps) => {
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
                  id="test-email"
                />
              </FieldLabel>
            );
          }}
        </Field>

        <Field required name="password">
          {({ field, meta: { touched, error } }: FieldProps) => {
            return (
              <FieldLabel
                blockTitle
                subLabel="Required"
                status={{ error: touched && !!error, des: error }}
                label="Password"
              >
                <BoolRp
                  render={({ boolValue, toggleBool }) => (
                    <Input
                      {...field}
                      placeholder="Enter your password here"
                      rightBlock={
                        <VisibilityIcon
                          onClick={toggleBool}
                          isVisible={boolValue}
                          id="password-visibility-icon"
                        />
                      }
                      error={touched && !!error}
                      type={boolValue ? 'text' : 'password'}
                      id="test-password-field"
                    />
                  )}
                />
              </FieldLabel>
            );
          }}
        </Field>

        <Field name="simpleSelect">
          {({ field, meta: { touched, error } }: FieldProps) => {
            return (
              <FieldLabel
                blockTitle
                subLabel="Required"
                status={{ error: touched && !!error, des: error }}
                label="Simple select"
              >
                <Select
                  {...field}
                  onChange={(option: ValueType<SelectOptionType>) =>
                    setFieldValue(field.name, option)
                  }
                  placeholder="Choose option"
                  error={touched && !!error}
                  list={[
                    { label: 'Test 1', value: 1 },
                    { label: 'Test 2', value: 2 }
                  ]}
                  id="test-simple-select-field"
                />
              </FieldLabel>
            );
          }}
        </Field>

        <Field name="multiSelect">
          {({ field, meta: { touched, error } }: FieldProps) => {
            return (
              <FieldLabel
                blockTitle
                subLabel="Optional"
                status={{ error: touched && !!error, des: error }}
                label="Simple select"
              >
                <MultiSelect
                  {...field}
                  onChange={(option: ValueType<SelectOptionType>) =>
                    setFieldValue(field.name, option)
                  }
                  placeholder="Choose options"
                  error={touched && !!error}
                  list={[
                    { label: 'Test 1', value: 1 },
                    { label: 'Test 2', value: 2 },
                    { label: 'Test 3', value: 3 },
                    { label: 'Test 4', value: 4 }
                  ]}
                  id="test-multi-select-field"
                />
              </FieldLabel>
            );
          }}
        </Field>

        <Field name="simpleInput">
          {({ field, meta: { touched, error } }: FieldProps) => {
            return (
              <FieldLabel
                blockTitle
                subLabel="Optional"
                status={{ error: touched && !!error, des: error }}
                label="Simple input"
              >
                <Input
                  {...field}
                  placeholder="Enter your simple text"
                  error={touched && !!error}
                  id="test-simple-input-field"
                />
              </FieldLabel>
            );
          }}
        </Field>

        <Field required name="simpleTextarea">
          {({ field, meta: { touched, error } }: FieldProps) => {
            return (
              <FieldLabel
                blockTitle
                subLabel="Required"
                status={{ error: touched && !!error, des: error }}
                label="Simple textarea"
              >
                <Textarea
                  {...field}
                  placeholder="Enter your simple text"
                  error={touched && !!error}
                  id="test-simple-textarea-field"
                />
              </FieldLabel>
            );
          }}
        </Field>

        <Field required name="lengthTextarea">
          {({ field, meta: { touched, error } }: FieldProps) => {
            return (
              <FieldLabel
                blockTitle
                subLabel="Required"
                status={{ error: touched && !!error, des: error }}
                label="Length textarea"
              >
                <Textarea
                  {...field}
                  placeholder="Enter your length text"
                  length={20}
                  error={touched && !!error}
                  id="test-simple-length-textarea-field"
                />
              </FieldLabel>
            );
          }}
        </Field>

        <Field required name="datePicker">
          {({ field, meta: { touched, error } }: FieldProps) => {
            return (
              <FieldLabel
                blockTitle
                subLabel="Required"
                status={{ error: touched && !!error, des: error }}
                label="Date picker"
              >
                <DatePicker
                  {...field}
                  // getCustomDateFormat={(date: any) => console.log(moment(date).format('YYYY/MM/DD'))}
                  getCustomDateFormat={(date: any) =>
                    moment(date).format('YYYY/MM/DD')
                  }
                  placeholder="Choose date"
                  onChange={value => {
                    setFieldValue(field.name, value);
                  }}
                  error={touched && !!error}
                  id="test-simple-datepicker-field"
                />
              </FieldLabel>
            );
          }}
        </Field>

        <DatePeriod
          dateFrom={(datePicker: Function) => (
            <Field required name="fromDate">
              {({ field, meta: { touched, error } }: FieldProps) => {
                return (
                  <FieldLabel
                    blockTitle
                    subLabel="Required"
                    status={{ error: touched && !!error, des: error }}
                    label="From"
                  >
                    {datePicker({
                      ...field,
                      placeholder: 'Choose from date',
                      onChange: (value: string) => {
                        setFieldValue(field.name, value);
                      },
                      error: touched && !!error,
                      id: 'test-simple-datepicker-from-date'
                    })}
                  </FieldLabel>
                );
              }}
            </Field>
          )}
          dateTo={(datePicker: Function) => (
            <Field required name="toDate">
              {({ field, meta: { touched, error } }: FieldProps) => {
                return (
                  <FieldLabel
                    blockTitle
                    subLabel="Required"
                    status={{ error: touched && !!error, des: error }}
                    label="To"
                  >
                    {datePicker({
                      ...field,
                      placeholder: 'Choose to date',
                      onChange: (value: string) => {
                        setFieldValue(field.name, value);
                      },
                      error: touched && !!error,
                      id: 'test-simple-datepicker-to-date'
                    })}
                  </FieldLabel>
                );
              }}
            </Field>
          )}
        />

        <FormBlock marginBottom="s3">
          <Field required name="wysiwyg">
            {({ field, meta: { touched, error } }: FieldProps) => {
              return (
                <FieldLabel
                  blockTitle
                  subLabel="Required"
                  status={{ error: touched && !!error, des: error }}
                  label="Wysiwyg"
                >
                  <Wysiwyg
                    onBlur={field.onBlur}
                    error={touched && !!error}
                    id="test-wysiwyg"
                  />
                </FieldLabel>
              );
            }}
          </Field>
        </FormBlock>

        <FormBlock marginBottom="s3">
          <Field required name="inputCode">
            {({ field }: FieldProps) => {
              return <InputCode {...field} id="test-input-code" />;
            }}
          </Field>
        </FormBlock>

        <FormBlock marginBottom="s3">
          <Field required name="switch">
            {({ field }: FieldProps) => {
              return <Switch {...field} id="test-switch" />;
            }}
          </Field>
        </FormBlock>

        <FormBlock marginBottom="s3">
          <Field required name="checkbox">
            {({ field }: FieldProps) => {
              return <Checkbox {...field} id="test-checkbox" />;
            }}
          </Field>
        </FormBlock>

        <FormBlock marginBottom="s3">
          <Field required name="rating">
            {({ field }: FieldProps) => {
              return (
                <Rating
                  onChange={(value: number) => {
                    setFieldValue(field.name, value);
                  }}
                  value={field.value}
                />
              );
            }}
          </Field>
        </FormBlock>

        <FormBlock marginBottom="s3">
          <Field required name="attach">
            {({ field }: FieldProps) => {
              return (
                <AttachRp
                  onChange={value => {
                    setFieldValue(field.name, value);
                  }}
                  maxSize={1024 * 1024 * 50}
                  accept={[
                    ...ACCEPTED_IMAGE_FORMATS,
                    ...ACCEPTED_VIDEO_FORMATS,
                    ...ACCEPTED_FILE_FORMATS
                  ]}
                  base64
                  render={({ files, onOpen, onDelete }) => (
                    <Attach
                      onDelete={onDelete}
                      onOpen={onOpen}
                      limit={5}
                      files={files}
                    />
                  )}
                  value={field.value}
                />
              );
            }}
          </Field>
        </FormBlock>

        <FormBlock marginBottom="s3">
          <Field required name="upload">
            {({ field, meta: { touched, error } }: FieldProps) => {
              return (
                <Upload
                  imageOnly
                  isCropper
                  onChange={value => {
                    setFieldValue(field.name, value);
                  }}
                  title="Drop an Logo/Image here or select file."
                  error={touched && !!error}
                  value={field.value}
                />
              );
            }}
          </Field>
        </FormBlock>
      </FormBlock>

      <FormBlock marginBottom="s3">
        <Button
          loading={submitFetching}
          height="lg"
          type="submit"
          id="test-form-submit"
        >
          Simple
        </Button>
      </FormBlock>

      <FormBlock marginBottom="s3">
        <Button loading height="lg" type="submit" id="test-form-submit-loader">
          Loading
        </Button>
      </FormBlock>

      <FormBlock marginBottom="s3">
        <Button
          disabled
          height="lg"
          type="submit"
          id="test-form-submit-disabled"
        >
          Disabled
        </Button>
      </FormBlock>

      <FormBlock alignH="center">
        <Link to={urls.auth.resetPassword} id="test-forgot-password-link">
          Forgot password?
        </Link>
      </FormBlock>
    </Form>
  );
}

export const ExampleForm = withFormik({
  mapPropsToValues: () => initialFormValues,

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Email not valid')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
    datePicker: Yup.string().required('Date is required'),
    wysiwyg: Yup.string().required('is required'),
    upload: Yup.string().required('is required')
  }),

  validateOnMount: true,

  handleSubmit: (values, { props }: FormikBag<Props, FormValues>) => {
    props.onSubmit(values);
  },

  validate: () => {
    const errors: FormikErrors<FormValues> = {};

    return errors;
  }
})(ExampleFormBase);
