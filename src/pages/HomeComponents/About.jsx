import React from 'react'

const About = () => {
  return (
    <section className="about section--nopb">
    <div className="container d-xl-flex justify-content-between">
      <div className="about_header section_header col-xl-6">
        <h2
          className="about_header-title section_header-title"
          data-aos="fade-right"
        >
          professional barbershop
          <span className="linebreak">for men only</span>
        </h2>
        <span
          className="about_header-subtitle section_header-subtitle"
          data-aos="fade-right"
          data-aos-delay={50}
          data-aos-once="false"
        >
          Barbercrop
        </span>
      </div>
      <div className="about_info col-xl-6">
        <p className="about_info-text text" data-aos="fade-left">
          Et tellus rhoncus urna a. Tempus felis, sociis lorem aliquet nibh
          pellentesque. Vitae nunc, dolor, blandit eget eleifend etiam id. Amet
          arcu lobortis sed pulvinar cursus pretium sit pretium.
        </p>
        <div className="wrapper d-sm-flex">
          <div className="about_info-fact">
            <h3 className="about_info-fact_title" data-aos="fade-up">
              Since 2015
            </h3>
            <p className="about_info-fact_description" data-aos="fade-up">
              Dui cursus neque et at ipsum. Cursus urna fringilla nisl enim duis
              cras odio.
            </p>
          </div>
          <div className="about_info-fact">
            <h3
              className="about_info-fact_title"
              data-aos="fade-up"
              data-aos-delay={50}
            >
              1000+ clients
            </h3>
            <p
              className="about_info-fact_description"
              data-aos="fade-up"
              data-aos-delay={50}
            >
              Metus varius vitae habitant lorem. Porta scelerisque facilisi.
            </p>
          </div>
        </div>
        <div className="wrapper" data-aos="fade-up" data-aos-delay={100}>
          <a className="about_info-btn btn theme-element" href="about.html">
            learn more
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About