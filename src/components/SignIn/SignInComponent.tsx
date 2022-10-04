/*--------IMPORT FROM REACT-----------------*/
import React from "react";
import "./SignInComponent.scss";

/*--------REACT COMPONENT-----------------*/
import { IUserName } from "../../Interfaces/Interfaces";

const usersArray: IUserName[] = [
  {
    user_id: 1,
    user_name: "Salman",
    faculty: false,
  },
  {
    user_id: 2,
    user_name: "Keadeish",
    faculty: false,
  },
  {
    user_id: 3,
    user_name: "Mae",
    faculty: false,
  },
  {
    user_id: 4,
    user_name: "Lui",
    faculty: false,
  },
  {
    user_id: 5,
    user_name: "Bhawick",
    faculty: false,
  },
  {
    user_id: 6,
    user_name: "Amelia",
    faculty: false,
  },
  {
    user_id: 7,
    user_name: "Ciaran",
    faculty: true,
  },
  {
    user_id: 8,
    user_name: "Jennifer",
    faculty: false,
  },
  {
    user_id: 9,
    user_name: "Katie",
    faculty: true,
  },
  {
    user_id: 10,
    user_name: "Laura",
    faculty: false,
  },
  {
    user_id: 11,
    user_name: "Lauren",
    faculty: true,
  },
  {
    user_id: 12,
    user_name: "Leo",
    faculty: false,
  },
  {
    user_id: 13,
    user_name: "Melissa",
    faculty: false,
  },
  {
    user_id: 14,
    user_name: "Mistura",
    faculty: false,
  },
  {
    user_id: 15,
    user_name: "Neill",
    faculty: true,
  },
  {
    user_id: 16,
    user_name: "Niamh",
    faculty: false,
  },
  {
    user_id: 17,
    user_name: "Sevgi",
    faculty: false,
  },
  {
    user_id: 18,
    user_name: "Will",
    faculty: false,
  },
  {
    user_id: 19,
    user_name: "Yara",
    faculty: false,
  },
];

interface ISignIn {
  currentActiveUser: string;
  setCurrentActiveUser: React.Dispatch<React.SetStateAction<string>>;
}

export default function SignIn({
  currentActiveUser,
  setCurrentActiveUser,
}: ISignIn): JSX.Element {
  //Might not actually need all this because our users list isn't dynamic.
  //get all users

  const LogInUser = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentActiveUser(e.target.value);
    console.log("You have been been logged In");
  };

  return (
    <button className="glow-on-hover-log">
      <select
        className="glow-on-hover-log"
        name="username"
        id="user-dropdown"
        onChange={LogInUser}
        value={currentActiveUser}
      >
        <option value=""> Select User </option>
        {usersArray.map((user) => {
          return (
            <option key={user.user_name} value={user.user_name}>
              {user.user_name}
            </option>
          );
        })}
      </select>
    </button>
  );
}
