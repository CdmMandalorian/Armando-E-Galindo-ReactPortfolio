import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import pdf from "../../Assets/wd-Resume2020.pdf";

function Resume() {
  

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Project Manager | Continuous Improvement [ Ruskin ]"
              date="February 2019 - March 2020"
              content={[
                "Assembled the data from various social media platforms using Twitter, Reddit.Interpreted the collected text using word-clouds and various other factors that affect the change of sentiments of youth.",
                " Utilized the data to find the issues using Topic Modelling and Building models using LSTM, BERT to predict the sentiments of the youth.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Football Coach [ Ontario United 2010 - 2016 ]"
              content={[
                "Succesfully ran the operations, and coached a succesful club football youth team.  Representing the City, travelling abroad participating in tournaments.",
              ]}
            />
            <Resumecontent
              title="Ground Control  [ Insomniac 2016-2018 ]"
              content={[
                "Group of Guardian Angels, we are endlessly committed  in ensuring everyone safety at an Insomniac event. Ground Control's sole purpose is to guarantee everyone, to have a safe festival experience from the moment you arrive, to the moment you are assured a safe passage home.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="University [ University of California, Riverside ]"
              date="2020 - 2021"
              content={["Full Stack Web Development"]}
            />
            <Resumecontent
              title="College [ Chaffey College, Rancho Cucamonga Ca ]"
              date="2010 - 2018"
              content={["Associate of Science in Mathematics, University Studies"]}
            />
            <Resumecontent
              title="High School [ Ontario High School, Ontario Ca ] "
              date="2004 - 2008"
              content={["Diploma"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "",
                "",
                "",
                "",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
