// @SETUP: Please don't forget to remove this component or current comment if component is used in project
// @TODO: Add components tests

// --------------------

export default () => null;

// import { Elements, StripeProvider } from 'react-stripe-elements'
// import React, { useState } from 'react'
// import types from 'prop-types'

// import StripeFields from './StripeFields'
// import FormRP from '../../../../logic/rp/FormRP'

// StripeForm.propTypes = {
//   onTokenReady: types.func,
//   submitting: types.bool
// }

// export default function StripeForm(props) {
//   const { onTokenReady, submitting } = props

//   const [error, setError] = useState(null)

//   function handleSubmit(stripe, formData) {
//     if (stripe) {
//       stripe
//         .createToken({
//           // eslint-disable-next-line @typescript-eslint/camelcase
//           address_zip: formData.zip,
//           name: formData.name,
//           type: 'card'
//         })
//         .then(data => {
//           if (data.error) {
//             setError(data.error)
//           } else {
//             if (onTokenReady) onTokenReady(data.token, formData)
//           }
//         })
//     } else {
//       console.log("Stripe.js hasn't loaded yet.")
//     }
//   }

//   return (
//     <StripeProvider apiKey="pk_test_DKSj9kP6A7BFdGNAn6Ynh38y00Az6UhWv4">
//       <Elements locale="en">
//         <FormRP
//           fields={{
//             remember: { value: false, handler: 'boolean' },
//             name: {
//               value: '',
//               validate: { required: true, max: 100 },
//               messages: { max: 'Max 100 characters' }
//             },
//             zip: { value: '', validate: { required: true, limit: 12 }, numbersOnly: true }
//           }}
//           onSubmit={(data, actions, extraState, stripe) => {
//             handleSubmit(stripe, data)
//           }}
//           render={formProps => (
//             <StripeFields
//               submitting={submitting}
//               onSubmit={formProps.onSubmit}
//               fields={formProps.fields}
//               error={error}
//               clearError={() => {
//                 setError(null)
//               }}
//             />
//           )}
//         />
//       </Elements>
//     </StripeProvider>
//   )
// }
