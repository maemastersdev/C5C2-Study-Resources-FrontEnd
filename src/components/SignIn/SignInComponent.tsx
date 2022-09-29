/*--------IMPORT FROM REACT-----------------*/
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import './SignInComponent.scss'

/*--------REACT COMPONENT-----------------*/
import { IUserName } from "../../Interfaces/Interfaces";
import serverUrl from "../../utils/serverUrl";

interface ISignIn {
  currentActiveUser: string;
  setCurrentActiveUser: React.Dispatch<React.SetStateAction<string>>;
}

export default function SignIn({
  currentActiveUser,
  setCurrentActiveUser,
}: ISignIn): JSX.Element {
  const [usersArray, setUsersArray] = useState<IUserName[]>([]);

  //Might not actually need all this because our users list isn't dynamic.
  //get all users
  async function getAllUsers(): Promise<void> {
    const response = await axios.get(`${serverUrl}/users`);
    const allUsers: IUserName[] = await response.data;
    setUsersArray(allUsers);
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  const LogInUser = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentActiveUser(e.target.value);
    console.log("You have been been logged In");
  };

  return (
    <button className="glow-on-hover-log">
       <select className="glow-on-hover-log"
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
