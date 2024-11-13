import React from 'react'
import './OurChefs.css'

const OurChefs = () => {

  return (
    <div className="our-chefs">
  {/* Category */}
  <h2 className="our-chefs-head">Our Top Chefs</h2>
  <p className="our-chefs-para">
    Get the food served on your plate form the best chefs across the nation.
  </p>

  <div className="our-chefs-boxes">
    <div className="box box1">
      <p className='chef-name' >Chef <br />Alessandro Bruno</p>
      <p className="series">1</p>
    </div>

    <div className="box box2">
      <p className='chef-name'  >Chef <br />Marco Fiori</p>
      
      <p className="series">2</p>
    </div>
    <div className="box box3">
      <p className='chef-name' style={{color:'black'}}>Chef<br />Luka Romano</p>
     
      <p className="series">3</p>
    </div>
    <div className="box box4">
      <p className='chef-name' style={{color:'black'}} >Chef<br />Diego Marquez</p>
     
      <p className="series">4</p>
    </div>
  </div>
</div>

  )
}

export default OurChefs