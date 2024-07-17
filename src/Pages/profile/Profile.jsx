import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider/AuthProvider";
// import { useHistory } from 'react-router-dom';

function Profile() {
  const { user, logout } = useAuth();
  console.log(user);
  //   const history = useHistory(); // Initialize useHistory
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/"); // Redirect to homepage after logout
  };

  return (
    <div>
      <h1>Profile</h1>
      {user ? (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
