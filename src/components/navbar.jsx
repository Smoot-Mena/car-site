const Navbar = () => {
	return (
		<nav>
			<a href="/">{`Logo`.toLocaleUpperCase()} </a>
			<a href="/cars">{`Cars`.toLocaleUpperCase()} </a>
			<a href="/contact">{`Contact Us`.toLocaleUpperCase()}</a>
		</nav>
	);
};

export default Navbar;