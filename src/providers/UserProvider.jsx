import React, { Component, createContext } from "react";

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: null,
  };

  render() {
    const { user } = this.state;

    return (
      <UserContext.Provider value={user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
