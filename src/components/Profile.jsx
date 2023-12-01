import { Container, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

const Profile = () => {
  const isLoadingProfile = useSelector((state) => state.profile.isLoadingProfile);

  return (
    <>
      {isLoadingProfile ? (
        <div className="d-flex justify-content-center w-100 align-items-center" style={{ height: "100vh" }}>
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Container></Container>
      )}
    </>
  );
};
export default Profile;
