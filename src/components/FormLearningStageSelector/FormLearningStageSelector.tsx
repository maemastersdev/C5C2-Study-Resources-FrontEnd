import { Select } from "antd";
import React from "react";

const { Option } = Select;

const learningStagesArray = [
  "Everyone",
  "Beginner",
  "Intermediate",
  "Advanced",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
];

interface IFormLearningStageSelector {
  setLearningStage: React.Dispatch<React.SetStateAction<string>>;
}

const FormLearningStageSelector = ({
  setLearningStage,
}: IFormLearningStageSelector): JSX.Element => {
  const handleChange = (value: string) => {
    setLearningStage(value);
  };

  return (
    <>
      <Select
        defaultValue="Recommended Week / Difficulty Level"
        style={{ width: "100%", marginTop: "1rem" }}
        onChange={handleChange}
      >
        {learningStagesArray.map((item) => (
          <Option key={item}>{item}</Option>
        ))}
      </Select>
    </>
  );
};

export default FormLearningStageSelector;
