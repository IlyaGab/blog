export interface Comment {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
}

export type CommentsResponse = Comment[];

export interface CommentsState {
  commentsIds: string[];
  commentsMap: { [key: string]: Comment };
  isLoading: boolean;
}
