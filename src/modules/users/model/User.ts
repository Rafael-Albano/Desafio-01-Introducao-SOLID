import { v4 as uuidV4 } from "uuid";

class User {
  admin: boolean;
  email: string;
  created_at: Date;
  id: string;
  name: string;
  updated_at: Date;

  constructor() {
    this.admin = false;
    this.created_at = new Date();
    this.updated_at = new Date();
    if (!this.id) this.id = uuidV4();
  }
}

export { User };
