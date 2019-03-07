import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { login } from '../../actions'

import { FormTitle, ButtonSignUp, RegisterSpan, PolicySpan } from '../Styled'
import Forms from './Form'

const Login = ({ user, login }) => {
  const handleSubmit = e => {
    e.preventDefault()
    const { email: { value: email }, password: { value: password } } = e.target
    login({ email, password })
  }

  const handleSignUp = e => {
    console.log(e);
    e.preventDefault();
  }

  return (
    <div>
      {user.token && <Redirect to="/" />}
      <FormTitle>satisfy</FormTitle>
      <Forms onSubmit={handleSubmit} />
      <RegisterSpan>{"Don't have an account yet?"}</RegisterSpan>
      <ButtonSignUp onClick={handleSignUp} outline color="primary">SIGN UP</ButtonSignUp>
      <br/>
      <PolicySpan>{"By clicking Sign Up you agree to the"}</PolicySpan>
      <br/>
      <PolicySpan>{"Satisfy Term of Use and Privacy Policy"}</PolicySpan>
    </div>
  )
}

Login.propTypes = {
  user: PropTypes.shape({}).isRequired,
  login: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps, { login })(Login)
