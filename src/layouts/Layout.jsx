import Navbar from "../components/Navbar.jsx";

// eslint-disable-next-line react/prop-types
function Layout({children}) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}

export default Layout;
