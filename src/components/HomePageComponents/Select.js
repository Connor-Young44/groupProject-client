import React from "react"
import { Form } from "react-bootstrap"

export default function Select(props) {
  const { title, array } = props
  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>{title}</Form.Label>
          <Form.Control as="select" placeholder={title}>
            {array &&
              array.map((item) => {
                return <option key={item.id}>{item.name}</option>
              })}
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  )
}
