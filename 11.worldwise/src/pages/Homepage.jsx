import { Link } from "react-router-dom";
import PageNav from "../components/Pagenav";
import AppNav from "../components/AppNav";
function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>World Wise</h1>
      <Link to="/app">Go to the app</Link>
    </div>
  );
}

export default Homepage;
