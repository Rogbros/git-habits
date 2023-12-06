import express from 'express';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  res.render('index.twig', {message: 'Welcome to my life'});
});

export default router;