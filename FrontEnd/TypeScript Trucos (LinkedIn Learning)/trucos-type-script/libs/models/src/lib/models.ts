import { DirectionType } from "./common.types";

export interface Blog {
  posts: Post[];
  category: string;
  ads: boolean;
}

export interface Post{
  title:string;
  description: string;
  content:string;
  tags:string;
  author : Author[];
}

export interface Author{
  name: string;
  email: string;
}

export interface Tool{
  id:string;
  direction:DirectionType;
}

const direction : DirectionType = 'down';