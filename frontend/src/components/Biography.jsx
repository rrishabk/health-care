import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
           Bhavya Clinic is dedicated to comprehensive, compassionate care. Our experienced, professional team provides necessary health services to every citizen, ensuring wellness and recovery for all. We are committed to offering exceptional, accessible treatment and support, regardless of background or need. The clinic’s philosophy prioritizes patient health, striving for comfort and peace of mind through our dedicated service. Excellence, expertise, and total commitment to your health is our core mission.
          </p>
          <p>We are all in 2025!</p>
          <p>We are working on a Mission.</p>
          <p>
            Bhavya Clinic is on a mission to completely revolutionize the health industry. We challenge outdated models to deliver superior, patient-centered, quality healthcare to everyone. Our commitment transforms standards in wellness and medical accessibility for all communities. Through innovation and dedicated effort, we strive to dismantle barriers to top-tier treatment. This bold approach ensures that every citizen receives exceptional, proactive care. Our vision, simply put, is comprehensive, accessible healthcare.
          </p>
          <p></p>
          <p>Health is Wealth</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
