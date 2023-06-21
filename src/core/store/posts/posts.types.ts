export interface Post {
  userId: string;
  id: string;
  title: string;
  body: string;
}

export type PostsResponse = Post[];

export interface PostsState {
  isLoading: boolean;
  postsIds: string[];
  postsMap: { [key: string]: Post };
}
