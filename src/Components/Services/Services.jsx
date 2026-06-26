import React from "react"
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.png'
import Services_Data from '../../assets/services_data'
import Arrow from '../../assets/arrow.png'

const Services = () => {
  return (
    <div id='services' className="services">
      <div className="section-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readmore">
              <p>Read More</p>
              <img src={Arrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
