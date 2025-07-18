import React, {useEffect} from 'react'
import './home.css'
import video from '../../Assest/video(1).mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {SiTripadvisor} from 'react-icons/si'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'

import Aos, { init } from 'aos'
import 'aos/dist/aos.css'
 


const Home = () => {
  // lets create  a react hook to add o scroll animation..
  useEffect(()=>{
      Aos.init({duration: 2000})
  }, [])


  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop  type="video(1)/mp4" ></video>

    <div className="homeContent container">
      <div className="textDiv">


        <span data-aos="fade-up" className="smallText">
          Our Packages
        </span>
        
        <h1 data-aos="fade-up" className="homeTitle">  
          Search your Holiday
        </h1>
      </div>

      <div data-aos="fade-up" className="cardDiv grid">
        <div className="destinationInput">
          <lable htmlFor="city">Search your destination:</lable>
          <div className="input flex">
            <input type="text" placeholder='Enter name here....'/>
            <GrLocation className="icon"/>
          </div>
        </div>

          <div className="dateInput">
          <lable htmlFor="date">Search your date:</lable>
          <div className="input flex">
            <input type="date" />
          </div>
        </div>

          <div className="priceInput">
          <div className="lable_total flex">
            <lable htmlFor="price">Max price:</lable>
            <h3 className="total">$5000</h3>
          </div>
          <div className="input flex">
            <input type="range" max="5000" min="1000"/>
          </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon"/> 
             <span>MORE FILTERS</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon"/>
            <AiOutlineInstagram className="icon"/>
            <SiTripadvisor className="icon"/>
          </div>

          <div className="leftIcons">
          <BsListTask className="icon"/>
          <TbApps className="icon"/>
          </div>
        </div>
      </div>

    
    </section>
  )
}

export default Home 
