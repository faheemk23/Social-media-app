// import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "4a200ad0-8487-47c8-9595-0b70043eecda",
    content: "lorem ipsum daisy. ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "divya32",
    firstName: "Divya",
    lastName: "Saxena",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "afbfa61a-dc28-4199-a4cb-f73b880c0f80",
    content: "ye Error jata kyu nahi hai",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "faisalk41",
    firstName: "Faisal",
    lastName: "Khan",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "afbfa61a-dc28-4199-a4cb-g23b110c0f31",
    content: "Hola Amigos ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "faheemk237",
    firstName: "Faheem",
    lastName: "Khan",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "406acf0d-a683-4c80-a42d-92f0c6544dca",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalak",
    createdAt: "2022-05-15T12:00:28+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "b8574c86-df7a-46ed-8bc2-69dd4f99307b",
    content: 'Hey what"s app guy"s what"s going on?',
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "anujkumar",
    createdAt: "2022-01-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "c789564c86-df7a-46ed-8bc2-69dd4f99307b",
    content:
      "I am done with the social media project can please provide some valuable feebback",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalak",
    createdAt: "2022-05-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "r8fg5659641-d787a-46ed-8bc2-69dd4307b",
    content:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "hrishi11",
    createdAt: "2021-10-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "99874gyu-4545-89-8bc2-69dd4307b",
    content:
      "awake at 3AM | tweeting stuff mostly related to code | learning @neogcamp🚀",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "hrishi11",
    createdAt: "2021-10-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "7845hyuff-8888-45ki-8bc2-69dd4307b",
    content:
      "Presenting my new React Project Socially, A social Media app made using React, JavaScript, Redux, Tailwind CSS",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "rohanB",
    createdAt: "2021-10-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "eee4456-666-788vfghg-8bc2-69dd4307b",
    content: "Wrote 2 blogs for NeoBlogging Marathon at @neogcamp ",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "rohanB",
    createdAt: "2021-10-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
];
