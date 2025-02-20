export const videos = [
  {
    id: 1,
    thumbnail: "https://img.youtube.com/vi/GkJ0mmj5xuU/maxresdefault.jpg",
    title: "Soutenance de Projet de Synthèse Développement Digital",
    channel: "SAID GAHI",
    channelAvatar: "/profile.png",
    views: "120K views",
    timestamp: "2 days ago",
    duration: "15:30",
    description: "Complete guide to React development in 2024. Learn hooks, components, and best practices.",
    videoUrl: "hhttps://img.youtube.com/vi/GkJ0mmj5xuU/maxresdefault.jpg",
    likes: 12300,
    dislikes: 150,
    comments: [
      { id: 1, user: "John Doe", text: "Great tutorial, very helpful!" },
      { id: 2, user: "Jane Smith", text: "Thanks for the detailed explanation." }
    ]
  },
  {
    id: 2,
    thumbnail: "https://img.youtube.com/vi/zjCszQLo9QI/maxresdefault.jpg",
    title: "Découvrir Docker",
    channel: "SAID GAHI",
    channelAvatar: "/profile.png",
    views: "85K views",
    timestamp: "5 days ago",
    duration: "12:45",
    description: "Essential web development tips and tricks for modern developers.",
    videoUrl: "https://youtu.be/zjCszQLo9QI?si=QntNBn5tj_fndbhD",
    likes: 8500,
    dislikes: 120,
    comments: [
      { id: 1, user: "Alice Johnson", text: "Loved the tips, very useful." },
      { id: 2, user: "Bob Brown", text: "Can you make a video on CSS?" }
    ]
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500&q=80",
    title: "Modern JavaScript Essentials",
    channel: "JS Guru",
    channelAvatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&q=80",
    views: "200K views",
    timestamp: "1 week ago",
    duration: "20:15",
    description: "Master modern JavaScript features and techniques.",
    videoUrl: "https://youtu.be/moRqo158NGc?si=DU0ggssmSh-8iSCD",
    likes: 20000,
    dislikes: 300,
    comments: [
      { id: 1, user: "Charlie Davis", text: "JavaScript is awesome!" },
      { id: 2, user: "Dana Lee", text: "Very informative, thanks!" }
    ]
  },
  {
    id: 4,
    thumbnail: "https://img.youtube.com/vi/e-K4zgvBLQI/maxresdefault.jpg",
    title: "Presentation ",
    channel: "SAID GAHI",
    channelAvatar: "/profile.png",
    views: "150K views",
    timestamp: "3 days ago",
    duration: "25:00",
    description: "Step-by-step guide to building a full-stack application.",
    videoUrl: "https://youtu.be/4x_Nwq1NZn0?si=IFilsFiXNk8l1TY0",
    likes: 15000,
    dislikes: 200,
    comments: [
      { id: 1, user: "Eve White", text: "Full-stack development is the future." },
      { id: 2, user: "Frank Green", text: "Great step-by-step guide." }
    ]
  },
  {
    id: 5,
    thumbnail: "https://img.youtube.com/vi/IR4JFqEzwqw/0.jpg",
    title: "Cycle de préparation WorldSkills Lyon 2024",
    channel: "SAID GAHI",
    channelAvatar: "/profile.png",
    views: "75K views",
    timestamp: "1 day ago",
    duration: "18:20",
    description: "Deep dive into advanced TypeScript concepts and patterns.",
    videoUrl: "https://youtu.be/EcCTIExsqmI?si=3QzU3VfKOktlwOsI",
    likes: 7500,
    dislikes: 100,
    comments: [
      { id: 1, user: "Grace Black", text: "TypeScript is a game changer." },
      { id: 2, user: "Hank Blue", text: "Thanks for the advanced concepts." }
    ]
  },
  {
    id: 6,
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80",
    title: "CSS Grid Masterclass",
    channel: "Web Design Pro",
    channelAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    views: "95K views",
    timestamp: "4 days ago",
    duration: "22:15",
    description: "Master CSS Grid layout with practical examples.",
    videoUrl: "https://youtu.be/HGTJBPNC-Gw?si=v40q-Me9FDlzNjHg",
    likes: 9500,
    dislikes: 150,
    comments: [
      { id: 1, user: "Ivy Red", text: "CSS Grid is so powerful!" },
      { id: 2, user: "Jack Yellow", text: "Loved the practical examples." }
    ]
  },{
    id: 6,
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80",
    title: "CSS Grid Masterclass",
    channel: "Web Design Pro",
    channelAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    views: "95K views",
    timestamp: "4 days ago",
    duration: "22:15",
    description: "Master CSS Grid layout with practical examples.",
    videoUrl: "https://youtu.be/HGTJBPNC-Gw?si=v40q-Me9FDlzNjHg",
    likes: 9500,
    dislikes: 150,
    comments: [
      { id: 1, user: "Ivy Red", text: "CSS Grid is so powerful!" },
      { id: 2, user: "Jack Yellow", text: "Loved the practical examples." }
    ]
  }
];


export const playlists = [
  {
    id: 1,
    name: "Web Development",
    videos: [videos[0], videos[4]],
    thumbnail: videos[1].thumbnail,
    videoCount: 2,
    description: "Essential React tutorials for modern web development"
  },
  {
    id: 2,
    name: "Cloud Computing",
    videos: [videos[1], videos[2], videos[5]],
    thumbnail: videos[1].thumbnail,
    videoCount: 3,
    description: "Complete web development guide from basics to advanced"
  },
  {
    id: 3,
    name: "Programming Tips",
    videos: [videos[2], videos[2], videos[6]],
    thumbnail: videos[2].thumbnail,
    videoCount: 3,
    description: "Helpful programming tips and best practices"
  }
];