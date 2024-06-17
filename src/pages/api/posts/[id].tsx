import type { NextApiRequest, NextApiResponse } from "next";
import { posts } from "../posts";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const post = posts.find((p) => p.id === Number(id));

  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
};
