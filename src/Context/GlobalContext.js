import { createContext, useState } from "react";

const GlobalContext = createContext();

const PhloxProvider = ({ children }) => {
    const [postInfo, setPostInfo] = useState(null);

    const data = { postInfo, setPostInfo };

    return (
        <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
    );
};

export { PhloxProvider };
export default GlobalContext;
