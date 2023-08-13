import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { ROUTE } from './constants/Routes';
import HomePage from './pages/Home/Home.page';
import CreateChatPage from './pages/CreatChat/CreateChat.page';
import CreateChatroomPage from './pages/CreatChatroom/CreateChatroom.page';
import LoginPage from './pages/Login/Login.page';
import ChatBoxPage from './pages/ChatBox/ChatBox.page';
import { useAppSelector } from './hooks/useAppSelector';

const browserRouter = (isUserLoggedIn: boolean, hasUserAnyConversation: boolean): ReturnType<typeof createBrowserRouter> =>
  createBrowserRouter(isUserLoggedIn ? [
    {
      path: ROUTE.ROOT,
      element: hasUserAnyConversation ? <HomePage/> : <CreateChatPage/>,
    },
    {
      path: '*',
      element: <HomePage/>,
    },
    {
      path: ROUTE.CREATE_CHAT,
      element: <CreateChatPage/>,
    },
    {
      path: ROUTE.CREATE_GROUP,
      element: <CreateChatroomPage/>,
    },
    {
      index: true,
      path: `${ROUTE.CONVERSATION}/:id`,
      element: <ChatBoxPage/>,
    },
  ] : [
    {
      path: ROUTE.LOGIN,
      element: <LoginPage/>,
    },
  ]);

const AppRouter: React.FC = () => {
  const { id } = useAppSelector(state => state.login);
  const { conversations } = useAppSelector(state => state.conversation);

  const hasUserAnyConversation = conversations.length > 0;

  return <RouterProvider router={browserRouter(!!id, hasUserAnyConversation)}/>;
};

export default AppRouter;
