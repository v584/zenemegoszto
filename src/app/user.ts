export interface User {
  id: string;
  username: string;
  email: string;
  profilePicture?: string;
  bio?: string;
  joinDate: Date;
}
