import { createContext } from "react";

import UserStore from "stores/userStore";

const StoresContext = createContext({
  userStore: new UserStore(),
});

export default StoresContext;
