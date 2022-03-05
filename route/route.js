import express from 'express';

import { createPost, getAllPosts } from '../controller/post-controller.js';

const router=express.Router();

router.post('/create',createPost);

router.get('/posts',getAllPosts);



export default router;