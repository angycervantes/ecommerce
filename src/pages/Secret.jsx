import React from 'react'
import { useAuthContext } from '@/context/AuthContext'

const Secret = () => {
  const { userPayload } = useAuthContext()

  return (
    <>
      <h1>Secret</h1>
      {userPayload.role === 'ADMIN'
        ? <h2> Hola admin</h2>
        : <h2> hola customer</h2>}

      {userPayload.role === 'ADMIN' &&
        <h2> Hola admin</h2>}

      {userPayload.role === 'CUSTOMER' &&
        <h2> Hola CUSTOMER</h2>}

    </>
  )
}

export default Secret
