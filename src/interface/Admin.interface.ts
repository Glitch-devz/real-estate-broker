export interface loginBody {
  email: string;
  password: string;
}

export interface registerBody {
  name: string;
  email: string;
  password: string;
}

export interface Admin {
  name: string;
  role: string;
  email: string;
  phone: string;
  password: string;
}
