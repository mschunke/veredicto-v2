import type { ObjectId } from "mongodb";

export enum COLLECTIONS {
  USERS = "users",
}

export type User = {
  _id: ObjectId | string;
  createdAt: Date | string;
  updatedAt: Date | string;
  email: string;
  name: string;
};
