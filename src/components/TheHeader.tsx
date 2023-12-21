import { Navigation } from "./Navigation";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
];

const TheHeader = () => {
    return (
        <header className="container links">
            <div className="links">
                <Navigation navLinks={navItems} />
            </div>
        </header>
    );
};

export default TheHeader;
