import axios from "axios";
import serverUrl from "./serverUrl";

const addOrRemoveToFavourites = async (
  resource_id: number,
  currentActiveUser: string,
  setFavResource: React.Dispatch<React.SetStateAction<Promise<boolean>>>,
  favResource: boolean
): Promise<void> => {
  if (favResource) {
    await axios.delete(
      `${serverUrl}/removeFav/${currentActiveUser}/${resource_id}`
    );
    console.log(`resource ${resource_id} has beenremoved from your favourites`);
    alert(
      `resource ${resource_id} has been removed from your favourites / study-list`
    );
  } else {
    axios.post(`${serverUrl}/addFav/${currentActiveUser}/${resource_id}`);
    console.log(` resource ${resource_id} has been favourited`);
    alert(
      ` resource ${resource_id} has been favourited and added to your study-list`
    );
  }
};

export default addOrRemoveToFavourites;
