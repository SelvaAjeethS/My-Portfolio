import React from 'react'

function Projects() {
  return (
    <section id="projects" className="my-5 mx-2">
      <h2 className="text-center text-white my-5">My Projects</h2>
      <p className='text-center mx-2'>Explore a selection of my front-end development projects, <br /> showcasing my skills in creating user-friendly and responsive web applications.</p>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="project-card text-center p-4" style={{ borderColor: "white", borderWidth: "1px", borderStyle: "solid" }}>
              <img
                src={process.env.PUBLIC_URL + '/assets/boxofresin project.png'}
                alt="Box of Resin Project"
                className="img-fluid mb-3 rounded"
              />
              <h4>
                Box of Resin: <br /><span className='project-subtitle'>Personalized Gift E-Commerce Site</span>
              </h4>
              <p className="text-light">
                Developed using HTML, CSS, and JavaScript, this site allows users to customize and order personalized resin gifts.
              </p>
              <div className="overlay">
                <h5>Key Features</h5>
                <ul className="text-light">
                  <li>Intuitive User Interface</li>
                  <li>Responsive Design</li>
                  <li>Customizable Products</li>
                  <li>Customer Reviews</li>
                </ul>
                <a href="https://selvaajeeths.github.io/Box-of-Resin-Personalized-Gift-E-Commerce-Site/" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary mt-3">View Project</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-card text-center p-4" style={{ borderColor: "white", borderWidth: "1px", borderStyle: "solid" }}>
              <img
                src={process.env.PUBLIC_URL + '/assets/leonproject.png'}
                alt="Leon Project"
                className="img-fluid mb-3 rounded"
              />
              <h4>
                Leon: <br /><span className='project-subtitle'>Mini E-Commerce Site</span>
              </h4>
              <p className="text-light">
                This mini e-commerce application is built with React and Bootstrap, showcasing my front-end development skills.
              </p>
              <div className="overlay">
                <h5>Key Features</h5>
                <ul className="text-light">
                  <li>User-friendly Interface</li>
                  <li>Responsive Design</li>
                  <li>Product Listing and Detail Views</li>
                  <li>Cart Management</li>
                </ul>
                <a href="https://selvaajeeths.github.io/Mini-E-Commerce-Site/" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary mt-3">View Project</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Projects