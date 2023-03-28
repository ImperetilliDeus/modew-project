import React, { useState } from "react";
import { authService } from "fbase";

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");


  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {

    event.preventDefault();

    try {
      let data;
        data = await authService.createUserWithEmailAndPassword(email, password);
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount =()=> setNewAccount((prev) =>!prev);

  return (
    <div>
        <h1>회원가입 임시 페이지</h1>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <br/>
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <br/>
        <input type="submit" value="회원가입"/>
        <br/>
        {error}
      </form>

    </div>
  );

}
export default SignIn;