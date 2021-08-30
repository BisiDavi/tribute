import Posts from "../../db/post";
import connectToDatabase from "../../db/database";

export default async function PostHandler(req, res) {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case "POST": {
      try {
        const createPost = await Posts.create(req.body);
        return res.status(201).json({
          success: true,
          result: createPost,
        });
      } catch (error) {
        return res
          .status(400)
          .json({ error, message: "an error occurred, unable to post" });
      }
    }
    case "GET": {
      try {
        const getPosts = await Posts.find();
        return res.stttus(201).json({
          success: true,
          result: getPosts,
        });
      } catch (error) {
        return res
          .status(400)
          .json({ error, message: "an error occurred, unable for fetch post" });
      }
    }
    default:
      return res.status(400).json({ message: "wrong request!" });
  }
}
