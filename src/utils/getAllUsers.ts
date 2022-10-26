import axios from "axios";
import { IUserName } from "../Interfaces/Interfaces";
import serverUrl from "./serverUrl";

async function getAllUsers(
  setUsersArray: React.Dispatch<React.SetStateAction<IUserName[]>>
): Promise<void> {
  const response = await axios.get(`${serverUrl}/users`);
  const allUsers: IUserName[] = response.data;
  console.log(allUsers);
  setUsersArray(allUsers);
}

export default getAllUsers;
