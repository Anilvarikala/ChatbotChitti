import React from 'react'
import "./LeftSideBar.css"
import assets from '../../assets/assets'
const LeftSideBar = () => {
  return (
    <div className='left-side'>
      <div className="left-con">
      
      <div className="first">
        <img src={assets.logo_icon} alt="" />
        <h3>Chat App</h3>
        
      </div>

      <div className="second">
        <input type="text" placeholder='Search' />
        <img src={assets.search_icon} alt="" />
      </div>
        
       <div className='Items'>
 
        <div className='Item'>
          <img src={assets.avatar_icon} alt="" />
          <div className="inner-item">
            <p>Anil Varikala</p>
            <p>Hii How are you?</p>
          </div>
        </div>

        <div className='Item'>
          <img src={assets.avatar_icon} alt="" />
          <div className="inner-item">
            <p>Anil Varikala</p>
            <p>Hii How are you?</p>
          </div>
        </div>

        <div className='Item'>
          <img src={assets.avatar_icon} alt="" />
          <div className="inner-item">
            <p>Anil Varikala</p>
            <p>Hii How are you?</p>
          </div>
        </div>
        
        </div> 


      </div>
    </div>
  )
}

export default LeftSideBar
