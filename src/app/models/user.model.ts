export interface User {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

export interface UsersData {
  data: User[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
