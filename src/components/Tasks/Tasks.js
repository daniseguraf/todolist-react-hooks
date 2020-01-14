import React from 'react'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const styles = css`
  background: var(--gray-200);
  padding: 1.5rem;
`

function Tasks({children}) {
  return <div css={styles}>{children}</div>
}

export default Tasks