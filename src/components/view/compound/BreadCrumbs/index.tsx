// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { Fragment, ReactElement } from 'react';

import { Typography } from 'components/view/atoms/Typography';
import { SvgIcon } from 'components/view/atoms/SvgIcon';
import { Link } from 'components/view/atoms/Link';

import { visibilityOnIcon } from 'constants/icons';

import './styles.scss';

interface IProps {
  listId: string;
  list: Array<{
    label: string;
    to: string;
  }>;
}

export function BreadCrumbs({ listId, list }: IProps): ReactElement {
  return (
    <ul className="bread-crumbs">
      {list.map((item, index) => {
        if (index === list.length - 1) {
          return (
            <li key={index}>
              <Typography variant="body3">{item.label}</Typography>
            </li>
          );
        }

        return (
          <Fragment key={item.label}>
            <li key={index}>
              <Typography color="textPrimary" variant="body3">
                <Link to={item.to} id={`breadcrumb-${listId}-link-${index}`}>
                  {item.label}
                </Link>
              </Typography>

              <span className="bread-crumbs__arrow">
                <SvgIcon
                  src={visibilityOnIcon}
                  size="xs"
                  rotate="270"
                  color="on-primary"
                />
              </span>
            </li>
          </Fragment>
        );
      })}
    </ul>
  );
}
