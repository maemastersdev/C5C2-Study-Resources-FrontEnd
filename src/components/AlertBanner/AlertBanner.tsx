import React from "react";
import { Alert } from "antd";
import imageUrlChecker from "../../utils/imageUrlChecker";

/*
need to pass resource_name
url
resource_review
 */

interface IAlertSubmission {
  resourceName: string;
  URL: string;
  review: string;
  thumbnail: string;
}

const AlertBanner = ({
  resourceName,
  URL,
  review,
  thumbnail,
}: IAlertSubmission): JSX.Element => {
  const requiredSubmissionFields =
    resourceName.trim().length > 0 &&
    URL.trim().length > 0 &&
    review.trim().length > 0;

  return (
    <>
      {!requiredSubmissionFields && (
        <Alert
          type="info"
          message="Woah looks like your missing some inputs. Make sure you've field all the required fields before submitting"
          banner
        />
      )}
      {!imageUrlChecker(thumbnail) && (
        <Alert
          type="error"
          message="Make sure your thumbnail image is in the form 'https://...'"
          banner
        />
      )}
    </>
  );
};

export default AlertBanner;
