import { createSlice } from '@reduxjs/toolkit';
import { videos as initialVideos } from '../data/videos';

const videoSlice = createSlice({
  name: 'videos',
  initialState: initialVideos,
  reducers: {
    addVideo: (state, action) => {
      state.push({ ...action.payload, id: (state.length + 1).toString() });
    },
    updateVideo: (state, action) => {
      const index = state.findIndex(v => v.id === action.payload.id);
      if (index >= 0) state[index] = action.payload;
    }
  }
});

export const { addVideo, updateVideo } = videoSlice.actions;
export default videoSlice.reducer;
