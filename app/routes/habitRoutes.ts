import express from 'express';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  res.render('pages/dashboard.html', {message: 'Welcome to my life'});
});

router.get('/habits', (req: express.Request, res: express.Response) => {
  res.render('pages/habits.html');
});

router.get('/test', (req: express.Request, res: express.Response) => {
  res.render('partials/test.html');
})

export default router;