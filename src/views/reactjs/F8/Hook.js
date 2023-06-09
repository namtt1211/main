import React from 'react'
import { CRow, CCol, CCard, CCardBody, CCardHeader } from '@coreui/react'

const Hook = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Hook</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              The base <code>.nav</code> component is built with flexbox and provide a strong
              foundation for building all types of navigation components. It includes some style
              overrides (for working with lists), some link padding for larger hit areas, and basic
              disabled styling.
            </p>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Hook
