import express from "express";
import { blog } from "../../models/blog.js";

export async function create(req, res) {
  const newBlog = new blog(req.body);
  const saveBlog = await newBlog
    .save()
    .then((success) => {
      res.json(success);
      res.status(200);
    })
    .catch((error) => console.error(error));
  res.end();
}
export async function get(req, res) {
  await blog
    .find()
    .then((success) => {
      res.json(success);
      res.status(200);
    })
    .catch((error) => console.error(error));
  res.end();
}
