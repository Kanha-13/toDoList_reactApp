import todosController from '../controllers/todos'
import expressRouter from 'express-router'
const Router = expressRouter();

Router.route('/')
    .get(todosController)

export default Router;