import { createSlice } from "@reduxjs/toolkit"; // createSlice ini adalah fungsi yang digunakan untuk membuat reducer dan action secara otomatis

const initialState = {
  videoName: "Proses Registrasi Calon Asesi", // default value
  videoLink: "https://www.youtube.com/embed/OQxDMh-sO5o",
};

const videoSlice = createSlice({
  // buat reducer dan action secara otomatis dengan fungsi createSlice
  name: "video", // nama reducer
  initialState, // st ate awal (yang sudah didefinisikan diatas)

  // reducer (merupakan fungsi yang digunakan untuk mengubah state)
  reducers: {
    setVideoName: (state, action) => {
      state.videoName = action.payload;
    },
    setVideoLink: (state, action) => {
      state.videoLink = action.payload;
    },
  },
});

export const { setVideoName, setVideoLink } = videoSlice.actions; // export action yang sudah dibuat diatas agar bisa digunakan di komponen lain

export default videoSlice.reducer; // export reducer yang sudah dibuat diatas agar bisa digunakan di store.js
