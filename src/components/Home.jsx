import React from "react";
import { Button ,Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const { currentUser, signout } = useAuth();

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signout();
      alert("logged out");
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Container className="h-50 w-50 mt-4">
        <h3 className="m-4">Email:{currentUser.email}</h3>
        <Link className="m-4" to="/create">Add</Link>
        <Button className="m-4" onClick={handleLogout}>Logout</Button>
        <Link className="m-4" to="/profile">Update Profile</Link>
      </Container>
    </>
  );
}

export default Home;
