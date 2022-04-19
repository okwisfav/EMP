import React from 'react';
import './about.css';
import aboutus from '../../assets/about_04.jpg';
const About = () => {
  return (
    <main className="about-us-section">
    <div className="about-text-container">
        <h3>Our Goals Are Standard</h3>
        <p>Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed<br />
        tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum<br />
        sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus<br />
        mus. Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam.<br />
        Donec ac egestas libero, eu bibendum risus. Phasellus et congue justo.</p>
            <p>Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam. Donec<br/>
            ac egestas libero, eu bibendum risus. Phasellus et congue justo.</p>
        <button>Read More</button>
    </div>
    <div className="about-img-container">
       <img src={aboutus} alt="" />
    </div>
</main>
  )
}

export default About