import { createContext } from "react"

export const GlobalContext = createContext(null)

const GlobalContextProvider = ({ children }) => {

    return (
    <GlobalContext.Provider>
        {children}
    </GlobalContext.Provider>
    )
}

export default GlobalContextProvider