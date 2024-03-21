import {Route, Routes} from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes.jsx";
import PrivateRoutes from "./routes/PrivateRoutes.jsx";
import Layout from "./layouts/Layout.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

function App() {
  return (
    <Layout>
        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />}  />
                <Route path="/register" element={<RegisterPage />} />
            </Route>
            <Route element={<PrivateRoutes />}>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/profile/:username" element={<h1>Profile</h1>} />
                <Route path="/post/:postId" element={<h1>Post</h1>} />
                <Route path="/post/:postId/edit" element={<h1>Edit Post</h1>} />
                <Route path="/explore" element={<h1>Explore</h1>} />
            </Route>
        </Routes>
    </Layout>
  )
}

export default App
