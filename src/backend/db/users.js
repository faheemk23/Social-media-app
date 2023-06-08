// import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "37f2383f-8b8a-44c9-b02d-982ce37aa8ca",
    firstName: "Faheem",
    lastName: "Khan",
    username: "faheemk237",
    password: "faheemKhan123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
