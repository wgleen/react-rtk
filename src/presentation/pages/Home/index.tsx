import { Link } from "react-router-dom";
import { ROUTES } from "../../Routes";

const Home = () => (
  <>
    <h1>Home</h1>

    <Link to={ROUTES.POSTS_LIST}>Go to Posts List</Link>
  </>
);

export default Home;
