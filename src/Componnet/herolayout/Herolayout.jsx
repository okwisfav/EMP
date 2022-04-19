import React from 'react'
import homeone from '../../assets/home1.jpg';
import hometwo from '../../assets/home2.jpg';
import homethree from '../../assets/home3.jpg';
import homefour from '../../assets/home4.jpg';
import './herolayout.css';
const Herolayout = () => {
  return (
    <section className="home" id="home">
    <div className="head_container">
      <div className="box">
        <div className="text">
          <h1>EMSILYA LIMITED</h1>
          <p>s an innovative start-up incorporated in 2017, with a vision to provide
            cutting edge technology driven products and services to meet the energy, offshore logistics,
            procurement and construction needs, to add meaning to humanity and make everyday life
            simpler.</p>
          <button>MORE INFO</button>
        </div>
      </div>
      <div className="image">
        <img src={homeone} className="slide" />
      </div>
      <div className="image_item">
        <img src={homeone} alt="" className="slide active" onclick="img('assets/home1.jpg')" />
        <img src={hometwo} alt="" className="slide" onclick="img('assets/home2.jpg')" />
        <img src={homethree} alt="" className="slide" onclick="img('assets/home3.jpg')" />
        <img src={homefour} alt="" className="slide" onclick="img('assets/home4.jpg')" />
      </div>
    </div>
  </section>
  )
}

export default Herolayout
