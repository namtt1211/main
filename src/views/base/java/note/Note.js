import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

import { CopyBlock, dracula } from 'react-code-blocks'

const language = 'javascript'
const code1 = ` // convert to full with
  protected String convToFullWith(String val,int size){
    //文字セット
    if(!isNullOrNullVal(val)) {
        val = execFuncString(createSqlId(LOGIC_ID, "MSFA_CHANGE_OUTPUT_VALUE", "A01"),MSFA_CHANGE_OUTPUT_VALUE(value(val)));
        if(val.length() > size) {
            val = val.substring(0, size);
        }
        Charset _charset = StandardCharsets.UTF_8;
        StringBuilder builder = new StringBuilder();
        for(int i = 0; i< val.length(); i++ ) {
            String chk = val.substring(i, i+1);
            if (isSame(chk.length(),_charset.encode(chk).array().length)) {
                for (char c : chk.toCharArray()) {
                    builder.append((char) (c + 65248));
                }
            }else {
                builder.append(chk);
            }	
        }
        return builder.toString();
    }
    return val;
  }
`
const code2 = `/*
  * 特大の文字を削除します
  * val： アイテム値
  * bte: 制限のbyte
  */
  protected String rmOverByte(String val,int bte){
      //文字セット
      Charset _charset = StandardCharsets.UTF_8;
      if(!isNullOrNullVal(val)) {
          int valLength = _charset.encode(val).array().length;
          if(valLength > bte) {
              int cntByte = 0;
              String rslt = "";
              for(int i = 0 ; i < val.length(); i++) {
                  String chk = val.substring(i, i+1);
                  int numchk = _charset.encode(chk).array().length;
                  cntByte += numchk;
                  if(cntByte <= bte) {
                      rslt += chk;
                  }else {
                      break;
                  }
              }
              return rslt;
          }
      }
      return val;
  }
`
const code3 = `/*
 *文字列の削除
 * val： アイテム値
 * endChar： 最後の希望の位置
 * numChar： 受信したい文字の数
 * rmChar0： 文字列の上部に文字[0]を消去するフラグ
 */
  protected String rmChar(String val,int numChar,int endChar,boolean rmChar0){
    if(!isNullOrNullVal(val)){
        int split = val.length() - numChar;
        if(split < 0) {
            return val;
        }
        val = val.substring(split, endChar);
        if(rmChar0){
            char chk0 = '0';
            while (isSame(val.charAt(0),chk0)){
                    val = val.substring(1, val.length());
            }
        }
    }
    return val;
  }
`
const code4 = `/*
 *番号を削除します
 * val： アイテム値
 * numLeft：  受信したいの整数
 * numRight： 受信したいの小数
 */
  protected MCNumber rmNum(MCNumber val,int numLeft,int numRight){
    String valStr = String.valueOf(val);
    if(!isNullOrNullVal(valStr)) {
        if(valStr.contains(".")){
            String[] arr = valStr.split(".", 2);
            if(arr[0].length() > numLeft) {
                arr[0] = rmChar(arr[0],numLeft,arr[0].length(),true);
            }
            if(arr[1].length() > numRight) {
                arr[1] = rmChar(arr[1],arr[1].length(),numRight,false);
            }
            val = MCNumber.valueOf(arr[0]+"."+arr[1]);
        }else {
            val = MCNumber.valueOf(rmChar(valStr,numLeft,valStr.length(),true));
        }
    }
    return val;
  }
`
const Note = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Convert to full-with</strong>
          </CCardHeader>
          <CCardBody>
            <CopyBlock
              text={code1}
              language={language}
              showLineNumbers={true}
              theme={dracula}
              codeBlock
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Remove over byte</strong>
          </CCardHeader>
          <CCardBody>
            <CopyBlock
              text={code2}
              language={language}
              showLineNumbers={true}
              theme={dracula}
              codeBlock
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Remove Charater</strong>
          </CCardHeader>
          <CCardBody>
            <CopyBlock
              text={code3}
              language={language}
              showLineNumbers={true}
              theme={dracula}
              codeBlock
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Remove Number</strong>
          </CCardHeader>
          <CCardBody>
            <CopyBlock
              text={code4}
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

export default Note
