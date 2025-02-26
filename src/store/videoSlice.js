import { createSlice } from '@reduxjs/toolkit'; // Importation de createSlice depuis Redux Toolkit
import { videos as initialVideos, playlists as initialPlaylists } from '../data/videos'; // Importation des vidéos et playlists initiales

// Création du slice Redux pour les vidéos
const videoSlice = createSlice({
  name: 'videos', // Nom du slice
  initialState: {
    videos: initialVideos, // État initial des vidéos
    playlists: initialPlaylists, // État initial des playlists
  },
  reducers: {
    // Réducteur pour ajouter une vidéo
    addVideo: (state, action) => {
      state.videos.push({ ...action.payload, id: (state.videos.length + 1).toString() });
    },
    // Réducteur pour mettre à jour une vidéo
    updateVideo: (state, action) => {
      const index = state.videos.findIndex(v => v.id === action.payload.id);
      if (index >= 0) state.videos[index] = action.payload;
    },
    // Réducteur pour aimer une vidéo
    likeVideo: (state, action) => {
      const video = state.videos.find(v => v.id === action.payload.id);
      if (video) {
        video.likes += 1;
        const likedPlaylist = state.playlists.find(p => p.name === "Liked Videos");
        if (!likedPlaylist.videos.find(v => v.id === video.id)) {
          likedPlaylist.videos.push(video);
          likedPlaylist.videoCount = likedPlaylist.videos.length;
          likedPlaylist.thumbnail = likedPlaylist.videos.length > 0 ? likedPlaylist.videos[0].thumbnail : "";
        }
      }
    },
    // Réducteur pour ne plus aimer une vidéo
    unlikeVideo: (state, action) => {
      const video = state.videos.find(v => v.id === action.payload.id);
      if (video) {
        video.likes -= 1;
        const likedPlaylist = state.playlists.find(p => p.name === "Liked Videos");
        likedPlaylist.videos = likedPlaylist.videos.filter(v => v.id !== video.id);
        likedPlaylist.videoCount = likedPlaylist.videos.length;
        likedPlaylist.thumbnail = likedPlaylist.videos.length > 0 ? likedPlaylist.videos[0].thumbnail : "";
      }
    }
  }
});

// Exportation des actions et du réducteur
export const { addVideo, updateVideo, likeVideo, unlikeVideo } = videoSlice.actions;
export default videoSlice.reducer;
