import { FaUserEdit } from "react-icons/fa";
import { GiSatelliteCommunication } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { FaBell, FaSave } from "react-icons/fa";
import person from './Assets/person.jpg';
import post from './Assets/15410.jpg';

export const features = [
  { icon: GiSatelliteCommunication, title: "Communication", description: "Ask AAU connects students for knowledge sharing and support. Discuss course content, campus life, and more to find reliable information quickly." },
  { icon: FaUserEdit, title: "Easy to use", description: "Ask AAU provides an intuitive and user-friendly interface, making navigation simple. Easily search for information and engage in seamless discussions with fellow students." },
  { icon: MdOutlineSecurity, title: "Security", description: "Ask AAU prioritizes your security with robust measures to protect data and ensure a safe browsing experience, allowing confident engagement." }
];

export const navItems = [
  { icon: FaBell, label: "Home" },
  { icon: MdOutlineExplore, label: "Explore" },
  { icon: FaSave, label: "Favorites" },
  { icon: FaBell, label: "Notification" },
  { icon: IoPerson, label: "Profile" }
];

export const posts = [
  {
    personImage: person,
    postImage: post,
    author: "Mohammed Ali",
    date:"2024/11/7",
    time:"2 hour ago",
    subject:"Transfer",
    content: "This is a sample post content. It can contain text, images, links, etc.",
    comments: 12,
    likes: 54
  },
  {
    personImage: person,
    postImage: post,
    author: "Mohammed Ali",
    date:"2023/4/5",
    time:"5 hour ago",
    subject:"Transfer",
    content: "This is a sample post content. It can contain text, images, links, etc.",
    comments: 12,
    likes: 54
  }
  // Add more posts as needed
];

export const mostActiveUsers = [
  {
    name: "Mohammed Ali",
    role: "Software engineer",
    image: person
  }
  // Add more users as needed
];

export const aboutLinks = [
  "About",
  "API",
  "Help",
  "Feedback",
  "Multividas",
  "Contact",
  "Terms",
  "Logout"
];



export const profileInfo = {
  name: "Mohammed Ali",
  role: "Software Engineer",
  image: person,
  education: [
    {
      faculty: "Faculty of Computer Science and Informatics",
      specialization: "Software Engineer",
      date: "2000/5/17",
      age: 24
    },

    {
      faculty: "Faculty of Computer Science and Informatics",
      specialization: "Software Engineer",
      date: "2000/5/17",
      age: 24
    },

    {
      faculty: "Faculty of Computer Science and Informatics",
      specialization: "Software Engineer",
      date: "2000/5/17",
      age: 24
    },
    // Add more education details as needed
  ]
};

export const statistics = [
  { icon: 'FcLike', label: 'Likes', count: 54, color: '' },
  { icon: 'FaComment', label: 'Comments', count: 26, color: 'text-blue-500' },
  { icon: 'MdOutlineLocalPostOffice', label: 'Posts', count: 33, color: 'text-green-500' },
  { icon: 'FaSave', label: 'Favorites', count: 24, color: 'text-yellow-500' }
];



export const latestPosts = [
  {
    title: "Transfer",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quidem mollitia voluptatibus id, nostrum molestiae!",
    likes: 23,
    comments: 14
  },
  {
    title: "Doctors",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quidem mollitia voluptatibus id, nostrum molestiae!",
    likes: 12,
    comments: 46
  },
  {
    title: "Study",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quidem mollitia voluptatibus id, nostrum molestiae!",
    likes: 12,
    comments: 54
  }
];


export const numbersData = [
  { value: 1400, label: "Questions", icon: "CiCircleQuestion" },
  { value: 900, label: "Answers", icon: "FaRegComment" },
  { value: 1600, label: "Members", icon: "IoPersonOutline" },
  { value: "+", label: "Create User", icon: "TbBrandAuth0" }
];



export const data = [
  {
    name: 'Ministry Wikipedia',
    date: '12 Oct 2021',
   
    amount: '5300',
  
 
  },
  {
    name: 'ERROR Shop',
    date: '12 Oct 2021',
   
    amount: '1500',
   
  
  },
  {
    name: 'Bouba App',
    date: '05 Sep 2021',
    
    amount: '800',
    
    
  },
  {
    name: 'Mahmoud Website',
    date: '22 May 2021',
   
    amount: '600',
    
    
  },
  {
    name: 'Sayed Website',
    date: '24 May 2021',
   
    amount: '300',
    
    
  },
  {
    name: 'Arena Application',
    date: '01 Mar 2021',
  
    amount: '2600',
  
   
  },
];



export const newStudentsData = [
  {
    id: 1,
    name: 'John Doe',
    description: 'Lorem ipsum dolor sit amet',
    image: person,
  },
  {
    id: 2,
    name: 'Jane Smith',
    description: 'Lorem ipsum dolor sit amet',
    image: person,
  },
  {
    id: 3,
    name: 'Michael Johnson',
    description: 'Lorem ipsum dolor sit amet',
    image: person,
  },
  {
    id: 4,
    name: 'Emily Brown',
    description: 'Lorem ipsum dolor sit amet',
    image: person,
  },
  {
    id: 5,
    name: 'David Wilson',
    description: 'Lorem ipsum dolor sit amet',
    image: person,
  },
  {
    id: 6,
    name: 'David Ali',
    description: 'Lorem ipsum dolor sit amet',
    image: person,
  },
];


// Example structure for data
export const Questions = [
  { name: 'Project 1', date: '2024-07-20', questions: 5 },
  { name: 'Project 2', date: '2024-07-21', questions: 3 },
  // Add more data as needed
];
