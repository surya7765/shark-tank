import React from 'react'

const HeroSection = () => {

  const box_info = [
    {
      id: 1,
      icon: "local_fire_department",
      title: "Hot Jobs",
      content: "Browse jobs in your area",
    },
    {
      id: 2,
      icon: "tips_and_updates",
      title: "Career Tips",
      content: "Browse jobs in your area",
    },
    {
      id: 3,
      icon: "bolt",
      title: "Fast Response",
      content: "Browse jobs in your area",
    },
    {
      id: 4,
      icon: "local_fire_department",
      title: "Hot Jobs",
      content: "Browse jobs in your area",
    },
  ];

  return (
    <div>
      <div className="bgImage">
        <p className="hero-text pt-5">
          Get a job you never{" "}
          <span style={{ color: "#0B8724", fontFamily: "Reggae One" }}>
            dreamed
          </span>{" "}
          of.
        </p>
        <div className="container d-flex justify-content-center mt-5">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control head-input"
                placeholder="Type job title..."
                aria-label="Type job title..."
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control head-input"
                placeholder="Type job location..."
                aria-label="Type job location..."
              />
            </div>
            <div className="col">
              <button type="button" className="btn btn-success head-button">
                Browse Job
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "-80px" }}>
        <div className="row d-flex">
          {box_info.map((box, index) => (
            <div className="col box" key={index}>
              <span className="material-icons box-icon">{box.icon}</span>
              <h3 className="box-title">{box.title}</h3>
              <p className="box-content">{box.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection