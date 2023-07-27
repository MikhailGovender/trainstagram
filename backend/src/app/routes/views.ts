import path = require("path");
import express from "express";

export const viewRoutes = express.Router();

viewRoutes.get('/', (req, res) => {
      res.sendFile("index.html", { root: "./frontend/src/" });
});

viewRoutes.get('/login', (req, res) => {
  res.sendFile("login.html", { root: "./frontend/src/" });
});

viewRoutes.get('/register', (req, res) => {
  res.sendFile("register.html", { root: "./frontend/src/" });
});

viewRoutes.get('/post-picture', (req, res) => {
  res.sendFile("post-picture.html", { root: "./frontend/src/" });
});

viewRoutes.get('/profile', (req, res) => {
  res.sendFile("profile.html", { root: "./frontend/src/" });
});