import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import PostData from "../../Pages/PostData";
import DeleteData from "../../Pages/DeleteData";
import UpdeteData from "../../Pages/UpdeteData";
import DataGet from "../../Pages/DataGet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/postdata",
        element: <PostData></PostData>,
      },

      {
        path: "/deletedata",
        element: <DeleteData></DeleteData>,
      },

      {
        path: "/updatedata/:id",
        element: <UpdeteData></UpdeteData>,
        loader: ({params})=> fetch(`http://localhost:5000/todoapp/${params.id}`)
      },

      {
        path: "/getData",
        element: <DataGet></DataGet>,
      },
      
    ],
  },
]);

export default router;
