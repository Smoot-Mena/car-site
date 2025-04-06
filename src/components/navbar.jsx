import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<Link to={"/"}>{`Logo`.toLocaleUpperCase()}</Link>
			<Link to={"/cars"}>{`Cars`.toLocaleUpperCase()}</Link>
			<Link to={"/contact"}>{`Contact Us`.toLocaleUpperCase()}</Link>
		</nav>
	);
};

export default Navbar;