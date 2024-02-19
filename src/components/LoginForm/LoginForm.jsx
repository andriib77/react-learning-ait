import "./styles.css";

import Input from "../Input/Input";
import Button from "../Button/Button";

function LoginForm() {
  return (
    <form className="loginform-wrapper">
      <h2>Login Form</h2>
      <div className="inputs-container">
        <Input
          name="username"
          type="email"
          placeholder="Enter your Enter your email"
          label="Email"
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
      </div>
      <Button name="Login" type="button" />
    </form>
  );
}

export default LoginForm;
