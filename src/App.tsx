import { ConfigProvider } from "antd";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { ROUTES } from "./routes/routes";
import Footer from "./components/Footer";

const router = createBrowserRouter(ROUTES);

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFD300",
        },
      }}>
      <Header />
      <RouterProvider router={router}></RouterProvider>
      <Footer/>
    </ConfigProvider>
  );
}

export default App;
