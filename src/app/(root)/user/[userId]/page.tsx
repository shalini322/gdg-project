import React from 'react'

const page = (params: any) => {
  return (
    <div>
      <h1>Welcome</h1>
      {params.params.userId}</div>
  )
}

export default page