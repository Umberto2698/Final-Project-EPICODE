import { bottom } from "@popperjs/core";

const SignUp = () => {
  return (
    <main style={{ height: "100vh", paddingBottom: "0" }}>
      <div className="grid text-center h-100">
        <div className="g-col-12 g-col-md-6 sign-up-decoration d-flex align-items-center justify-content-center ">
          <div className="position-relative text-black z-1 px-2">
            <div className="droplet"></div>
            <div className="position-relative pt-md-5 pb-5 mb-5">
              <h3 className="fw-bold custom-fs-1 mb-2 ">Donate Blood</h3>
              <p className="fs-3">A drop for you, an ocean for someone else.</p>
            </div>
            <img src="./assets/Sign-up2.png" alt="" />
          </div>
        </div>
        <div className="g-col-12 g-col-md-6 d-flex align-items-center justify-content-center">
          <div className="text-black">
            <h2 className="fw-bold custom-fs-1 mb-3">Sign Up</h2>
            <p className="fs-3">Create Account</p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default SignUp;
