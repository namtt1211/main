import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'

import { CopyBlock, dracula } from 'react-code-blocks'

const language = 'javascript'
const code = '123'

const Accordion = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Code block</strong>
          </CCardHeader>
          <CCardBody>
            <CopyBlock
              text={code}
              language={language}
              showLineNumbers={true}
              theme={dracula}
              codeBlock
            />
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Accordion</strong> <small>Flush</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Add <code>flush</code> to remove the default <code>background-color</code>, some
              borders, and some rounded corners to render accordions edge-to-edge with their parent
              container.
            </p>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Accordion</strong> <small>Always open</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Add <code>alwaysOpen</code> property to make accordion items stay open when another
              item is opened.
            </p>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Accordion
