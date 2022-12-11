import React from "react"
import "./About.css"


const About = () => {
  return (
    <>
      <section className='about'>
        <div name='About Us' title='About Us - Who We Are?'/>
        <div className='container flex mtop'>
          <div className='left row'>
            <h1>Our Agency Story</h1>
            <h2>Check out our company story and work process</h2>
            <p>Buying a property vs renting is a never-ending debate, but the outcome depends largely on your income and circumstances. If you are looking to move houses, and want to find a suitable rental property or shared accommodation, we can help you find the right fit.   </p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='https://img.freepik.com/free-photo/house-isolated-field_1303-23772.jpg?w=826&t=st=1670613299~exp=1670613899~hmac=39a393dc74e2f5c904ad526a399c0eb0317c3edaf5a3e4d28e9e483644773f90' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About