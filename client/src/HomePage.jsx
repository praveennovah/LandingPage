import React from 'react';
import "../src/HomePage.css";

const HomePage = () => {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
          <div class="container-fluid">
            <a class="navbar-brand ms-2" href="#"><img src="https://biobiz.in/wp-content/uploads/2023/12/biobiz-logo.png" 
              alt="logo" width={150} height={70} /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto p-4 mb-2 mb-lg-0">
                <li class="nav-item me-3">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item me-3 ">
                  <a class="nav-link active" href="#About">About</a>
                </li>
                <li class="nav-item me-3">
                  <a class="nav-link active" href="#India Updates">India Updates</a>
                </li>
                <li class="nav-item me-3">
                  <a class="nav-link active" href="#Opportunities">Opportunities</a>
                </li>
                <li class="nav-item me-3">
                  <a class="nav-link active" href="#BioBiz Consulting">BioBiz Consulting</a>
                </li>
                <li class="nav-item me-3">
                  <a class="nav-link active" href="#Innovation Insights">Innovation Insights</a>
                </li>
                <li class="nav-item dropdown me-2">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Insights
                  </a>
                  <ul class="dropdown-menu   ">
                    <li><a class="dropdown-item mb-3 " href="#">Bioenergy</a></li>
                    <li><a class="dropdown-item mb-3" href="#">Bio-Products</a></li>
                    <li><a class="dropdown-item mb-3" href="#">Environmental Solution</a></li>
                    <li><a class="dropdown-item mb-3" href="#">Bio-Based Science & Tech Path</a></li>
                    <li><a class="dropdown-item mb-3" href="#">Regional Biomass Residues</a></li>
                    <li><a class="dropdown-item mb-3" href="#">India Biomass Residues</a></li>
                    <li><a class="dropdown-item mb-3" href="#">Indian Bioeconomy</a></li>
                  </ul>
                </li>
                <li class="nav-item me-2">
                  <a class="nav-link active" href="#">BRING</a>
                </li>
                <li class="nav-item me-3">
                  <a class="nav-link active" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="video-section">
  <div className="video-container-wrapper"> 
    <video className="video-container" autoPlay loop muted>
      <source src="https://biobiz.in/2024/video.mp4" type="video/mp4" />
    </video>
  </div>
</section>


      <section className='center-content center-section '>
        <div className="container-fluid p-5">
          <div className="row">
            <div className="col-12 p-5 text-white justify-content-center align-items-center para-section">
            <h2 className='text-center mb-4 fw-bold fs-2'>
                Leveraging India's Biodiversity and Biomass for a Sustainable Bio-Economy
              </h2>
              
              <p>At BioBiz, we are keen to capitalize on India’s rich biodiversity and the availability of large amounts of biomass residues to develop a sustainable bio-economy and attractive business opportunities for diverse stakeholders – farmers, 
                rural stakeholders, end-use industries, entrepreneurs,startups, and financial investors.</p>
              <p>As part of a leading climate tech consulting firm, we will provide critical assistance with market intelligence, data-driven analyses, professional networking, and opportunities for relevant stakeholders to get effective visibility.</p>
            </div>

            <div className="col-12 text-white mt-5 main-section pb-5">
              <div className="row-12  pt-3">
                <h2 className='text-center'>MAIN SECTION</h2>
                <hr />
                <div className='mt-5'></div>
                <div className="row d-flex align-items-center justify-content-center">
                  <div className='col-md-4 align-items-center justify-content-center d-flex flex-column '>
                    <img className='img-hover-effect' src="https://biobiz.in/wp-content/uploads/2024/10/opportunity.png" height={100} alt="Opportunities" />
                    <div className='mt-3 fw-bold fs-5'>Opportunities</div>
                  </div>
                  <div className='col-md-4 align-items-center justify-content-center d-flex flex-column'>
                    <img className='img-hover-effect' src="https://biobiz.in/wp-content/uploads/2024/10/consulting.png" height={100} alt="Consulting" />
                    <div className='mt-3 fw-bold fs-5'>Consulting</div>
                  </div>
                  <div className='col-md-4 align-items-center justify-content-center d-flex flex-column'>
                    <img className='img-hover-effect' src="https://biobiz.in/wp-content/uploads/2024/10/insights.png" height={100} alt="Insights" />
                    <div className='mt-3 fw-bold fs-5'>Insights</div>
                  </div>
                  <div className='col-md-4 mt-5 me-5 align-items-center justify-content-center d-flex flex-column'>
                    <img className='img-hover-effect' src="https://biobiz.in/wp-content/uploads/2024/10/innovations.png" height={100} alt="Innovation Insights" />
                    <div className='mt-3 fw-bold fs-5'>Innovation Insights</div>
                  </div>
                  <div className='col-md-4 mt-5 align-items-center justify-content-center d-flex flex-column'>
                    <img className='img-hover-effect' src="https://biobiz.in/wp-content/uploads/2024/10/leaf.png" height={100} alt="Biomass Residue Intelligence" />
                    <div className='mt-3 fw-bold fs-5'>Biomass Residue Intelligence</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 mt-5 text-white justify-content-center align-items-center indian-section" >
              <div className="container-fluid ">
                <div className="row-12  justify-content-center align-items-center   d-flex flex-column">
                  <div className="col-12 pb-5 pt-3 ">
                  <div>
                    <h1 className='text-center text-white'>INDIAN UPDATES</h1>
                    <hr />  
                      <div className=" text-center justify-content-center align-items-center d-flex ">
                      <div class=" text-slider text-dark"> 
                     
                        <div class="text-slider-content text-primary"> 
                          <div class="slide">Biogas Plant to Be Revived by Faridabad Municipal Corporation</div> 
                          <div class="slide">Straw-Based Biogas Plant Commercialization</div> 
                          <div class="slide">Biofuel from Carbon Dioxide: New Tech Developed by IIT Guwahati</div>
                          <div class="slide">Straw-Based Biogas Plant Commercialization</div> 
                          <div class="slide">Green Hydrogen: TKIL Partners with Sohhytec</div> 
                          <div class='slide'>Compressed Biogas Plants Using Cow Dung in Uttar Pradesh</div>
                          <div class="slide">World’s Largest Sustainable Aviation Fuel Plants By TruAlt</div> 
                          <div class="slide">Bio-CNG Plants in 2 Cow Shelters by Greater Noida Authority</div>
                          <div class="slide">Steelmaking with Green Hydrogen: SAIL and John Cockerill India Collaborate</div>
                          <div class="slide">Sustainable Aviation Fuel Facility: BPCL to Launch India’s First by 2027</div>
                          <div class="slide">Biochar Integration by Tata Steel in India to Reduce Emissions</div>
                        </div> 
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5 other-section pb-5">
              <div className="container-fluid text-white ">
              <div className="row pt-3">
                <h1 className='text-center'>OTHERS</h1>
                <hr />
                <div className="col-12 d-flex justify-content-evenly align-items-center mt-5">
                <button type="button" class="btn btn-secondary  custom-btn">India Updates</button>
                <button type="button" class="btn btn-secondary  custom-btn">Weekly Updates</button>
                <button type="button" class="btn btn-secondary  custom-btn">BRING</button>
                <button type="button" class="btn btn-secondary  custom-btn">India Biomass Residues</button>
                </div>
                <div className="col d-flex justify-content-evenly align-items-center mt-5 fw-bold">
                BioBiz is a division of Energy Alternatives India (EAI)
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="row-12   footer-section  text-white  ">
          <div className="col-12  d-flex justify-content-center align-items-center fw-bold  p-5">
          Copyright © 2024 BioBiz. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
