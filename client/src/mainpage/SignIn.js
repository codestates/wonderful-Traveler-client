import React from 'react';
import './SignIn.css';

function SignIn () {
  return (
    <div className="section">
      <div className="container">
        <div className="column">
          <div className="box">
            <form>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input className="input" type="email" name="email" required />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input className="input" type="password" name="password" required />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;