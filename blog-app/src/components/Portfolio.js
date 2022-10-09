import React from "react";
import { AiFillGithub,AiFillInstagram,AiFillLinkedin } from 'react-icons/ai';
import img from './profilemade.jpg';
import amazon from './amazon.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Portfolio = () => {
    return (
      <div className="portfolio">
        <div className="detail">
       
      <img className="profilemade" src={img}></img>
            </div>
        <h5>About</h5>
            
        <div className="detail">

            <div className="About">
<Card  className="aboutcard" >

      <Card.Body>
        <Card.Text>
          ⚡️Hi, I am Brunda Revadi currently working as an Application Engineer.


I have experience and skills in following tech stack:🦾
Python, Java, C++, Web development & design, Linux, MySQL/sqlite3, Automation and Web scraping.


⭐Building and exploring different aspects of the virtual world.
        </Card.Text>
      </Card.Body>
                </Card>
        </div></div>
        
        
        <div className="detail">

            <h5>Experience</h5>
            

<div className="experiencelist">
         <Card className="experience" >
      <Card.Img variant="top" src={amazon} />
      <Card.Body>
        <Card.Title>Application Engineer</Card.Title>
        <Card.Text>
                  Building Applications and supporting opertains team of Amazon Prime video.<br></br>
                  Impact: Contributing in increasing productivity of operations teams.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Skills: SQL · Automation · Full-Stack Development · Python (Programming Language) · Linux · Java</ListGroup.Item>
        <ListGroup.Item>Experience: 01-08-2022 to Current</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://amazon.com">Explore</Card.Link>
      </Card.Body>
            </Card>
            <br></br>
                    <Card className="experience" >
      
              <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Data science Intern at Oyemoney.inc</Card.Title>
                <Card.Text>
                  Developed a stock analysis Application which processes the historical BSE data and suggests the stocks whose performance is good in the Market.

<br></br>Impact: Increased performance of the Analysis System by 80%.
          
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Skills:Testing, designing, sprint planning and building a Full stack web application using python-django, Mysql.</ListGroup.Item>
        <ListGroup.Item>Experience: May 2020 - Aug 2020 · 4 mos</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Explore</Card.Link>
      </Card.Body>
                </Card>
          </div></div>


        <div className="detail">

            <h5>Projects</h5>

            <div className="projects">
                 <Card className="project" >
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Product Lending application</Card.Title>
        <Card.Text>
          Google solution challenge iniciative to solve 17 UN sustainable goals , Solving one of these goals ,our solution included features such as lending product to community ,which promotes reusability and helps economic growth within these communities.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Skills: Django, Mysql</ListGroup.Item>
        <ListGroup.Item>Experience: Mar 2021 - Apr 2021</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://github.com/BrundaBR/Solution-challenge">Explore</Card.Link>
      </Card.Body>
            </Card>

            <br></br>
         {/* <Card className="project" >
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
            </Card> */}
                                
        

                

            </div></div>

           
        </div>
    );
};

export default Portfolio;