import { Link, Outlet } from "react-router-dom";

const WelcomePage = () => {
  return (
    <section>
      <h1>Welcome!!!</h1>

      <div>
        <Link to="/welcome/new-user">New User</Link>
      </div>
      <div>
        {/* If we use the slash at the beginning of the route the route will be absolute
        otherwise 👇 without the slash it will be stacked  */}
        <Link to="to-outlet">Go to Outlet</Link>
      </div>

      <Outlet />
    </section>
  );
};

export default WelcomePage;
