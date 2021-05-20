import profile from './image2.jpg';
import p1 from './p1.PNG';
import p2 from './p2.PNG';
import Particles from 'react-particles-js';
import SkillBar from 'react-skillbars';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import designLogo from'./design.png';
import codeLogo from'./code.png';
import launchLogo from'./launch.png';

var skills = [
  {
    "type": "HTML/CSS",
    "level": 100,
    "color": {
      "bar": "#EC9F94",
      "title": {
        "background": "#E7351A",
        "text": "white"
      }
    }
  },
  {
    "type": "JavaScript",
    "level": 90,
    "color": {
      "bar": "#E5BE91",
      "title": {
        "background": "#EB8815",
        "text": "white"
      }
    }
  },
  {
    "type": "React",
    "level": 85,
    "color": {
      "bar": "#9EBC7D",
      "title": {
        "background": "#63BC03",
        "text": "white"
      }
    }
  },
  {
    "type": "Java",
    "level": 50,
    "color": {
      "bar": "#8BBFAE",
      "title": {
        "background": "#07C182",
        "text": "white"
      }
    }
  },
  {
    "type": "Spring",
    "level": 50,
    "color": {
      "bar": "#8AB8C3",
      "title": {
        "background": "#09A3CA",
        "text": "white"
      }
    }
  },
  {
    "type": "MySQL",
    "level": 50,
    "color": {
      "bar": "#6B89C0",
      "title": {
        "background": "#124EBD",
        "text": "white"
      }
    }
  },
  {
    "type": "Docker",
    "level": 50,
    "color": {
      "bar": "#8771B9",
      "title": {
        "background": "#4A19B8",
        "text": "white"
      }
    }
  }
];

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function App() {
  const classes = useStyles();
  const github = "https://github.com/landaverde15";
  return (
    <div className="containerDesktop containerMobile">
      {/* ------------------------- */}
      {/* left side of desktop view */}
      {/* ------------------------- */}
      <div className="desktopLeft desktopLeftMobile">
        <Particles className="particles"/>
        <div className="row">
          <div className="col photoCol">
            <img className="profilePhoto" src={profile}/>
          </div>
        </div>
        <div className="row">
          <div className="col nameCol">
            <p className="desktopName">Erik Landaverde</p>
          </div>
          <div className="col nameCol">
            <p className="desktopDescription">Full Stack Software Engineer</p>
          </div>
          <div className="col nameCol">
            <p className="desktopDescription">Let's connect!</p>
          </div>
        </div>
        <div className="col socialMedia">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-github" onClick={() => window.open(github, "_blank")}></i>
          <i className="fab fa-linkedin"></i>
          <i className="fas fa-paper-plane"></i>
        </div>
      </div>
      {/* -------------------------- */}
      {/* right side of desktop view */}
      {/* -------------------------- */}
      <div className="desktopRight desktopRightMobile">
        {/* -------- */}
        {/* about me */}
        {/* -------- */}
        <div className="row">
          <div className="col bodyTitle">
            <h1 className="bodyTitleAbout">About Me &#128640;</h1>
          </div>
          <div className="col">
            <p className="aboutDesc">Hello, I'm Erik! I'm a Full Stack Software Engineer out of Los Angeles, California.
              I received my B.S. in Computer Information Technology from California State University Northridge.
              When I'm not coding I'm spending time with family, training martial arts, or enjoying good music.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col bodyTitle">
            <h1 className="bodyTitleSkills">Skills &#128187;</h1>
          </div>
        </div>
        {/* ------------ */}
        {/* skills graph */}
        {/* ------------ */}
        <div className="row">
          <div className="col">
            <SkillBar skills={skills} />
          </div>
        </div>
        <div className="row">
          <div className="col bodyTitle">
            <h1 className="bodyTitleServices">Services &#128295;</h1>
          </div>
        </div>
        <div className="row">
          <div className="col2 oneThird mobileOneOne2">
            <div className="card">
              <div className="face face1">
                  <div className="content">
                      <img className="serviceLogos" src={designLogo} />
                      <h3>Design</h3>
                  </div>
              </div>
              <div className="face face2">
                  <div className="content">
                      <p>I can design a mockup upon request. This is done using professional software like Adobe XD.</p>
                  </div>
              </div>
            </div>
          </div>
          <div className="col2 oneThird mobileOneOne2">
            <div className="card">
              <div className="face face1">
                  <div className="content">
                      <img className="serviceLogos" src={codeLogo} />
                      <h3>Code</h3>
                  </div>
              </div>
              <div className="face face2">
                  <div className="content">
                      <p>If you have an idea I can make it a reality. Send over your ideas and I can develop it!</p>
                  </div>
              </div>
            </div>
          </div>
          <div className="col2 oneThird mobileOneOne2">
            <div className="card">
              <div className="face face1">
                  <div className="content">
                      <img className="serviceLogos" src={launchLogo} />
                      <h3>Launch</h3>
                  </div>
              </div>
              <div className="face face2">
                  <div className="content">
                      <p>If you need help launching an application I can help. Or, if you already have an existing server and need help with setup/management I can help as well.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col bodyTitle">
            <h1 className="bodyTitleWork">Work &#x1F4BC;</h1>
          </div>
        </div>
        {/* --------------- */}
        {/* Work Experience */}
        {/* --------------- */}
        <div className="row">
          <div className="col">
           <Timeline align="alternate">
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body2" color="textSecondary">
                    May 2019 - Present
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <BusinessCenterIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                      Programmer Analyst - Kinecta Federal Credit Union
                    </Typography>
                    <Typography>Los Angeles, CA</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body2" color="textSecondary">
                    April 2018 - May 2019
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <BusinessCenterIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                      Help Desk Engineer Intern - NKSFB
                    </Typography>
                    <Typography>Los Angeles, CA</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body2" color="textSecondary">
                    May 2021
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" variant="outlined">
                    <SchoolIcon />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                      Graduate - B.S. Computer Information Technology
                    </Typography>
                    <Typography>California State University Northridge</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
        {/* --------- */}
        {/* Portfolio */}
        {/* --------- */}
        <div className="row">
          <div className="col bodyTitle">
            <h1 className="bodyTitlePortfolio">Portfolio &#128194;</h1>
          </div>
        </div>
        <div className="row">
          <div className="col oneHalf mobileOneOne">
            <div className="imgSizerContainer">
              <img className="imgSizer" src={p1}/>
              <div className="overlayImg">
                <div className="imgText">
                  <div className="siteName">
                    <h3>Vista Del Puerto Apartments</h3>
                  </div>
                  <div className="imgLinkDiv">
                    <a href="https://cbhousing.org/vistas-leasing/" target="_blank" className="imgLink">Visit Site</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col oneHalf mobileOneOne">
            <div className="imgSizerContainer">
              <img className="imgSizer" src={p2}/>
              <div className="overlayImg">
                <div className="imgText">
                  <div className="siteName">
                    <h3>Mail & More Co.</h3>
                  </div>
                  <div className="imgLinkDiv">
                    <a href="https://www.mailmoreca.com/" target="_blank" className="imgLink">Visit Site</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default App;
