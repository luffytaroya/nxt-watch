import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const FormContainer = styled.div`
  width: 30vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px 10px #ebeced;
  padding: 20px;
  border-radius: 10px;
`
export const Image = styled.img`
  margin: 20px 0px 0px 0px;
  width: 180px;
  height: 40px;
`
export const Form = styled.form`
  margin: 60px 0px 0px 0px;
  width: 90%;
`
export const UsernameContainer = styled.div`
  width: 100%;
`
export const PasswordContainer = styled.div`
  width: 100%;
`
export const Label = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';

  font-weight: 600;
  font-size: 12px;
  line-height: 1.4;
  margin-bottom: 0px;
`

export const UsernameInput = styled.input`
  color: #5a7184;
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 40px;
  width: 100%;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
  margin-top: 5px;
  margin-bottom: 20px;
  outline: none;
`
export const PasswordInput = styled.input`
  color: #5a7184;
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 40px;
  width: 100%;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
  margin-top: 5px;
  margin-bottom: 10px;
  outline: none;
`
export const CheckBoxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`
export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
`
export const ButtonEl = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  width: 100%;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-top: 20px;
  cursor: pointer;
  outline: none;
`
export const ErrorMsg = styled.p`
  margin: 0px;
  color: red;
  font-size: 12px;
`
