import React from "react"
import { Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

function NavbarComponent() {
  const navigate = useNavigate()
  // get token
  const token = localStorage.getItem("token")

  const handleLogout = () => {
    // clear token
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>

        {/* Logo Name */}
        <Navbar.Brand style={{ fontWeight: "bold", fontSize: "22px" }}>
          CRM System
        </Navbar.Brand>

        <div style={{ display: "flex", gap: "10px" }}>

          {/* Show Login & Signup only if not logged in */}
          {!token && (
            <>
              <Button
                variant="outline-light"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>

              <Button
                variant="primary"
                onClick={() => navigate("/register")}
              >
                Signup
              </Button>
            </>
          )}

          {/* Show Logout button if logged in */}
          {token && (
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          )}

        </div>

      </Container>
    </Navbar>
  )
}

export default NavbarComponent


