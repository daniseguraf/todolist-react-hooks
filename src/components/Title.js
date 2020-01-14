import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const styles = css`
  color: var(--black);
  font-size: var(--h1-font-size-xs);
  line-height: var(--h1-line-height);
  margin: 0;

  @media (min-width: 768px) {
    font-size: var(--h1-font-size);
  }
`

const Title = ({children}) => <h1 css={styles}>{children}</h1>

export default Title