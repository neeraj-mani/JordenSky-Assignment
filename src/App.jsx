import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Home";
import TablePage from "./pages/Table";
import GraphPage from "./pages/Graph";

function App() {
  const router = createBrowserRouter([
    {
      index: true,
      element: <Homepage />,
    },
    {
      path: "/table",
      element: <TablePage />,
    },
    {
      path: "/graph",
      element: <GraphPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
