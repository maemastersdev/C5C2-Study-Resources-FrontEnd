import { Select } from "antd";
import React from "react";

const { Option } = Select;

const contentArray = [
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

interface IFormContentSelector {
  setContentType: React.Dispatch<React.SetStateAction<string>>;
}

const FormContentSelector = ({
  setContentType,
}: IFormContentSelector): JSX.Element => {
  const handleChange = (value: string) => {
    setContentType(value);
  };

  return (
    <>
      <Select
        defaultValue="Choose The Content Type"
        style={{ width: "100%", marginTop: "1rem" }}
        onChange={handleChange}
      >
        {contentArray.map((item) => (
          <Option key={item}>{item}</Option>
        ))}
      </Select>
    </>
  );
};

export default FormContentSelector;
