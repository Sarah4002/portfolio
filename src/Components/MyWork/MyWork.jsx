import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.png'
import mywork_data from '../../assets/work_data'
import arrow from '../../assets/arrow.png'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="section-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <img key={index} src={work.w_img} alt={work.w_name} />
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  )
}

export default MyWork
