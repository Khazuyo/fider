export interface Tenant {
  id: number;
  name: string;
  domain: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Idea {
  id: number;
  title: string;
  description: string;
  createdOn: string;
  user: User;
}

export interface Comment {
  id: number;
  content: string;
  createdOn: string;
  user: User;
}