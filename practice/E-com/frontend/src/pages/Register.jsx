import React, { useState } from 'react'

const Register = () => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [error,setError] = useState('')
  const [laodin,setLoading] = useState(false)
  return (
    <div>Register</div>
  )
}

export default Register