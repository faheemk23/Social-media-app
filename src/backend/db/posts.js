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
    comments: [],
    video:
      "https://res.cloudinary.com/dlzwbrjjs/video/upload/v1686958432/videos/sgumlgm6tgkiiesiqlq0.mp4",
    username: "divya19",
    name: "Divya Saxena",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "afbfa61a-dc28-4199-a4cb-f73b880c0f80",
    content: "ye Error jata kyu nahi hai ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    images: [
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1686952183/images/alo28ohmbvtnonwkzr0n.jpg",
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1686952183/images/alo28ohmbvtnonwkzr0n.jpg",
    ],
    username: "faisalk41",
    name: "Faisal Khan",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "afbfa61a-dc28-4199-a4cb-g23b110c0f31",
    content:
      "Made my first major 𝐑𝐞𝐚𝐜𝐭 project ( an 𝐄𝐜𝐨𝐦𝐦𝐞𝐫𝐜𝐞 𝐀𝐩𝐩 to buy groceries online ). Had the most fun time building this from scratch. Realized that more than writing code it's about understanding how the data is flowing and how the pieces are interacting with each other. Do check it out. Feedback are most welcome ",
    links: {
      "𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐋𝐢𝐧𝐤": "https://lnkd.in/dSiZpbBf",
      "𝐆𝐢𝐭𝐡𝐮𝐛 𝐫𝐞𝐩𝐨": "https://lnkd.in/dc8bqhS5",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    images: [
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1686952183/images/alo28ohmbvtnonwkzr0n.jpg",
    ],
    video:
      "https://res.cloudinary.com/dlzwbrjjs/video/upload/v1686958432/videos/sgumlgm6tgkiiesiqlq0.mp4",
    username: "faheemk237",
    name: "Faheem Khan",
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
    images: [
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1686952183/images/alo28ohmbvtnonwkzr0n.jpg",
    ],
    username: "adarshbalak",
    name: "Adarsh Balak",
    createdAt: "2023-06-11T12:00:28+05:30",
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
    images: [
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1686952183/images/alo28ohmbvtnonwkzr0n.jpg",
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1686952183/images/alo28ohmbvtnonwkzr0n.jpg",
    ],
    username: "anujkumar",
    name: "Anuj Kumar",
    createdAt: "2023-06-10T10:55:06+05:30",
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
    images: [
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1686952183/images/alo28ohmbvtnonwkzr0n.jpg",
    ],
    username: "adarshbalak",
    name: "Adarsh Balak",
    createdAt: "2023-06-09T10:55:06+05:30",
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
    images: [
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1686952183/images/alo28ohmbvtnonwkzr0n.jpg",
    ],
    username: "hrishi11",
    name: "Hrishi Bar",
    createdAt: "2023-06-08T10:55:06+05:30",
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
    images: [
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1686952183/images/alo28ohmbvtnonwkzr0n.jpg",
    ],
    username: "hrishi11",
    name: "Hrishi Bar",
    createdAt: "2023-06-05T10:55:06+05:30",
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
    images: [
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1686952183/images/alo28ohmbvtnonwkzr0n.jpg",
    ],
    username: "rohanB",
    name: "Rohan Bond",
    createdAt: "2023-06-01T10:55:06+05:30",
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
    images: [
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1686952183/images/alo28ohmbvtnonwkzr0n.jpg",
    ],
    username: "rohanB",
    name: "Rohan Bond",
    createdAt: "2023-05-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
];
