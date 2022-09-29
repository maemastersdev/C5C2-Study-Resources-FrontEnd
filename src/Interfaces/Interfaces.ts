export interface IResourceArray {
  resource_id?: number;
  resource_name?: string;
  author_name?: string;
  url?: string;
  content_type?: string;
  learning_stage?: number;
  date: string;
  user_id: string;
  user_name?: string;
  review?: string;
  likes?: number;
  thumbnail?: string;
}

export interface ITagsArray {
  unique_tag_id?: number;
  resource_id?: number;
  tag?: string;
}

export interface IUserName {
  user_id: string;
  user_name: string;
}

export interface IPageHeader {
  filterSearchTerm: string;
  setFilterSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  currentActiveUser: string;
  setCurrentActiveUser: React.Dispatch<React.SetStateAction<string>>;
  tagsArray: string[];
  setTagsArray: React.Dispatch<React.SetStateAction<string[]>>;
  postTagsArray: string[];
  setPostTagsArray: React.Dispatch<React.SetStateAction<string[]>>;
  setResourcesArray: React.Dispatch<React.SetStateAction<IResourceArray[]>>;
}

export interface IResourceSubmissionForm {
  user_name: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  postTagsArray: string[];
  setPostTagsArray: React.Dispatch<React.SetStateAction<string[]>>;
  setResourcesArray: React.Dispatch<React.SetStateAction<IResourceArray[]>>;
}

export interface IGrid {
  resourcesArray: IResourceArray[];
  setResourcesArray: React.Dispatch<React.SetStateAction<IResourceArray[]>>;
}
