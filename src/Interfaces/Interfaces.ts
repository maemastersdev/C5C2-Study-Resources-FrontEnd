export interface IResourceArray {
  resource_id: number;
  resource_name?: string;
  author_name?: string;
  url?: string;
  content_type?: string;
  learning_stage?: number;
  date: string;
  user_id: string;
  user_name: string;
  review?: string;
  likes?: number;
  thumbnail?: string;
  currentActiveUser: string;
  setTagsArray?: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface singleResource {
  resource_id: number;
  resource_name: string;
  author_name: string;
  url: string;
  content_type: string;
  learning_stage: string;
  date: string;
  user_name: string;
  review: string;
  thumbnail: string;
  likes: number;
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
  tagsArray: string[];
  filterSearchTerm: string;
  setPostTagsArray: React.Dispatch<React.SetStateAction<string[]>>;
  setResourcesArray: React.Dispatch<React.SetStateAction<IResourceArray[]>>;
}

export interface IGrid {
  resourcesArray: IResourceArray[];
  setResourcesArray: React.Dispatch<React.SetStateAction<IResourceArray[]>>;
  tagsArray: string[];
  setTagsArray: React.Dispatch<React.SetStateAction<string[]>>;
  filterSearchTerm: string;
  currentActiveUser: string;
}

export interface IComment {
  comment_id: number;
  user_name: string;
  resource_id: number;
  comment: string;
  date: string;
}
