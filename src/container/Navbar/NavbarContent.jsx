import React from "react";
import Container from "../../components/container";

const navLinks = [
    { label: "About", slug: "about" },
    { label: "About", slug: "about" },
    { label: "Contact", slug: "contact" },
    { label: "About", slug: "about" },
]

export default function NavbarContent(props) {
    return (
        <header>
            <Container>
                <div className="flex justify-between items-center py-6">
                    <div>
                        <h1 className="text-green-100 text-2xl sm:text-3xl font-bold">Amche <span className="text-orange-500 font-mono">Samaj</span></h1>
                        <p className="text-xs font-semibold text-green-300 text-right">
                            Mestha
                        </p>
                    </div>
                    <div className="hidden sm:block">
                        <ul className="flex gap-10">
                            {navLinks?.map((item, i) => (
                                <li key={i} className="text-white text-lg">{item?.label}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="hidden sm:flex gap-3 items-center text-white text-lg ">
                        <button>Login</button>/
                        <button>Sign Up</button>
                    </div>
                </div>

            </Container>
        </header>
    );
}
