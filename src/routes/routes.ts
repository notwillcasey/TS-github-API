import express from 'express';
import controllers from '../controllers/repo-controllers';

const router = express.Router();

router.get('/repos', controllers.getRepos);

export default router;