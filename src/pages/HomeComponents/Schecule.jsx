import React from 'react'

const Schecule = () => {
  return (
    <section className="schedule section">
    <span className="overlay" />
    <div className="schedule_container container d-xl-flex flex-wrap">
      <div className="schedule_content col-xl-6">
        <h2 className="schedule_content-header" data-aos="fade-right">
          Team of professionals is waiting for you
        </h2>
        <p className="schedule_content-text text" data-aos="fade-right">
          Risus odio lobortis ullamcorper felis vitae bibendum mi. Penatibus
          fusce consequat donec vitae porttitor elementum volutpat gravida.
          Tellus hac tristique nisi, id amet cras tempor, amet.
        </p>
      </div>
      <div className="schedule_hours col-xl-6">
        <h2 className="schedule_hours-header" data-aos="fade-left">
          Special Opening Hours
        </h2>
        <div className="schedule_hours-list d-md-flex">
          <div className="schedule_hours-list_group">
            <span className="list-item" data-aos="fade-up">
              <span className="weekday">Monday:</span> 9:00 am – 7:30 pm{" "}
            </span>
            <span className="list-item" data-aos="fade-up">
              <span className="weekday">Tuesday:</span> 9:00 am – 7:30 pm{" "}
            </span>
            <span className="list-item" data-aos="fade-up">
              <span className="weekday">Wednesday:</span> 9:00 am – 7:30 pm
            </span>
          </div>
          <div className="schedule_hours-list_group">
            <span className="list-item" data-aos="fade-up">
              <span className="weekday">Thursday:</span> 9:00 am – 7:30 pm{" "}
            </span>
            <span className="list-item" data-aos="fade-up">
              <span className="weekday">Friday:</span> 9:00 am – 7:30 pm{" "}
            </span>
            <span className="list-item" data-aos="fade-up">
              <span className="weekday">Sat/sun:</span> CLOSED
            </span>
          </div>
        </div>
      </div>
      <div className="wrapper schedule_wrapper" data-aos="fade-up">
        <a className="schedule_btn btn theme-element" href="#">
          Book now
        </a>
      </div>
    </div>
  </section>
  )
}

export default Schecule