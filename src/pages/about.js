import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import profilePic from '../images/profile_pic.jpeg'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Link from '@material-ui/core/Link'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import Layout from '../components/layout'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  container: {
    marginTop: 25,
    marginBottom: 250
  },
  media: {
    maxHeight: 0,
    paddingTop: '118.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
}))

const About = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Container className={classes.container}>
        <Row>
          <Col md={6}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={profilePic}
                title='Profile Image'
              />
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Click any of the icons below to connect with or learn more
                  about me. You can also checkout the articles I've written{' '}
                  <Link
                    href='https://medium.com/@asbillings2007'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    here
                  </Link>
                  .
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label='add to favorites'>
                  <Link
                    href='https://github.com/asbillings07'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <GitHubIcon />
                  </Link>
                </IconButton>
                <IconButton aria-label='share'>
                  <Link
                    href='https://www.linkedin.com/in/aaron-billings-9b429610a/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <LinkedInIcon />
                  </Link>
                </IconButton>
                <IconButton aria-label='share'>
                  <Link
                    href='https://twitter.com/abdevelops'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <TwitterIcon />
                  </Link>
                </IconButton>
                <IconButton aria-label='share'>
                  <Link
                    href='mailto:abdevelops@gmail.com?subject=Thanks%20For%20Reaching%20Out&body=I%27m%20looking%20forward%20to%20connecting%20with%20you.%20You%20can%20replace%20this%20message%20with%20your%20own.%20'
                    target='_blank'
                    rel='noopener'
                  >
                    <EmailIcon />
                  </Link>
                </IconButton>
              </CardActions>
            </Card>
          </Col>
          <Col md={6}>
            <Typography variant='h1' color='textPrimary'>
              It's crazy that...
            </Typography>
            <br />
            <Typography variant='h6' color='textSecondary'>
              It's already been over year since I started my coding journey.
              Before I was a developer, I was a support manager. I really
              enjoyed helping customers and helping my team grow.
            </Typography>
            <br />
            <Typography variant='h6' color='textSecondary'>
              However, I was always curious about how these issues were solved.
              That curiousity lead me into the world of Software development. I
              loved what I was learning so much that I would spend most of my
              waking hours reading coding books, watching tutorials, and working
              on projects.
            </Typography>
            <br />
            <Typography variant='h6' color='textSecondary'>
              When I join the Treehouse Techdegree program, my passion for
              developing pushed me to code at least 8 hours a day while working
              a full time 9-5 job. I would wake up everyday at 4:30am, get to
              work by 5am, then code until 9am. I would work my full-time job
              until 12pm, code during lunch, then work my job again until 5pm.
              After which I would come home and code from 8pm until 12am.
            </Typography>
            <br />
            <Typography variant='h6' color='textSecondary'>
              I'm still amazed that I able to purse my passion and make a
              living. I never would have thought that was possible years ago.
              Coding makes me excited to get up in the morning, and pushes me to
              learn new languages and technologies. I am very passionate about
              software development and enjoy encouraging others that are on the
              same path.
            </Typography>
            <br />
            <Typography variant='h6' color='textSecondary'>
              When I'm not coding, I enjoy spending time with my wife and two
              daughters, playing video games, and watching movies.
            </Typography>
            <br />
            <Typography variant='h6' color='textSecondary'>
              Thanks for checking out my portfolio! If you like what you seen,
              I'd love to hear from you. I'm always on the lookout for my next
              great adventure.
            </Typography>
            <br />
            <Typography variant='h6' color='textSecondary'>
              Also, checkout some of the articles I've written{' '}
              <Link
                href='https://medium.com/@asbillings2007'
                target='_blank'
                rel='noopener noreferrer'
              >
                here
              </Link>
              .
            </Typography>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export default About
