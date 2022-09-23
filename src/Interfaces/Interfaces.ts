export interface IResourceArray {
  resource_id: number;
  resource_name?: string;
  author_name?: string;
  url?: string;
  content_type?: string;
  learning_stage?: number;
  date?: string;
  user_id: string;
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
  user_name: string;
}
