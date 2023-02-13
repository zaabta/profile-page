import "./hero.scss";
import { useContext } from "react";
import ThemeContext from "../../context";
import { Row, Col } from "react-bootstrap";
import Typewriter from 'typewriter-effect'
import Glitch from '../../components/glitch';

const Hero = ({ id }) => {
  const { height } = useContext(ThemeContext);
  const shapes = [
    "https://retro-show-r3tr0.vercel.app/static/a7bb949e6d0d488a85cb39612f19aecb/f1913/1.png",
    "https://retro-show-r3tr0.vercel.app/static/64163140e3dc3c1aad4243465e50acd4/b6970/10.png",
    "https://retro-show-r3tr0.vercel.app/static/556c1746a1f0e3ede5b29ce5282a8410/6f0bd/2.png",
    "https://retro-show-r3tr0.vercel.app/static/f297f859f749ae544e59a4914ceeefd9/f1913/3.png",
    "https://retro-show-r3tr0.vercel.app/static/ad8cd4b553efa809d197aadf994cff55/f1913/4.png",
    "https://retro-show-r3tr0.vercel.app/static/ee0f2ee1da7023a95bdaec5dcc8fb4fc/f1913/5.png",
    "https://retro-show-r3tr0.vercel.app/static/85e073d211cb9af83ccc592733d9b264/f1913/6.png",
    "https://retro-show-r3tr0.vercel.app/static/cb8939dde0a808f387fea7be78a1c8b2/f1913/7..png",
    "https://retro-show-r3tr0.vercel.app/static/78893cb2b3ed4a16e83c80c7b1539bcc/8752b/8.png",
    "https://retro-show-r3tr0.vercel.app/static/f4ec350feb3583c8a1c09fc6d8d878ba/a079b/9.png",
  ]
  const icons = () => {
    return shapes.map((value, index) => {
      return (
        <img
          src={value}
          className={`animated fadeIn move-${
            Math.floor(Math.random() * 10) % 2 === 0 ? 'up' : 'down'
          } float-image`}
          style={{
            left: `${index * 10}%`,
            bottom: `${Math.random() *
              (+(index % 2 === 0 ? 80 : 20) - +(index % 2 === 0 ? 70 : 10)) +
              +(index % 2 === 0 ? 70 : 10)}%`,
          }}
          alt="shape"
          key={index}
        />
      )
    })
  }
  return (
    <section id={id} className="hero" style={{ height }}>
      <Row>
        <Col md={6} className="content">
          <div className="content-text">
            <div className="line-text">
              <h4>Hello, I'm</h4>
            </div>
            <Glitch text="Ali ALMANEA" />
            <Typewriter
              options={{
                strings: [
                  "UI/UX Designer",
                  "FullStack Developer",
                  "Mobile App Expert",
                ],
                autoStart: true,
                loop: true
              }}
            />
            <button className="hover-button">
              <span>Download CV</span>
            </button>
          </div>
          {icons()}
        </Col>
        <Col md={6} className="img">
          <img
            src={process.env.PUBLIC_URL + "assets/profile.png"}
            alt="person"
          />
        </Col>
      </Row>
    </section>
  );
};

export default Hero;
