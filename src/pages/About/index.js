import "./about.scss";
import { useContext } from "react";
import ThemeContext from "../../context";
import Particles from "../../components/particles";

const About = () => {
  const { height } = useContext(ThemeContext);
  return (
    <section
      id={`${this.props.id}`}
      className="about"
      style={{ height}}
    >
      <Particles/>
      <Row>
        <Col md={6} className="content">
          <div className="content-text">
            <div className="line-text">
              <h4>About Me</h4>
            </div>
            <h3>I'm a Full Stack web developer working from home</h3>
            <div className="separator" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              suscipit nisi vitae feugiat vestibulum. Aliquam porta nulla vel
              odio scelerisque, pretium volutpat dui euismod. Integer porttitor
              dolor placerat malesuada dictum. Fusce enim dolor, dignissim quis
              ornare at, elementum nec turpis. Donec ac interdum libero, sed
              condimentum lectus. Nunc nec iaculis tortor. Donec interdum
              sollicitudin eros in pharetra. Donec ultricies laoreet dictum.
              Maecenas vestibulum sodales justo, id hendrerit orci aliquet
              gravida. Nulla facilisi.
            </p>
            <div className="social social_icons">
              <FontAwesomeIcon
                icon={faGithub}
                className="social_icon"
                onClick={() => window.open("https://www.github.com")}
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="social_icon"
                onClick={() => window.open("https://www.twitter.com")}
              />
              <FontAwesomeIcon
                icon={faYoutube}
                className="social_icon"
                onClick={() => window.open("https://www.youtube.com")}
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="social_icon"
                onClick={() => window.open("https://www.linkedin.com")}
              />
            </div>
          </div>
        </Col>
        <Col md={6} className="skills">
          <div className="line-text">
            <h4>My Skills</h4>
          </div>
          <div className="skills-container">
            <Progress name="Web Design" value={90} delay={1100} />
            <Progress name="Angular" value={50} delay={1100} />
            <Progress name="React" value={80} delay={1100} />
            <Progress name="Vue" value={40} delay={1100} />
            <Progress name="MongoDB" value={100} delay={1100} />
            <Progress name="CSS" value={50} delay={1100} />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default About;
