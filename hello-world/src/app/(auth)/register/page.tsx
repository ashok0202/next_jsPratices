import React from 'react'

const Register = () => {
  console.log('Register component rendered')
  return (
    <div>
      <p>Register component</p>
      <button onClick={() => console.log('Button clicked')}>Click me</button>
    </div>
  )
}

export default Register
