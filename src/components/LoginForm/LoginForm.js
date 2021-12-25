import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  BgContainer,
  FormContainer,
  Image,
  Form,
  UsernameContainer,
  PasswordContainer,
  Label,
  UsernameInput,
  PasswordInput,
  CheckBoxContainer,
  Checkbox,
  ButtonEl,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: 'password',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    return (
      <>
        <Label htmlFor="password">PASSWORD</Label>
        <PasswordInput
          type={showPassword}
          id="password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <Label htmlFor="username">USERNAME</Label>
        <UsernameInput
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  handleShowPassword = () => {
    const {showPassword} = this.state
    if (showPassword === 'password') {
      this.setState({showPassword: 'text'})
    } else {
      this.setState({showPassword: 'password'})
    }
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/" />
    }
    return (
      <BgContainer>
        <FormContainer>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <Form onSubmit={this.submitForm}>
            <UsernameContainer>{this.renderUsernameField()}</UsernameContainer>
            <PasswordContainer>{this.renderPasswordField()}</PasswordContainer>
            <CheckBoxContainer>
              <Checkbox
                onClick={this.handleShowPassword}
                type="checkbox"
                id="showPassword"
              />
              <Label htmlFor="showPassword">Show Password</Label>
            </CheckBoxContainer>
            <ButtonEl type="submit">Login</ButtonEl>
            {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
          </Form>
        </FormContainer>
      </BgContainer>
    )
  }
}

export default LoginForm
