import React from 'react'
import styled from 'styled-components'
import { Card, Button, Col } from 'react-bootstrap'
import { PropTypes } from 'prop-types'

export function ShowCards ({ projects }) {
  return projects.map(project => (
    <Col md={4} sm={2} key={project.id}>
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <FrontCard className=' flip-card-front'>
            <Card.Img variant='top' src={project.image_urls[0]} />
          </FrontCard>
          <BackCard className=' flip-card-back'>
            <Card.Body>
              <Card.Title>{project.project_name}</Card.Title>
              <SubTitle>{project.description}</SubTitle>
              <Button href={`/project/${project.id}`} variant='primary'>
                Go Here
              </Button>
            </Card.Body>
          </BackCard>
        </div>
      </div>
    </Col>
  ))
}

const FrontCard = styled(Card)`
  margin: 25px;
  border: 0px;
  box-shadow: 5px 5px 5px;
`
const BackCard = styled(Card)`
  margin: 25px;
  border: 0px;
  box-shadow: 5px 5px 5px;
`
const SubTitle = styled(Card.Subtitle)`
  margin-bottom: 0.75em;
`

ShowCards.propTypes = {
  projects: PropTypes.array
}
