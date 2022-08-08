import React from 'react'

const Guide = () => {
  return (
    <div>
      <div class="container guide-style mt-5">
        <div class="section-header">
          <h2 class="head-text">How to Apply?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque
            dignissim quam et <br /> metus effici turac fringilla lorem
            facilisis.
          </p>
        </div>
        <div class="row mt-5">
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 ">
            <div class="work-process">
              <span class="process-icon">
                <img
                  src="https://i.ibb.co/9HHB9JX/icons8-edit-account-50.png"
                  alt="icons8-edit-account-50"
                  border="0"
                />
              </span>
              <h4>Create an Account</h4>
              <p>
                Post a job to tell us about your project. We'll quickly match
                you with the right freelancers find place best.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div class="work-process step-2">
              <span class="process-icon">
                <img
                  src="https://i.ibb.co/vq5P21b/icons8-search-50.png"
                  alt="icons8-search-50"
                  border="0"
                />
              </span>
              <h4>Search Jobs</h4>
              <p>
                Post a job to tell us about your project. We'll quickly match
                you with the right freelancers find place best.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div class="work-process step-3">
              <span class="process-icon">
                <img
                  src="https://i.ibb.co/MfWRhQ7/icons8-apply-50.png"
                  alt="icons8-apply-50"
                  border="0"
                />
              </span>
              <h4>Apply</h4>
              <p>
                Post a job to tell us about your project. We'll quickly match
                you with the right freelancers find place best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide