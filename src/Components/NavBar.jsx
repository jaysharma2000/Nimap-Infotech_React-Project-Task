import React, { useContext, useState, useEffect, useCallback } from "react";
import { Container, Form, FormControl, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AppContext } from "./Context/StateContext";

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

const HeaderComponent = () => {
  const { search_movie, setSearch_movie, activeItem, setActiveItem } = useContext(AppContext);
  const [debouncedSearch, setDebouncedSearch] = useState(search_movie);

  const navData = [
    { name: "Popular", link: "/" },
    { name: "Top Rated", link: "/top-rated" },
    { name: "Upcoming", link: "/upcoming" },
  ];

  const handleSearchChange = (event) => {
    setDebouncedSearch(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch_movie(debouncedSearch);
  };

  const handleNavItemClick = (name) => {
    setActiveItem(name);
    setSearch_movie("");
  };

  const debouncedSetSearchMovie = useCallback(
    debounce((value) => setSearch_movie(value), 800),
    []
  );

  useEffect(() => {
    debouncedSetSearchMovie(debouncedSearch);
  }, [debouncedSearch, debouncedSetSearchMovie]);

  return (
    <header className="header">
      <Navbar bg="dark" expand="lg">
        <Container>
          <Link to="/" onClick={() => setSearch_movie("")} style={{ cursor: "pointer", textDecoration: "none" }}>
            <Navbar.Brand>MovieDb</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" style={{ border: "1px solid white" }} />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
              onClick={() => setSearch_movie("")}
            >
              {navData.map((item) => (
                <Nav key={item.name} onClick={() => handleNavItemClick(item.name)}>
                  <Link to={item.link} className={`nav-link ${activeItem === item.name ? 'active' : ''}`}>
                    {item.name}
                  </Link>
                </Nav>
              ))}
            </Nav>
            <Form className="d-flex w-40" autoComplete="off" onSubmit={handleSubmit}>
              <FormControl
                type="search"
                placeholder="Movie Name"
                className="me-2"
                aria-label="search"
                value={debouncedSearch}
                onChange={handleSearchChange}
              ></FormControl>
              <Button variant="secondary" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default HeaderComponent;





