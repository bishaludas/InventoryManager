import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/AuthActions";
import PropTypes from "prop-types";

const Login = ({ user: { error }, loginUser }) => {
  const [alertStatue, setAlertStatue] = useState("hidden");
  const [beEmail, setBeEmail] = useState("");
  const [bePassword, setBePassword] = useState("");

  const onSubmitLogin = (e) => {
    e.preventDefault();
    if (beEmail === "" || bePassword === "") {
      setAlertStatue("visible");
      setTimeout(() => {
        setAlertStatue("hidden");
      }, 5000);

      return false;
    }
    const credentials = {
      email: beEmail,
      password: bePassword,
    };

    loginUser(credentials);
  };

  return (
    <Fragment>
      <div className="login-page card p-4" style={loginStyle}>
        <form action="!#" onSubmit={onSubmitLogin}>
          {/* Alert block */}

          {/* empty error */}
          <div
            className=" btn red lighten-1 white-text mb-2"
            style={{
              visibility: alertStatue,
              display: "block",
            }}
          >
            {alertStatue === "visible" ? "Email or password is incorrect." : ""}
          </div>

          {/* invalid error */}
          <div
            className={`btn red lighten-1 white-text ${
              error === null ? "p-0" : ""
            }`}
          >
            {error !== null ? error : ""}
          </div>

          <div className="row">
            <div className="input-field col s12 mb-4">
              <input
                placeholder="Someone@example.com"
                id="email"
                type="email"
                className="validate"
                autoComplete="off"
                name="email"
                onChange={(e) => setBeEmail(e.target.value)}
              />
              <label htmlFor="email" className="active">
                Email
              </label>
            </div>

            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                className="validate"
                placeholder=""
                onChange={(e) => setBePassword(e.target.value)}
              />
              <label htmlFor="password" className="active">
                Password
              </label>
            </div>

            <div className="input-field col s12">
              <a
                href="!#"
                className="waves-effect waves-light btn"
                onClick={onSubmitLogin}
                style={{ display: "block" }}
              >
                Submit
              </a>
            </div>
          </div>
        </form>

        {/* Forgot password */}
        <div>
          Forgot password ? <a href="!#">Click Here</a>
        </div>
      </div>
    </Fragment>
  );
};

const loginStyle = {
  width: "50%",
  textAlign: "center",
  margin: "0 auto",
  marginTop: "30px",
};

Login.propTypes = {
  user: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { loginUser })(Login);
