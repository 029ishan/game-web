import React from 'react'

import Footer from '../Footer'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
     <Link to={'/'}> 
      <button>
          BacktoHome
        </button>
        </Link>
      <Footer/>
    </div>
  )
}

export default About
