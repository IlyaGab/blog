export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export type UsersResponse = User[];

export interface UsersState {
  isLoading: boolean;
  usersIds: string[];
  usersMap: { [key: string]: User };
  currentUser: User | null;
}
