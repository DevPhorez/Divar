import Home from "./Page/Home/Home";
import Support from './Page/Support/Support';
import PostDetail from './Page/Post Detail/PostDetail';

const routes = [
    { path: '/', element: <Home /> },
    { path: '/v/:Title/:UUID', element: <PostDetail /> },
    { path: '/support', element: <Support /> },
]

export default routes