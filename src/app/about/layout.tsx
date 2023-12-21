import Link from "next/link";

function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1 className="title">About us</h1>
            <ul className="categories">
                <li className="category">
                    <Link href="/about/contacts">Contacts</Link>
                </li>
                <li className="category">
                    <Link href="/about/team">Team</Link>
                </li>
            </ul>
            {children}
        </div>
    );
}

export default AboutLayout;
