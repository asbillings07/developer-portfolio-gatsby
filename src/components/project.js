import React from 'react'
import { ShowCards } from './ShowCards'
import { Row, Container } from 'react-bootstrap'
import { data } from '../data'

export function Projects () {
  return (
    <Container>
      <Row>
        <ShowCards projects={data.projects} />
      </Row>
    </Container>
  )
}
