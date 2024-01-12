import React, { Children, createContext, useContext } from "react";

const MenuContext = createContext(null);

export const MenuList = ({ children }) => {
  return (
    <MenuContext.Provider value={{ theme: "dark" }}>
      <ul>{children}</ul>
    </MenuContext.Provider>
  );
};
export const MenuItem = () => {
  const { theme } = useContext(MenuContext);
  console.log(theme);
  return (
    <div className="bg-blue-950 text-white flex p-3 gap-4">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </div>
  );
};
