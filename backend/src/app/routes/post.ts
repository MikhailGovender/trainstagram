import { Router } from "express";
import { postMedia, getMedia, getAllMedia} from "../service/postService";
import { RetrieveFile } from "../service/fileMiddlewareService";

export const postRoutes = Router();

postRoutes.route('/post').post(RetrieveFile, postMedia);

//Name to be change. Get all post except user? Or do want to add user posts to feed?
postRoutes.route('/post-feed').get(getAllMedia);

//Name to be change and moved. Belongs under user routes? View all
postRoutes.route('/user/post').get(getAllMedia);

//Name to be change and moved. Belongs under user routes? View specific
postRoutes.route('/user/post/:id').get(getMedia);


