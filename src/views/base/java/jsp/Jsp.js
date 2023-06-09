import React from 'react'
import { CRow, CCol, CCard, CCardBody, CCardHeader } from '@coreui/react'

const Jsp = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Navs</strong> <small>Base navs</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              The base <code>.nav</code> component is built with flexbox and provide a strong
              foundation for building all types of navigation components. It includes some style
              overrides (for working with lists), some link padding for larger hit areas, and basic
              disabled styling.
            </p>
            <p className="text-medium-emphasis small">
              Classes are used throughout, so your markup can be super flexible. Use{' '}
              <code>&lt;ul&gt;</code>s like above, <code>&lt;ol&gt;</code> if the order of your
              items is important, or roll your own with a <code>&lt;nav&gt;</code> element. Because
              the .nav uses display: flex, the nav links behave the same as nav items would, but
              without the extra markup.
            </p>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Jsp
