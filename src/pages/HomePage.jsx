import Container from "@mui/material/Container";
import PostCard from "../components/PostCard.jsx";

function HomePage() {
    return (
        <Container maxWidth={"md"}>
            {
                [0,1,2,3].map((item) => (
                    <PostCard key={item} />
                ))
            }
        </Container>
    );
}

export default HomePage;
