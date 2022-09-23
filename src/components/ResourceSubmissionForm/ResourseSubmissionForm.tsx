import React from "react";
import Form from "react-bootstrap/Form";
import { Dropdown } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";

const ResourceSubmissionForm = (): JSX.Element => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Resource Name</Form.Label>
        <Form.Control type="resource" placeholder="resource" />
        <Form.Label>Author</Form.Label>
        <Form.Control type="author" placeholder="author" />
        <Form.Label>URL</Form.Label>
        <Form.Control type="url" placeholder="url" />
        <DropdownButton id="dropdown-basic-button" title="Content Type">
          <Dropdown.Item href="#/action-1">Youtube</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Reddit</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Selene Week">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
            (item) => (
              <Dropdown.Item key={`#/action-${item}`}>{item}</Dropdown.Item>
            )
          )}
        </DropdownButton>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Review</Form.Label>
        <Form.Control as="textarea" rows={3} title="review" />
      </Form.Group>
    </Form>
  );
};

export default ResourceSubmissionForm;
