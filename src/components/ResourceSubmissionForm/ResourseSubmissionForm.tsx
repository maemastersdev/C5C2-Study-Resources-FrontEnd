import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import serverUrl from "../../utils/serverUrl";

import { IResourceArray } from "../../Interfaces/Interfaces";

const ResourceSubmissionForm = ({
  user_id,
  user_name,
}: IResourceArray): JSX.Element => {
  const [resourceName, setResourceName] = useState("");
  const [author, setAuthor] = useState("");
  const [URL, setURL] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [review, setReview] = useState("");

  const submitPost = async () => {
    await axios.post(`${serverUrl}/postResource`, {
      resource_name: resourceName,
      author_name: author,
      url: URL,
      user_id: user_id,
      user_name: user_name,
      thumbnail: thumbnail,
      review: review,
    });
  };

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
        <Form.Label>URL</Form.Label>
        <Form.Control
          type="url"
          placeholder="url"
          onChange={(e) => setURL(e.target.value)}
          value={URL}
          required={true}
        />
        {console.log(URL)}
        <Form.Label>Thumbnail</Form.Label>
        <Form.Control
          type="url"
          placeholder="Enter an optional image url to be used as the thumbnail"
          onChange={(e) => setThumbnail(e.target.value)}
          value={thumbnail}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Review</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          title="review"
          placeholder="Write a short review or a brief note on what the post is about"
          onChange={(e) => setReview(e.target.value)}
          value={review}
        />
      </Form.Group>
      <button
        type="submit"
        className="btn btn-success"
        onClick={() => submitPost()}
      >
        Submit your post
      </button>
    </Form>
  );
};

export default ResourceSubmissionForm;
