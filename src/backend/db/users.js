// import { v4 as uuid } from "uuid";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "37f2383f-8b8a-44c9-b02d-982ce37aa",
    name: "Faheem Khan",
    username: "faheemk237",
    password: "faheem",
    followers: [
      {
        _id: "ce5ba45e-e8ea-4d62-9edc-61b7aac659e4",
        username: "itsmovies",
        name: "movies & tv shows",
      },
      {
        _id: "054c1f2b-dcf8-439b-86e7-820d4ac416fc",
        username: "feynman",
        name: "Richard Feynman",
      },
      {
        _id: "054c1f2b-dcf8-44ui44-5555-820d4afc",
        username: "elonmusk",
        name: "Elon Musk",
      },
      {
        _id: "58sfd1dfd8f-dcf8-44ui44-5555-820d4afc",
        username: "tanaypratap",
        name: "Tanay Pratap",
      },
    ],
    following: [
      {
        _id: "054c1f2b-dcf8-439b-86e7-820d4ac416fc",
        username: "feynman",
        name: "Richard Feynman",
      },
      {
        _id: "478kiout-dcf8-541bghv-7777-820d4afc",
        username: "osho",
        name: "Osho",
      },
    ],
    avatar:
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1686961152/IMG_20230131_114212_qkvum8.jpg",
    cover:
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1687813222/a_bcefs0.webp",
    bio: "A physics graduate learning to become a web developer.",
    location: "Noida, U.P",
    website: "https://faheemk.netlify.app/",
    createdAt: "2023-07-07T02:32:28+05:30",
    updatedAt: "2023-07-07T02:54:49+05:30",
    bookmarks: [],
    isVerified: true,
  },
  {
    _id: "ce5ba45e-e8ea-4d62-9edc-61b7aac659e4",
    name: "movies & tv shows",
    username: "itsmovies",
    password: "movies123",
    followers: [],
    following: [
      {
        _id: "054c1f2b-dcf8-439b-86e7-820d4ac416fc",
        username: "feynman",
        name: "Richard Feynman",
      },
      {
        _id: "37f2383f-8b8a-44c9-b02d-982ce37aa",
        username: "faheemk237",
        name: "Faheem Khan",
      },
      {
        _id: "054c1f2b-dcf8-44ui44-5555-820d4afc",
        username: "elonmusk",
        name: "Elon Musk",
      },
    ],
    avatar:
      "https://ik.imagekit.io/faheem/Social-media/users/Screenshot_2023-07-06_232109.png?updatedAt=1688665887992",
    cover:
      "https://ik.imagekit.io/faheem/Social-media/users/moviescover.jpg?updatedAt=1688666070746",
    bio: "follow me for more posts about all your favorite movies and tv shows! ✨",
    location: "Hogwarts",
    website: "",
    createdAt: "2010-11-13 19:18",
    updatedAt: "2023-07-07T02:50:06+05:30",
    bookmarks: [],
    isVerified: false,
  },
  {
    _id: "44c9-b02d-37f2383f-8b8a-bshghsgds",
    name: "Friedrich Nietzsche",
    username: "nietzsche",
    password: "friedrich",
    followers: [],
    following: [
      {
        _id: "054c1f2b-dcf8-439b-86e7-820d4ac416fc",
        username: "feynman",
        name: "Richard Feynman",
      },
      {
        _id: "054c1f2b-dcf8-44ui44-5555-820d4afc",
        username: "elonmusk",
        name: "Elon Musk",
      },
      {
        _id: "478kiout-dcf8-541bghv-7777-820d4afc",
        username: "osho",
        name: "Osho",
      },
    ],
    avatar:
      "https://ik.imagekit.io/faheem/Social-media/users/Screenshot_2023-07-06_223701.png?updatedAt=1688663299898",
    cover:
      "https://ik.imagekit.io/faheem/Social-media/users/fred.jpg?updatedAt=1688664380762",
    bio: "Philosopher | Writer | Poet ✍️",
    location: "Germany",
    website: "iep.utm.edu/nietzsch/",
    createdAt: "2015-12-13 19:18",
    updatedAt: "2023-07-07T02:49:42+05:30",
    bookmarks: [],
    isVerified: false,
  },
  {
    _id: "054c1f2b-dcf8-439b-86e7-820d4ac416fc",
    name: "Richard Feynman",
    username: "feynman",
    password: "richard123",
    followers: [
      {
        _id: "37f2383f-8b8a-44c9-b02d-982ce37aa",
        username: "faheemk237",
        name: "Faheem Khan",
      },
      {
        _id: "44c9-b02d-37f2383f-8b8a-bshghsgds",
        username: "nietzsche",
        name: "Friedrich Nietzsche",
      },
      {
        _id: "ce5ba45e-e8ea-4d62-9edc-61b7aac659e4",
        username: "itsmovies",
        name: "movies & tv shows",
      },
      {
        _id: "054c1f2b-dcf8-44ui44-5555-820d4afc",
        username: "elonmusk",
        name: "Elon Musk",
      },
      {
        _id: "58sfd1dfd8f-dcf8-44ui44-5555-820d4afc",
        username: "tanaypratap",
        name: "Tanay Pratap",
      },
    ],
    following: [
      {
        _id: "37f2383f-8b8a-44c9-b02d-982ce37aa",
        username: "faheemk237",
        name: "Faheem Khan",
      },
      {
        _id: "58sfd1dfd8f-dcf8-44ui44-5555-820d4afc",
        username: "tanaypratap",
        name: "Tanay Pratap",
      },
      {
        _id: "478kiout-dcf8-541bghv-7777-820d4afc",
        username: "osho",
        name: "Osho",
      },
    ],
    bio: "“Here I stand, atoms with consciousness, matter with curiosity.’’ ",
    website: "www.feynman.com/",
    avatar:
      "https://ik.imagekit.io/faheem/Social-media/users/feynapple.jpg?updatedAt=1688660786210",
    cover:
      "https://ik.imagekit.io/faheem/Social-media/users/feynmancover.jpg?updatedAt=1688660960771",
    location: "NY, USA",
    createdAt: "2021-02-13 19:18",
    updatedAt: "2023-07-07T02:54:59+05:30",
    bookmarks: [],
    isVerified: false,
  },
  {
    _id: "054c1f2b-dcf8-44ui44-5555-820d4afc",
    name: "Elon Musk",
    username: "elonmusk",
    password: "musk05",
    followers: [
      {
        _id: "44c9-b02d-37f2383f-8b8a-bshghsgds",
        username: "nietzsche",
        name: "Friedrich Nietzsche",
      },
      {
        _id: "ce5ba45e-e8ea-4d62-9edc-61b7aac659e4",
        username: "itsmovies",
        name: "movies & tv shows",
      },
      {
        _id: "58sfd1dfd8f-dcf8-44ui44-5555-820d4afc",
        username: "tanaypratap",
        name: "Tanay Pratap",
      },
    ],
    following: [
      {
        _id: "37f2383f-8b8a-44c9-b02d-982ce37aa",
        username: "faheemk237",
        name: "Faheem Khan",
      },
      {
        _id: "054c1f2b-dcf8-439b-86e7-820d4ac416fc",
        username: "feynman",
        name: "Richard Feynman",
      },
      {
        _id: "58sfd1dfd8f-dcf8-44ui44-5555-820d4afc",
        username: "tanaypratap",
        name: "Tanay Pratap",
      },
    ],
    bio: "",
    website: "www.tesla.com/elon-musk",
    avatar:
      "https://ik.imagekit.io/faheem/Social-media/users/Screenshot_2023-07-06_174620.png?updatedAt=1688645983837",
    cover:
      "https://ik.imagekit.io/faheem/Social-media/users/1500x500.jpg?updatedAt=1688646209666",
    location: "Texas, USA",
    createdAt: "2009-06-13 19:18",
    updatedAt: "2023-07-07T02:55:14+05:30",
    bookmarks: [],
    isVerified: true,
  },
  {
    _id: "58sfd1dfd8f-dcf8-44ui44-5555-820d4afc",
    name: "Tanay Pratap",
    username: "tanaypratap",
    password: "tanay112",
    followers: [
      {
        _id: "054c1f2b-dcf8-439b-86e7-820d4ac416fc",
        username: "feynman",
        name: "Richard Feynman",
      },
      {
        _id: "054c1f2b-dcf8-44ui44-5555-820d4afc",
        username: "elonmusk",
        name: "Elon Musk",
      },
    ],
    following: [
      {
        _id: "37f2383f-8b8a-44c9-b02d-982ce37aa",
        username: "faheemk237",
        name: "Faheem Khan",
      },
      {
        _id: "054c1f2b-dcf8-439b-86e7-820d4ac416fc",
        username: "feynman",
        name: "Richard Feynman",
      },
      {
        _id: "054c1f2b-dcf8-44ui44-5555-820d4afc",
        username: "elonmusk",
        name: "Elon Musk",
      },
    ],
    bio: "Founder @invactHQ| x @Microsoft| Fixing education | Tweets: Tech, Education, Career, and Startups.",
    website: "tanaypratap.com/",
    avatar:
      "https://ik.imagekit.io/faheem/Social-media/users/Screenshot_2023-07-06_183445.png?updatedAt=1688648776052",
    cover:
      "https://ik.imagekit.io/faheem/Social-media/users/tanaycover.jpg?updatedAt=1688653490259",
    location: "India",
    createdAt: "2009-06-13 19:18",
    updatedAt: "2023-07-07T03:00:14+05:30",
    bookmarks: [],
    isVerified: true,
  },
  {
    _id: "478kiout-dcf8-541bghv-sfd777-820d4afc",
    name: "Osho",
    username: "osho",
    password: "osho12",
    followers: [
      {
        _id: "37f2383f-8b8a-44c9-b02d-982ce37aa",
        username: "faheemk237",
        name: "Faheem Khan",
      },
      {
        _id: "44c9-b02d-37f2383f-8b8a-bshghsgds",
        username: "nietzsche",
        name: "Friedrich Nietzsche",
      },
      {
        _id: "054c1f2b-dcf8-439b-86e7-820d4ac416fc",
        username: "feynman",
        name: "Richard Feynman",
      },
    ],
    following: [],
    bio: "Welcome to the official Osho Twitter Page",
    website: "www.osho.com/",
    avatar:
      "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1687359513/Osho_1_b661fe4c-9b55-4806-982a-8f66084da194_k12aux.jpg",
    cover:
      "https://ik.imagekit.io/faheem/Social-media/users/osho.png?updatedAt=1688657990337",
    location: "",
    createdAt: "2009-03-13 19:18",
    updatedAt: "2023-07-07T02:49:47+05:30",
    bookmarks: [],
    isVerified: false,
  },
  {
    _id: "58s74jhdfd8f-dcf8-44ui44-sfd-828jhyuafc",
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
    createdAt: "2023-07-07T02:32:28+05:30",
    updatedAt: "2023-07-07T02:32:28+05:30",
    bookmarks: [],
    isVerified: false,
  },
];
