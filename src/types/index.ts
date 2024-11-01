export interface ExcelData {
  [key: string]: any;
}

export interface User {
  id: string;
  username: string;
  password: string;
  role: 'admin' | 'user';
}

export interface AuthState {
  user: User | null;
  users: User[];
  login: (username: string, password: string) => boolean;
  logout: () => void;
  addUser: (user: Omit<User, 'id'>) => void;
  removeUser: (id: string) => void;
}

export interface ExcelProcessorProps {
  mainExcel: ExcelData[];
  setMainExcel: React.Dispatch<React.SetStateAction<ExcelData[]>>;
}