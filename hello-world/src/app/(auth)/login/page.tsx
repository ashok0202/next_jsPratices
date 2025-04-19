import React from 'react'

/**
 * This component renders a login page.
 * The page is a simple form with a username and password field.
 * When the user submits the form, the component will call the
 * login function with the username and password.
 *
 * @returns {JSX.Element}
 */
const Login = () => {
  

  const login = () => {
    // Implement your login logic here
  }

  return (
    <div>
      <form >
        <label>
          Username:
          <input type="text"  />
        </label>
        <br />
        <label>
          Password:
          <input type="password"/>
        </label>
        <br />
        <input type="submit" value="Login" />
      </form>

    </div>
  )
}

export default Login;
