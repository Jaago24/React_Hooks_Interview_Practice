import React from "react";
import { UserContext, AgeContext } from "./ContextApp";

export default function ContextD() {
  return (
    <React.Fragment>
      <UserContext.Consumer>
        {(user) => {
          return (
            <AgeContext.Consumer>
              {(age) => {
                return (
                  <div className="container">
                    <div className="input-group mt-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          USER
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        readOnly
                        value={user}
                      />
                    </div>
                    <div className="input-group mt-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Age
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        readOnly
                        value={age}
                      />
                    </div>
                  </div>
                );
              }}
            </AgeContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </React.Fragment>
  );
}
