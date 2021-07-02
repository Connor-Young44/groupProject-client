import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

export default function Select(props) {
  const { title, array, actionType } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>{title}</Form.Label>
          <Form.Control
            onChange={(e) => dispatch(actionType(e.target.value))}
            as="select"
            placeholder={title}
          >
            {array &&
              array.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
}
