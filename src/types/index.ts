export type Post = {
  id: string;
  title: string;
  content: string;
  author: string;
};

export type Posts = Post[];

export type PostBody = {
  title: string;
  content: string;
  author: string;
};
