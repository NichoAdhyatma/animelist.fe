export type CommentRequest = {
  id?: number,
  anime_mal_id: number,
  anime_title: string,
  user_email: string,
  comment: string,
  username: string,
  rating?: number,
  createdAt?: Date,
}

export type Comment = {
  comment: string;
  username: string;
  createdAt: Date;
};

export type CommentInputProps = {
  anime_mal_id: number;
  anime_title: string;
  user_email: string;
  username: string;
}