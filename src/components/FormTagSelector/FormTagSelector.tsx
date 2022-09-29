import { Select } from "antd";
import React from "react";

const { Option } = Select;

const tagsArray = [
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

const children: React.ReactNode[] = [];
for (const item of tagsArray) {
  children.push(<Option key={item}>{item}</Option>);
}
const handleChange = (value: string) => {
  // console.log(`selected ${value}`);
};

interface IFormTagSelector {
  postTagsList: string[];
  setPostTagsList: React.Dispatch<React.SetStateAction<string[]>>;
}

const FormTagSelector = ({
  postTagsList,
  setPostTagsList,
}: IFormTagSelector): JSX.Element => {
  const updatePostTags = (value: string): void => {
    setPostTagsList([...postTagsList, value]);
    return;
  };

  return (
    <Select
      mode="tags"
      style={{ width: "100%" }}
      placeholder="Tags Mode"
      onChange={(value) => {
        handleChange(value);
        updatePostTags(value);
      }}
    >
      {children}
    </Select>
  );
};

export default FormTagSelector;
