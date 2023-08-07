import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { ROUTE } from './constants/Routes';
import HomePage from './pages/Home/Home.page'
import CreateChatPage from './pages/CreatChat/CreateChat.page'
import CreateChatroomPage from './pages/CreatChatroom/CreateChatroom.page'
import LoginPage from './pages/Login/Login.page'
import ChatBoxPage from './pages/ChatBox/ChatBox.page'

const browserRouter = (): ReturnType<typeof createBrowserRouter> =>
  createBrowserRouter([
          {
            path: ROUTE.ROOT,
            element: <HomePage />,
          },
          {
            path: ROUTE.CREATE_CHAT,
            element: <CreateChatPage />,
          },
          {
            path: ROUTE.CREATE_GROUP,
            element: <CreateChatroomPage />,
          },
          {
            path: ROUTE.LOGIN,
            element: <LoginPage />,
          },
          {
            path: `${ROUTE.CONVERSATION}/:id`,
            element: <ChatBoxPage />,
          },
  ]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={browserRouter()} />;
};

export default AppRouter;
