import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Aboutus from "./components/Aboutus"
import ListPosts from "./components/blog/ListPost"
import CreatePost from "./components/blog/CreatePost"
import ViewPost from "./components/blog/Viewpost"
import EditPost from "./components/blog/EditPost"
import Register from "./components/auth/register"
import Login from "./components/auth/Login"
import Search from "./components/blog/search"




const router = createBrowserRouter([
    { path: "", element: <App/>},
    { path: "aboutus", element: <Aboutus/>},
    { path: "blog/posts", element: <ListPosts/>},
    { path : 'blog/posts/create' , element : <CreatePost/> },
    { path: 'blog/posts/:postId', element: <ViewPost/>},
    { path : '/blog/posts/:postId/edit', element: <EditPost/>},
    { path: 'register', element:<Register/>},
    { path: 'login', element:<Login/>},
    { path: 'search', element:<Search />},
])

export default router;