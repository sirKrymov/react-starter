// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactElement } from 'react';

import { MdDone } from 'react-icons/md';
import cn from 'classnames';

import { LinkButton } from 'components/view/atoms/LinkButton';
import { Typography } from 'components/view/atoms/Typography';
import { ReactIcon } from 'components/view/atoms/ReactIcon';
import { FormBlock } from '../FormBlock';

import './styles.scss';

interface IProps {
  backLink?: string;
  text: string;
}

export function FormSuccessBlock({
  backLink = '/',
  text
}: IProps): ReactElement {
  const formSuccessBlockClass = cn({
    'form-success-block': true
  });

  const successIconClass = cn({
    'form-success-block__icon': true
  });

  return (
    <div className={formSuccessBlockClass}>
      <FormBlock marginBottom="s6" alignH="center">
        <div className={successIconClass}>
          <ReactIcon color="valid" size="xxxl">
            <MdDone />
          </ReactIcon>
        </div>
      </FormBlock>

      <FormBlock marginBottom="s6">
        <Typography variant="body1" align="center">
          {text}
        </Typography>
      </FormBlock>

      <LinkButton height="lg" to={backLink} id="form-success-block-link">
        Back to sign in
      </LinkButton>
    </div>
  );
}
