// @SETUP: Please don't forget to remove this component or current comment if component is used in project
// @TODO: Add components tests

// --------------------

export default () => null;

// import types from 'prop-types'
// import React from 'react'

// // Components

// import FormFieldRow from '../../../../layout/FormFieldRow'
// import FieldLabel from '../../../../atoms/FieldLabel'
// //import Checkbox from '../../../../atoms/Checkbox';
// import Button from '../../../../atoms/Button'
// import Input from '../../../../atoms/Input'
// //import Text from '../../../../atoms/Text';
// import { CardExpiryElement, CardNumberElement, CardCVCElement, injectStripe } from 'react-stripe-elements'

// import ICONS from '../../../../../../public/images/icons'

// import './styles.scss'

// StripeFields.propTypes = {
//   submitting: types.bool,
//   onSubmit: types.func.isRequired,
//   fields: types.object.isRequired,
//   error: types.object
// }

// function StripeFields(props) {
//   const { submitting, stripe, fields, error, clearError, onSubmit } = props

//   const createOptions = () => {
//     return {
//       style: {
//         base: {
//           '::placeholder': {
//             color: '#979899'
//           }
//         },

//         invalid: {
//           color: '#c23d4b'
//         }
//       }
//     }
//   }

//   return (
//     <div className="stripe-fields">
//       {/* Card Number */}

//       <FormFieldRow>
//         <FieldLabel
//           status={
//             error && (error.code === 'incomplete_number' || error.code === 'invalid_number')
//               ? { error: true, des: error.message }
//               : {}
//           }
//           simpleText
//           blockTitle
//           title="Card Number"
//           rightContent={
//             <div className="stripe-fields__payment-icons">
//               <img className="stripe-fields__payment-icon" src={ICONS.visa} alt="visa" />
//               <img className="stripe-fields__payment-icon" src={ICONS.mastercard} alt="mastercard" />
//               <img className="stripe-fields__payment-icon" src={ICONS.amex} alt="amex" />
//             </div>
//           }
//         >
//           <div className="input__field">
//             <CardNumberElement
//               {...createOptions()}
//               placeholder="Card Number"
//               onFocus={() => {
//                 error && (error.code === 'incomplete_number' || error.code === 'invalid_number') && clearError()
//               }}
//             />
//           </div>
//         </FieldLabel>
//       </FormFieldRow>

//       {/* Name */}

//       <FormFieldRow>
//         <FieldLabel simpleText blockTitle title="Card Holder Name" status={fields.name.status}>
//           <Input placeholder="Card Holder Name" height="sm" {...fields.name} />
//         </FieldLabel>
//       </FormFieldRow>

//       <FormFieldRow>
//         {/* Expiration */}

//         <div className="stripe-fields__fields-row">
//           <FieldLabel
//             simpleText
//             blockTitle
//             title="Expiration"
//             status={
//               error && (error.code === 'incomplete_expiry' || error.code === 'invalid_expiry_year_past')
//                 ? { error: true, des: error.message }
//                 : {}
//             }
//           >
//             <div className="input__field">
//               <CardExpiryElement
//                 {...createOptions()}
//                 onFocus={() => {
//                   error &&
//                     (error.code === 'incomplete_expiry' || error.code === 'invalid_expiry_year_past') &&
//                     clearError()
//                 }}
//               />
//             </div>
//           </FieldLabel>

//           {/* Security Code */}

//           <FieldLabel
//             simpleText
//             blockTitle
//             title="Security Code"
//             status={error && error.code === 'incomplete_cvc' ? { error: true, des: error.message } : {}}
//           >
//             <div className="input__field">
//               <CardCVCElement
//                 {...createOptions()}
//                 onFocus={() => {
//                   error && error.code === 'incomplete_cvc' && clearError()
//                 }}
//               />
//             </div>
//           </FieldLabel>
//         </div>
//       </FormFieldRow>

//       {/* ZIP */}

//       <FormFieldRow>
//         <FieldLabel simpleText blockTitle title="Zip/Postal code" status={fields.zip.status}>
//           <Input placeholder="Zip/Postal Code" height="sm" {...fields.zip} />
//         </FieldLabel>
//       </FormFieldRow>

//       {/* Remember */}

//       {/* <FormFieldRow size="md">
// 				<div className="stripe-fields__checkbox-row">
// 					<Checkbox checked={fields.remember.value} onClick={fields.remember.onChange} />
// 					<p className="stripe-fields__checkbox--text">
// 						<Text>Remember this card for future payments</Text>
// 					</p>
// 				</div>
// 			</FormFieldRow> */}

//       <Button width="full" onClick={e => onSubmit(e, stripe)} load={submitting}>
//         Confirm and Pay
//       </Button>
//     </div>
//   )
// }

// export default injectStripe(StripeFields)
