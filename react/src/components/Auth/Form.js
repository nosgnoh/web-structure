import React from 'react'
import PropTypes from 'prop-types'

import { TextField, Submit } from '../Styled'

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Label,
  FormGroup,
  Form,
  FormText,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row
} from "reactstrap";

// const Form = ({ onSubmit }) => (
//   <form onSubmit={onSubmit}>
//     <TextField
//       type="email"
//       name="email"
//       placeholder="Email address"
//       title="Enter your email address"
//       required
//     />
//     <TextField
//       type="password"
//       name="password"
//       placeholder="Password"
//       title="Type a strong password: aBC_123^"
//       pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$"
//       required
//     />
//     <Submit type="submit" value="Continue" />
//   </form>
// )

const Forms = ({ onSubmit }) => {
  return (
    <div className="login-page">
<Container>
  <Row>
    <Col className="ml-auto mr-auto" lg="4" md="6">
      <Form onSubmit={onSubmit} className="form" method="">
        <Card className="card-login">
          <CardHeader>
            <CardHeader>
              <h3 className="header text-center">Login</h3>
            </CardHeader>
          </CardHeader>
          <CardBody>
            <InputGroup>
              <Input placeholder="email" name="email" type="text" />
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="nc-icon nc-single-02" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <InputGroup>
              <Input
                placeholder="Password"
                type="password"
                autoComplete="off"
                name="password"
              />
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="nc-icon nc-key-25" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </CardBody>
          <CardFooter>
            <Row>
              <Col className="ml-auto mr-auto" lg="6" md="6">
                <Button
                type="submit"
                block
                className="btn-round "
                color="warning"
              >
                Login
              </Button>
            </Col>
            </Row>
          </CardFooter>
        </Card>
      </Form>
    </Col>
  </Row>
</Container>
<div
  className="full-page-background"
  style={{
    background: `#999`
  }}
/>
</div>
);
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Forms
