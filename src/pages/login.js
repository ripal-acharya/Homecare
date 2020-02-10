import React from "react"

export default () => (
  <div>
    <h1>Login Here</h1>
    <b><label>User Name:</label></b>
    <input type="text" name="username" id="username" />
    <b><label>Password:</label></b>
    <input type="password" name="password" id="password" />
    <b><button type="button">Login</button></b>
  </div>
)