'use client'

const error = (error) => {
  return (
    <div>
        <h1>{error.error.message}</h1>
    </div>
  )
}

export default error