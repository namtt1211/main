import React from 'react'
import { CRow, CCol, CCard, CCardBody, CCardHeader } from '@coreui/react'

import { CopyBlock, dracula } from 'react-code-blocks'

const language = 'javascript'
const code = `
  conn sys/123456 as sysdba
  alter session set "_ORACLE_SCRIPT"=true;

  //Xóa User 
  DROP USER COMMON CASCADE;

  //Tạo User
  CREATE USER NSHM IDENTIFIED BY NSHM;

  //Cấp quyền
  GRANT DBA TO NSHM;

  GRANT EXP_FULL_DATABASE TO NSHM;

  GRANT IMP_FULL_DATABASE TO NSHM;

  GRANT CREATE ANY TABLE TO NSHM;

  GRANT DELETE ANY TABLE TO NSHM;

  GRANT DROP ANY TABLE TO NSHM;

  GRANT INSERT ANY TABLE TO NSHM;

  GRANT SELECT ANY SEQUENCE TO NSHM;

  GRANT SELECT ANY TABLE TO NSHM;

  GRANT UNLIMITED TABLESPACE TO NSHM;

  GRANT UPDATE ANY TABLE TO NSHM;

  impdp [UserName]/[Password]@[DataBaseID]:[Port]/[ORACLE_SID] DUMPFILE=[FILENAME(NOT FILEPATH)] DIRECTORY=[FOLDERID] log=[LOGFILENAME]
  impdp NSMST/NSNSMST_1@192.168.136.72:1521/SIG4ORCL DUMPFILE='HON06_NSMST_EXPDP.DMP' DIRECTORY=NISSO_20151111 log='20151111_NSMST_NSHM.log'

  //Export
  expdp NSKP/NSKP DIRECTORY=NISSO_20160823 DUMPFILE= NSKP10.dmp SCHEMAS=NSKP LOGFILE=NSKP10.log
  //Import
  impdp NSKB/NSKB@192.168.136.72:1521/SIG4ORCL DUMPFILE='NSKP10.DMP' DIRECTORY=NISSO_20160823 REMAP_SCHEMA=NSKP:N
  SKB log='20160823_NSKB.log'
`
const Oracle = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Import-Export</strong>
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
      </CCol>
    </CRow>
  )
}

export default Oracle
