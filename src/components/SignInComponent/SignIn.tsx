/*--------IMPORT FROM REACT-----------------*/
import axios from "axios";
import React, {useState} from "react";
import { useEffect } from "react";

/*--------REACT COMPONENT-----------------*/
import { IUserName } from "../../Interfaces/Interfaces";
import serverUrl from "../../utils/serverUrl";

interface ISignIn {
    setUser: React.Dispatch<React.SetStateAction<string>>;
}


export default function SignIn({setUser}: ISignIn): JSX.Element {
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

    //handle on Click 
    function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
        setUser(e.target.value);
    }
    

    return(
        <select
        name="username"
        id="user-dropdown"
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
    )}