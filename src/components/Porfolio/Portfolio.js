import { Row, Col, Container } from 'react-bootstrap';
import animeEcommerce from '../../assets/projects/animeEcommerce.png';
import friendFinder from '../../assets/projects/friendFinder.png';
import horiseon from '../../assets/projects/horiseon.png';
// import  animeEcommerce from '../../assets/projects/animeEcommerce.png';
// import  animeEcommerce from '../../assets/projects/animeEcommerce.png';
import './Portfolio.css'

function Portfolio () {
  const projects = [
    {
      name: "Friend Finder",
      tech: "Handlebars, NodeJS, express",
      description: "This is an online social platform where users can find friends and join chatrooms based on interests.",
      img: friendFinder,
      link: "",
      repo: ""
    }
  ]

  return ( 
    <Container> 
      <section id='portfolio'>
        <div className="text-light">
          <h1 className="page-title mt-4 p-2">PORTFOLIO</h1>
        </div>
        <Row xs={1} sm={2} className="g-4 mt-2">
          {projects.map((project) => (
            <Col className="card-wrapper" md={6} xl={4} style={{ backgroundImage : `url(${friendFinder}`, backgroundRepeat:"no-repeat", backgroundSize: "cover"}}>
              {/* <Image src={project.img} fluid></Image> */}
              <div className="card-body">
                <div className="hover-text p-4">
                  <h3 className="project-title">{project.name}</h3>
                  <p>{project.tech}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  )
}

export default Portfolio;