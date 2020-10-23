import React, {useState} from 'react'
import './PostCreator.scss'
import { useLocation } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

export const PostCreator = () => {
  const [formEmail, setFormEmail] = useState()
  const urlQueryParams = useQuery()
  const email = urlQueryParams.get('email')
  const onSubmit = (email) => {
    console.log(email)
    window.location.href = '?email=' + email;
  }

  return (
    <div>
      {email ?
        <div>
          <h1 className={'PostCreator'}>Welcome, {email}!</h1>
        </div>
        :
        <div>
          <h1>Login</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(event)=>setFormEmail(event.target.value)}/>
            </Form.Group>
            <Button variant="primary" onClick={()=>onSubmit(formEmail)}>
              Login
            </Button>
          </Form>
        </div>
      }
    </div>
  )
}
