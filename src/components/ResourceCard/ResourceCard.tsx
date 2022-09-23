import React from "react";
/*------------STYLING IMPORT -----------------------*/
import "./ResourceCard.scss";
/*------------ASSET IMPORT-----------------------*/

import images from '../../assets/images/images'

const ResourceCard = (): JSX.Element => {
  return (
    <>
      <div className="container">
        <div className="post">
          <div className="header_post">
            <img
              src={images.SpaceOne}
              alt=""
            />
          </div>

          <div className="body_post">
            <div className="post_content">
              <h1>Title Goes HERE</h1>
              <p>
                Example Resource Description
              </p>

              <div className="container_infos">
                <div className="postedBy">
                  <span>author</span>
                  John Doe
                </div>

                <div className="container_tags">
                  <span>tags</span>
                  <div className="tags">
                    <ul>
                      <li>design</li>
                      <li>front end</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourceCard;
