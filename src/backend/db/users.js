// import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "37f2383f-8b8a-44c9-b02d-982ce37aa",
    name: "Faheem Khan",
    username: "faheemk237",
    password: "faheemKhan123",
    followers: [
      {
        _id: "37f2383f-8b8a-44c9-b02d-982ce37aa3fx",
        name: "Faisal Khan",
        username: "faisalk41",
        avatar:
          "https://res.cloudinary.com/anujy0510/image/upload/v1652872171/pexels-photo-1516680_xtfewh.jpg",
      },
    ],
    following: [
      {
        _id: "37f2383f-8b8a-44c9-b02d-982ce37aa3fx",
        name: "Faisal Khan",
        username: "faisalk41",
        password: "faisal",
        avatar:
          "https://res.cloudinary.com/anujy0510/image/upload/v1652872171/pexels-photo-1516680_xtfewh.jpg",
      },
    ],
    avatar:
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1686961152/IMG_20230131_114212_qkvum8.jpg",
    cover:
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1687813222/a_bcefs0.webp",
    bio: "Add the bio",
    location: "Add the location",
    website: "https://faheemk.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "37f2383f-8b8a-44c9-b02d-982ce37aa3fx",
    name: "Faisal Khan",
    username: "faisalk41",
    password: "faisal",
    followers: [
      {
        _id: "37f2383f-8b8a-44c9-b02d-982ce37aa",
        name: "Faheem Khan",
        username: "faheemk237",
        avatar:
          "https://res.cloudinary.com/anujy0510/image/upload/v1652872171/pexels-photo-1516680_xtfewh.jpg",
      },
    ],
    following: [
      {
        _id: "37f2383f-8b8a-44c9-b02d-982ce37aa",
        name: "Faheem Khan",
        username: "faheemk237",
        avatar:
          "https://res.cloudinary.com/anujy0510/image/upload/v1652872171/pexels-photo-1516680_xtfewh.jpg",
      },
    ],
    avatar:
      "https://res.cloudinary.com/anujy0510/image/upload/v1652872171/pexels-photo-1516680_xtfewh.jpg",
    cover:
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1687206197/default_zv9ivw.jpg",
    bio: "Add the bio",
    location: "Add the location",
    website: "https://www.google.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "44c9-b02d-37f2383f-8b8a-bshghsgds",
    name: "Divya Saxena",
    username: "divya19",
    password: "divya",
    followers: [],
    following: [],
    avatar:
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1686878380/samples/people/boy-snow-hoodie.jpg",
    cover:
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1687206197/default_zv9ivw.jpg",
    bio: "Add the bio",
    location: "Add the location",
    website: "https://www.google.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "054c1f2b-dcf8-439b-86e7-820d4ac416fc",
    name: "Adarsh Balak",
    username: "adarshbalak",
    password: "adarshBalaki123",
    followers: [],
    following: [],
    bio: "Aspring FullStack Developer",
    website: "https://adarshbalak.netlify.app",
    avatar:
      "https://res.cloudinary.com/anujy0510/image/upload/v1652788469/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513_ac8h4f.jpg",
    cover:
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1687206197/default_zv9ivw.jpg",
    location: "Add the location",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "054c1f2b-dcf8-44ui44-5555-820d4afc",
    name: "Anuj Kumar",
    username: "anujkumar",
    password: "anujy05",
    followers: [],
    following: [],
    bio: "Aspring FrontEnd Developer",
    website: "https://anujkumar.netlify.app/",
    avatar:
      "https://res.cloudinary.com/anujy0510/image/upload/v1652788722/Profile-pic_tuz4io.png",
    cover:
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1687206197/default_zv9ivw.jpg",
    location: "Add the location",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "58sfd1dfd8f-dcf8-44ui44-5555-820d4afc",
    name: "Hrishi Bar",
    username: "hrishi11",
    password: "hrishi112",
    followers: [],
    following: [],
    bio: "Something",
    website: "https://hrishib.netlify.app/",
    avatar:
      "https://res.cloudinary.com/anujy0510/image/upload/v1653386642/151260930_420560685681454_256005377522807930_n.jpg_s4tt5l.jpg",
    cover:
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1687206197/default_zv9ivw.jpg",
    location: "Add the location",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "478kiout-dcf8-541bghv-7777-820d4afc",
    name: "Rohan Bond",
    username: "rohanB",
    password: "rohanBB",
    followers: [],
    following: [],
    bio: "I am open to marry please DM me",
    website: "https://rohanspage.netlify.app/",
    avatar:
      "https://res.cloudinary.com/anujy0510/image/upload/v1653386885/125404086_664416567582674_1469284624591573101_n.jpg_g0nqyn.jpg",
    cover:
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1687206197/default_zv9ivw.jpg",
    location: "Add the location",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "58s74jhdfd8f-dcf8-44ui44-5555-828jhyuafc",
    name: "John Doe",
    username: "johndoe",
    password: "john05",
    followers: [],
    following: [],
    bio: "Something",
    website: "https://johndoe.netlify.app/",
    avatar:
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1687240659/604107_hagbnz.jpg",
    cover:
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1687206197/default_zv9ivw.jpg",
    location: "Add the location",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
