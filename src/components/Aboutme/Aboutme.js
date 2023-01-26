import { Container, Image, Row, Col } from "react-bootstrap"
import './Aboutme.css'
import profileImg from "../../assets/profile/profileImage.jpg"

function About() {
  return (
    <Container> 
      <section id='about-me'>
        <div className="text-light">
          <h1 className="page-title mt-4 p-2">ABOUT ME</h1>
        </div>
        <Row className="d-flex align-items-center ">
          <Col md={7} xl={9} className="context text-light mt-4"> 
            <h2 className="header">Hi, I am Stephanie</h2>
            <p className="subtext mt-3">
              As a new and passionate web developer, I am always excited to learn more and improve in my programming skills. Currently, I am comfortable in coding with HTML, CSS, Javscript, React,and Node.js.
            </p>
            <p>
              I graduated with a major in Business Administration and a minor in Computer Science from UCI in 2020. However, working as a full-stack web developer at a startup soon after graduation has made me realize my passion for web development. 
            </p>
            <p> 
              Aside from coding, I also enjoying performing arts, including dancing and singing. I am also a huge coffee addict. You might see me one day in a coffee shop trying to get work done around Socal.
            </p>
          </Col>
          <Col md={5} xl={3}>
            <div className="illustration">
            <Image src={profileImg} className="img-fluid"/>
              <div className="image">
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  )
}

export default About;