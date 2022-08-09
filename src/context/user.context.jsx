import { useContext, useEffect, useState, createContext } from "react";

const UserWrapper = createContext();

const UserContext = ({ children }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  return <UserWrapper.Provider value={{}}>{children}</UserWrapper.Provider>;
};

const UserState = () => useContext(UserWrapper);

export { UserContext, UserState };
