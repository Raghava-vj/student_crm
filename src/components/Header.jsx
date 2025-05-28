import React from "react";

function Header() {
    return (
        <header className="bg-primary text-white p-3 d-flex align-items-center justify-content-between">

                        <div className="d-flex align-items-center">
                            <h1>ABC School</h1>
                        </div>

                        {/* Middle: Search Bar */}
                        <form className="flex-grow-1 mx-4 d-flex" style={{ maxWidth: 400 }}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search..."
                            />
                            <button type="submit" className="btn btn-light ms-2">
                                Search
                            </button>
                        </form>

                        {/* Right: Nav Menu & Enroll Button */}
            <nav className="d-flex align-items-center">
                <a href="/" className="text-white mx-2 text-decoration-none">
                    Home
                </a>
                <a href="/about" className="text-white mx-2 text-decoration-none">
                    About
                </a>
                <button className="btn btn-light text-primary ms-3">Enroll</button>
            </nav>
        </header>
    );
}

export default Header;
