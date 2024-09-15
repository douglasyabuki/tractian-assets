import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { RootErrorBoundary } from "./layout/root-error-boundary/RootErrorBoundary";
import { RootLayout } from "./layout/root-layout/RootLayout";
import { HomePage } from "./pages/Home";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: RootLayout,
    errorElement: <RootErrorBoundary />,
    children: [
      {
        index: true,
        Component: HomePage
      }
    ]
  },
]);

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
