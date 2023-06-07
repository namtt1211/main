import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormCheck,
  CListGroup,
  CListGroupItem,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const ListGroups = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React List Group</strong> <small>Basic example</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              The default list group is an unordered list with items and the proper CSS classes.
              Build upon it with the options that follow, or with your CSS as required.
            </p>
            <DocsExample href="components/list-group">
              <CListGroup>
                <CListGroupItem>Cras justo odio</CListGroupItem>
                <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                <CListGroupItem>Morbi leo risus</CListGroupItem>
                <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
                <CListGroupItem>Vestibulum at eros</CListGroupItem>
              </CListGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ListGroups
