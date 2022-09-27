import React from "react";
import { Alert } from "antd";

/*
need to pass resource_name
url
resource_review
 */

interface IAlertSubmission {
  resourceName: string;
  URL: string;
  review: string;
}

const AlertBanner = ({
  resourceName,
  URL,
  review,
}: IAlertSubmission): JSX.Element => {
  const requiredSubmissionFields =
    resourceName.trim().length > 0 &&
    URL.trim().length > 0 &&
    review.trim().length > 0;
  console.log(requiredSubmissionFields);

  return (
    <>
      {!requiredSubmissionFields && (
        <Alert
          message="Woah looks like your missing some inputs. Make sure you've field all the required fields before submitting"
          banner
        />
      )}
    </>
  );
};

export default AlertBanner;
