export const videos = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=500&q=80",
    title: "Learning React in 2024 - Complete Guide",
    channel: "Code Masters",
    channelAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80",
    views: "120K views",
    timestamp: "2 days ago",
    duration: "15:30",
    description: "Complete guide to React development in 2024. Learn hooks, components, and best practices.",
    videoUrl: "https://youtu.be/CgkZ7MvWUAA?si=xhbLrW4EDhQ0wbmW",
    likes: 12300,
    dislikes: 150
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80",
    title: "Web Development Tips & Tricks",
    channel: "Tech Insights",
    channelAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&q=80",
    views: "85K views",
    timestamp: "5 days ago",
    duration: "12:45",
    description: "Essential web development tips and tricks for modern developers.",
    videoUrl: "https://youtu.be/ShSNbXkxQS8?si=tpATXRU6aU4tiUx6",
    likes: 8500,
    dislikes: 120
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
    dislikes: 300
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80",
    title: "Building a Full-Stack App",
    channel: "Dev Journey",
    channelAvatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&q=80",
    views: "150K views",
    timestamp: "3 days ago",
    duration: "25:00",
    description: "Step-by-step guide to building a full-stack application.",
    videoUrl: "https://youtu.be/zut46AB8DHQ?si=AS1wMBtl6yePZFh8",
    likes: 15000,
    dislikes: 200
  },
  {
    id: 5,
    thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&q=80",
    title: "TypeScript Advanced Concepts",
    channel: "Code Masters",
    channelAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80",
    views: "75K views",
    timestamp: "1 day ago",
    duration: "18:20",
    description: "Deep dive into advanced TypeScript concepts and patterns.",
    videoUrl: "https://youtu.be/EcCTIExsqmI?si=3QzU3VfKOktlwOsI",
    likes: 7500,
    dislikes: 100
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
    dislikes: 150
  }
];

export const playlists = [
  {
    id: 1,
    name: "React Essentials",
    videos: [videos[0], videos[4]],
    thumbnail: videos[0].thumbnail,
    videoCount: 2,
    description: "Essential React tutorials for modern web development"
  },
  {
    id: 2,
    name: "Web Development",
    videos: [videos[1], videos[2], videos[5]],
    thumbnail: videos[1].thumbnail,
    videoCount: 3,
    description: "Complete web development guide from basics to advanced"
  },
  {
    id: 3,
    name: "Programming Tips",
    videos: [videos[2], videos[3], videos[4]],
    thumbnail: videos[2].thumbnail,
    videoCount: 3,
    description: "Helpful programming tips and best practices"
  }
];