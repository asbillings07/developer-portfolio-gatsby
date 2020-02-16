import React from 'react'
import TextField from '@material-ui/core/TextField'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { makeStyles } from '@material-ui/core/styles'
import { FormGroup } from '@material-ui/core'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Layout from '../components/layout'
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 500,
      justifyContent: 'center'
    }
  },
  textArea: {
    marginTop: 25,
    marginBottom: 25
  },
  firstName: {
    marginTop: 25
  },
  SubmitButton: {
    marginBottom: 500
  }
}))

const ContactForm = () => {
  const classes = useStyles()
  return (
    <Layout>
      <HeadingContainer>
        <Typography variant="h1" color="textSecondary">
          Contact Form
        </Typography>
      </HeadingContainer>
      <Container>
        <form
          className={classes.root}
          name="contact"
          method="POST"
          action="/forms/success"
        >
          <input name="form-name" value="contact" type="hidden" />
          <FormGroup row>
            <TextField
              required
              name="First Name"
              className={classes.firstName}
              label="First Name"
              placeholder="First Name"
            />
          </FormGroup>
          <FormGroup row>
            <TextField
              required
              name="Last Name"
              label="Last Name"
              placeholder="Last Name"
            />
          </FormGroup>
          <FormGroup row>
            <TextField
              required
              name="Email"
              type="email"
              label="Email Address"
              placeholder="Email Address"
            />
          </FormGroup>
          <FormGroup row>
            <TextField
              required
              name="Company"
              label="Company"
              placeholder="Name of your company"
            />
          </FormGroup>
          <FormGroup row>
            <TextareaAutosize
              className={classes.textArea}
              name="Message"
              aria-label="minimum height"
              rows={3}
              label="message"
              placeholder="What can I help you with?"
            />
          </FormGroup>
          <FormGroup row>
            <Button
              className={classes.SubmitButton}
              type="submit"
              color="primary"
              variant="contained"
            >
              Send
            </Button>
          </FormGroup>
        </form>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`
export default ContactForm
