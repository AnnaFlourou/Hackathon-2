import * as express from 'express';

import UserController from './controllers/UserController';
import TeamController from './controllers/TeamController';
import ScoreController from './controllers/ScoreController';
import DayController from './controllers/DayController';
// import cat from './models/cat';
// import user from './models/user';

export default function routes(app) {

  const router = express.Router();

  const user = new UserController();
  const team = new TeamController();
  const score = new ScoreController();
  const day = new DayController();

  // day
  router.route('/days').get(day.getAll);
  router.route('/days/count').get(day.count);
  router.route('/day').post(day.insert);
  router.route('/day/:id').get(day.get);
  router.route('/day/:id').put(day.update);
  router.route('/day/:id').delete(day.delete);

  // score
  router.route('/scores').get(score.getAll);
  router.route('/scores/count').get(score.count);
  router.route('/score').post(score.insert);
  router.route('/score/:id').get(score.get);
  router.route('/score/:id').put(score.update);
  router.route('/score/:id').delete(score.delete);

  // teams
  router.route('/teams').get(team.getAll);
  router.route('/teams/count').get(team.count);
  router.route('/team').post(team.insert);
  router.route('/team/:id').get(team.get);
  router.route('/team/:id').put(team.update);
  router.route('/team/:id').delete(team.delete);

  // users
  router.route('/login').post(user.login);
  router.route('/users').get(user.getAll);
  router.route('/users/count').get(user.count);
  router.route('/user').post(user.insert);
  router.route('/user/:id').get(user.get);
  router.route('/user/:id').put(user.update);
  router.route('/user/:id').delete(user.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
