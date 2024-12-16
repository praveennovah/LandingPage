import React from 'react';
import "../src/HomePage.css";

const HomePage = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand ms-2" href="#">
              <img src="https://biobiz.in/wp-content/uploads/2023/12/biobiz-logo.png" alt="logo" width={150} height={70} />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto p-4 mb-2 mb-lg-0">
                <li className="nav-item me-3">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link active" href="#About">About</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link active" href="#India Updates">India Updates</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link active" href="#Opportunities">Opportunities</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link active" href="#BioBiz Consulting">BioBiz Consulting</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link active" href="#Innovation Insights">Innovation Insights</a>
                </li>
                <li className="nav-item dropdown me-2">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Insights
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Bioenergy</a></li>
                    <li><a className="dropdown-item" href="#">Bio-Products</a></li>
                    <li><a className="dropdown-item" href="#">Environmental Solution</a></li>
                    <li><a className="dropdown-item" href="#">Bio-Based Science & Tech Path</a></li>
                    <li><a className="dropdown-item" href="#">Regional Biomass Residues</a></li>
                    <li><a className="dropdown-item" href="#">India Biomass Residues</a></li>
                    <li><a className="dropdown-item" href="#">Indian Bioeconomy</a></li>
                  </ul>
                </li>
                <li className="nav-item me-2">
                  <a className="nav-link active" href="#">BRING</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link active" href="#">Contact</a>
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

      <section className="center-content center-section">
        <div className="container-fluid p-5">
          <div className="row">
            <div className="col-12 p-5 text-white justify-content-center align-items-center para-section">
              <h2 className="text-center mb-4 fw-bold fs-2">
                Leveraging India's Biodiversity and Biomass for a Sustainable Bio-Economy
              </h2>

              <p>At BioBiz, we are keen to capitalize on India’s rich biodiversity and the availability of large amounts of biomass residues to develop a sustainable bio-economy and attractive business opportunities for diverse stakeholders – farmers, rural stakeholders, end-use industries, entrepreneurs, startups, and financial investors.</p>
              <p>As part of a leading climate tech consulting firm, we will provide critical assistance with market intelligence, data-driven analyses, professional networking, and opportunities for relevant stakeholders to get effective visibility.</p>
            </div>

            <div className="col-12 text-white mt-5 main-section pb-5">
              <div className="row-12 pt-3">
                <h2 className="text-center">MAIN SECTION</h2>
                <hr />
                <div className="row d-flex align-items-center justify-content-center mt-5">
                  <div className="col-md-4 col-6 d-flex flex-column align-items-center">
                    <img className="img-hover-effect" src="https://biobiz.in/wp-content/uploads/2024/10/opportunity.png" height={100} alt="Opportunities" />
                    <div className="mt-3 fw-bold fs-5">Opportunities</div>
                  </div>
                  <div className="col-md-4 col-6 d-flex flex-column align-items-center">
                    <img className="img-hover-effect" src="https://biobiz.in/wp-content/uploads/2024/10/consulting.png" height={100} alt="Consulting" />
                    <div className="mt-3 fw-bold fs-5">Consulting</div>
                  </div>
                  <div className="col-md-4 col-6 d-flex flex-column align-items-center">
                    <img className="img-hover-effect" src="https://biobiz.in/wp-content/uploads/2024/10/insights.png" height={100} alt="Insights" />
                    <div className="mt-3 fw-bold fs-5">Insights</div>
                  </div>
                  <div className="col-md-4 col-6 mt-5 d-flex flex-column align-items-center">
                    <img className="img-hover-effect" src="https://biobiz.in/wp-content/uploads/2024/10/innovations.png" height={100} alt="Innovation Insights" />
                    <div className="mt-3 fw-bold fs-5">Innovation Insights</div>
                  </div>
                  <div className="col-md-4 col-8 mt-5 d-flex flex-column align-items-center">
                    <img className="img-hover-effect" src="https://biobiz.in/wp-content/uploads/2024/10/leaf.png" height={100} alt="Biomass Residue Intelligence" />
                    <div className="mt-3 fw-bold fs-5">Biomass Residue Intelligence</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 mt-5 text-white justify-content-center align-items-center indian-section">
              <div className="container-fluid">
                <div className="row justify-content-center align-items-center d-flex flex-column">
                  <div className="col-12 pb-5 pt-3">
                    <h1 className="text-center text-white">INDIAN UPDATES</h1>
                    <hr />
                    <div className="text-center justify-content-center align-items-center d-flex">
                      <div className="text-slider text-dark">
                        <div className="text-slider-content text-primary">
                          <div className="slide">Biogas Plant to Be Revived by Faridabad Municipal Corporation</div>
                          <div className="slide">Straw-Based Biogas Plant Commercialization</div>
                          <div className="slide">Biofuel from Carbon Dioxide: New Tech Developed by IIT Guwahati</div>
                          <div className="slide">Straw-Based Biogas Plant Commercialization</div>
                          <div className="slide">Green Hydrogen: TKIL Partners with Sohhytec</div>
                          <div className="slide">Compressed Biogas Plants Using Cow Dung in Uttar Pradesh</div>
                          <div className="slide">World’s Largest Sustainable Aviation Fuel Plants By TruAlt</div>
                          <div className="slide">Bio-CNG Plants in 2 Cow Shelters by Greater Noida Authority</div>
                          <div className="slide">Steelmaking with Green Hydrogen: SAIL and John Cockerill India Collaborate</div>
                          <div className="slide">Sustainable Aviation Fuel Facility: BPCL to Launch India’s First by 2027</div>
                          <div className="slide">Biochar Integration by Tata Steel in India to Reduce Emissions</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 mt-5 other-section pb-5">
              <div className="container-fluid text-white">
                <div className="row pt-3">
                  <h1 className="text-center">OTHERS</h1>
                  <hr />
                  <div className="col-12 d-flex justify-content-evenly align-items-center mt-5 flex-wrap">
                    <button type="button" className="btn btn-secondary custom-btn mb-2">India Updates</button>
                    <button type="button" className="btn btn-secondary custom-btn mb-2">Weekly Updates</button>
                    <button type="button" className="btn btn-secondary custom-btn mb-2">BRING</button>
                    <button type="button" className="btn btn-secondary custom-btn mb-2">India Biomass Residues</button>
                  </div>
                  <div className="col-12 d-flex justify-content-center align-items-center mt-5 fw-bold">
                    BioBiz is a division of Energy Alternatives India (EAI)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-section text-white">
          <div className="col-12 d-flex justify-content-center align-items-center fw-bold p-5">
            Copyright © 2024 BioBiz. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
