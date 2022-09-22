import React from "react";

/*------------STYLING IMPORT -----------------------*/
import "./ResourceCard.scss";
/*------------ASSET IMPORT-----------------------*/

const ResourceCard = (): JSX.Element => {
  return (
    <>
      <div className="container">
        <div className="post">
          <div className="header_post">
            <img
              src="https://patoliyainfotech.com/wp-content/uploads/2019/10/one-year-of-react-native.png"
              alt=""
            />
          </div>

          <div className="body_post">
            <div className="post_content">
              <h1>Lorem Ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci animi assumenda cumque deserunt dolorum ex
                exercitationem.
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
