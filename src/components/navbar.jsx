import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<Link to={"/"}>{`Logo`.toLocaleUpperCase()}</Link>
			<Link to={"/cars"}>{`Cars`.toLocaleUpperCase()}</Link>
			<Link to={"/contact"}>{`Contact Us`.toLocaleUpperCase()}</Link>
			{/* <a href="/">{`Logo`.toLocaleUpperCase()} </a>
			<a href="/cars">{`Cars`.toLocaleUpperCase()} </a>
			<a href="/contact">{`Contact Us`.toLocaleUpperCase()}</a> */}
		</nav>
	);
};

export default Navbar;