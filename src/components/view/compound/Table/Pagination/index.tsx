// @SETUP: Please don't forget to remove this component or current comment if component is used in project
// @TODO: Add components tests

// import ReactPaginate from 'react-paginate'
// import classNames from 'classnames'
// import types from 'prop-types'
// import React from 'react'

// import SvgIcon from '../../atoms/SvgIcon'
// import ICONS from '../../../../public/images/icons'

// import './styles.scss'

// Pagination.propTypes = {
//   onChange: types.func.isRequired,
//   count: types.number.isRequired,
//   page: types.number.isRequired
// }

// export default function Pagination(props) {
//   const { onChange, count, page } = props

//   const PaginationClass = classNames({
//     pagination: true
//   })

//   return count < 2 ? null : (
//     <div className={PaginationClass}>
//       <ReactPaginate
//         activeLinkClassName="pagination__active-link"
//         containerClassName="pagination__container"
//         breakLinkClassName="pagination__link"
//         activeLinkClassName="pagination__active"
//         pageLinkClassName="pagination__item"
//         previousClassName="pagination__next"
//         breakClassName="pagination__break"
//         nextClassName="pagination__next"
//         previousLabel={
//           <div className="pagination__prev-icon">
//             <SvgIcon size="xs" rotate="180" src={ICONS.arrow} />
//           </div>
//         }
//         nextLabel={
//           <div className="pagination__next-icon">
//             <SvgIcon size="xs" src={ICONS.arrow} />
//           </div>
//         }
//         onPageChange={({ selected }) => selected !== null && onChange(selected + 1)}
//         forcePage={page ? page - 1 : 0}
//         pageCount={count}
//       />
//     </div>
//   )
// }

export function Pagination() {
  return;
}
