import { createContext } from "react";

import UserStore from "../hooks/stores/userStore";

const StoresContext = createContext({
  userStore: new UserStore(),
});

export default StoresContext;
