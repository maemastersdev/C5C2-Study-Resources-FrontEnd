import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Dropdown } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";

const ResourceSubmissionForm = (): JSX.Element => {
  const [resourceName, setResourceName] = useState("");
  const [author, setAuthor] = useState("");
  const [URL, setURL] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [contentType, setContentType] = useState<any>("");
  // const [seleneWeek, setSeleneWeek] = useState("");
  // const [review, setReview] = useState("");

  console.log(contentType, "this is the content type");

  const storedContent: string[] = [
    "video",
    "article",
    "ebook",
    "podcast",
    "exercises",
    "software tool",
    "course",
    "diagram",
    "cheat-sheet",
    "reference",
    "resource list",
    "youtube channel",
    "organisation",
    "website",
    "other",
  ];

  const seleneWeeks: number[] = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ];
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Resource Name</Form.Label>
        <Form.Control
          type="resource"
          placeholder="resource"
          onChange={(e) => setResourceName(e.target.value)}
          value={resourceName}
        />
        {console.log(resourceName)}
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="author"
          placeholder="author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        {console.log(author)}
        <Form.Label>URL</Form.Label>
        <Form.Control
          type="url"
          placeholder="url"
          onChange={(e) => setURL(e.target.value)}
          value={URL}
        />
        {console.log(URL)}
        <Form.Label>Thumbnail</Form.Label>
        <Form.Control
          type="url"
          placeholder="thumbnail"
          onChange={(e) => setThumbnail(e.target.value)}
          value={thumbnail}
        />
        {console.log(thumbnail)}
        <DropdownButton
          id="dropdown-basic-button btn disabled"
          title={contentType}
        >
          {storedContent.map((content) => (
            <Dropdown.Item
              key={`#/action-${content}`}
              onClick={(content) => setContentType(content)}
            >
              {content}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Selene Week">
          {seleneWeeks.map((item) => (
            <Dropdown.Item key={`#/action-${item}`}>{item}</Dropdown.Item>
          ))}
        </DropdownButton>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Review</Form.Label>
        <Form.Control as="textarea" rows={3} title="review" />
      </Form.Group>
      <button type="submit" className="btn btn-success">
        Submit your post
      </button>
    </Form>
  );
};

export default ResourceSubmissionForm;
