export interface LoginCredentials {
    email: string;
    password: string;
}
export interface RegisterCredentials {
    username: string;
    email: string;
    password: string;
}

export interface createArticle {
  name: string;
  description: string;
  image: string;
}

export interface Article {
  biddingEnabled: boolean;
  createdAt: Date;
  description: string;
  image: string;
  isSold: boolean;
  updatedAt: Date;
  name: string;
  /**
   * user id
   */
  user: string;
  _id: string;
}
