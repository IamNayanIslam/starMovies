import { useState } from "react";

const Navbar = ({ children }) => {
  return <nav className="nav-bar">{children}</nav>;
};

export const Logo = () => {
  return (
    <>
      <div className="logo">
        <span role="img">🌟</span>
        <h1>starMovies</h1>
      </div>
    </>
  );
};

export const Search = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
};

export const Numresult = ({ movies }) => {
  return (
    <>
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    </>
  );
};

export default Navbar;
