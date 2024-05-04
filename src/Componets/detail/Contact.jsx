import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      Contact
      <Link to={'/'}>
        <button>
          Back to home
        </button>
      </Link>
    </div>
  )
}

export default Contact
