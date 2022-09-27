import React from "react";
import "./TagListSelect.scss";

const TagOptions = [
  "React",
  "TypeScript",
  "SQL",
  "Node.js",
  "CSS",
  "Testing",
  "Other",
  "UI",
  "UX",
  "Frontend",
  "Backend",
];

interface ITagListSelect {
  tagsArray: string[];
  setTagsArray: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagListSelect = ({
  tagsArray,
  setTagsArray,
}: ITagListSelect): JSX.Element => {
  console.log(tagsArray);

  const addTagFilter = (tag: string) => {
    const checkTagArray = tagsArray;

    const tagIndex = checkTagArray.indexOf(tag);

    if (checkTagArray.includes(tag)) {
      checkTagArray.splice(tagIndex, 1);
      const reducedTagArray = checkTagArray;
      setTagsArray([...reducedTagArray]);
    } else {
      setTagsArray([...checkTagArray, tag]);
    }
  };

  return (
    <>
      <form className="tag_container">
        {TagOptions.map((tag) => (
          <fieldset key={tag}>
            <legend>Select what topics you're into</legend>
            <label className="control" htmlFor={tag}>
              <input
                type="checkbox"
                name="topics"
                id={tag}
                onClick={() => addTagFilter(tag)}
              />
              <span className="control__content">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <circle cx="15" cy="15" r="15" fill="#1E1B1D"></circle>
                  <path
                    d="M10.78 21h1.73l.73-3.2h2.24l-.74 3.2h1.76l.72-3.2h3.3v-1.6H17.6l.54-2.4H21v-1.6h-2.5l.72-3.2h-1.73l-.73 3.2h-2.24l.74-3.2H13.5l-.73 3.2H9.5v1.6h2.93l-.56 2.4H9v1.6h2.52l-.74 3.2zm2.83-4.8l.54-2.4h2.24l-.54 2.4H13.6z"
                    fill="#fff"
                  ></path>
                </svg>
                {tag}
              </span>
            </label>
          </fieldset>
        ))}
      </form>
    </>
  );
};

export default TagListSelect;
