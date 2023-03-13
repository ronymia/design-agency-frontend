import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes/Routes";


export default function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
