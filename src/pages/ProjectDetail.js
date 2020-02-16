import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Layout from '../components/layout'
import { data } from '../data'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Fab from '@material-ui/core/Fab'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

const useStyles = makeStyles(theme => ({
  Title: {
    marginTop: 25
  },
  Button: {
    marginBottom: 40,
    marginRight: 20
  },
  nextbutton: {
    marginBottom: 30,
    marginRight: 20,
    disabled: true
  },
  viewProject: {
    marginBottom: 50
  }
}))

const ProjectDetail = ({ match }) => {
  const { id } = match.params
  const project = data.projects[id]

  const nextProject = match => {
    const nextButton = document.getElementById('next')
    const { id } = match.params
    const { projects } = data
    if (id >= 0 && id < projects.length - 1) {
      window.location.href = `/project/${+id + 1}`
    } else {
      nextButton.disabled = true
    }
  }
  const prevProject = match => {
    const prevButton = document.getElementById('prev')
    console.log(prevButton)
    const { id } = match.params
    const { projects } = data
    if (id <= projects.length - 1 && id > 0) {
      window.location.href = `/project/${+id - 1}`
    } else {
      prevButton.addClass('mui-disabled')
    }
  }
  const classes = useStyles()
  return (
    <Layout>
      <Container>
        <br />
        <Row>
          <Col md={9}>
            <Typography variant="h3" color="textPrimary">
              {project.project_name}
            </Typography>
            <br />
            <Typography variant="h4" color="textSecondary">
              {project.description}
            </Typography>
          </Col>
        </Row>
        <Row>
          <ProjectCol md={8}>
            {project.image_urls.map((imageSrc, i) => (
              <ProjectImage
                src={imageSrc}
                alt={`${project.project_name}`}
                key={i}
              />
            ))}
          </ProjectCol>
          <ButtonCol md={3}>
            <Fab
              onClick={() => prevProject(match)}
              className={classes.nextbutton}
              id="prev"
              aria-label="previous"
              variant="extended"
            >
              <ArrowBackIosIcon />
              Prev
            </Fab>
            <Fab
              onClick={() => nextProject(match)}
              className={classes.nextbutton}
              id="next"
              aria-label="next"
              variant="extended"
            >
              <ArrowForwardIosIcon className={classes.extendedIcon} />
              Next
            </Fab>
            <ButtonGroup
              className={classes.viewProject}
              variant="contained"
              size="large"
            >
              <Button
                size="large"
                variant="contained"
                color="primary"
                href={project.github_link}
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                size="large"
                variant="contained"
                color="primary"
                href={project.live_link}
                target="_blank"
              >
                Live View
              </Button>
            </ButtonGroup>
            <h3>Technologies</h3>
            {project.technologies.map((tech, i) => (
              <p key={i}>{tech}</p>
            ))}
          </ButtonCol>
        </Row>
      </Container>
    </Layout>
  )
}

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 2px 2px 2px 2px;
`
const ProjectCol = styled(Col)`
  margin-right: 20px;
`
const ButtonCol = styled(Col)`
  margin-top: 25px;
`
// turn color red when it gets to end
export default ProjectDetail
