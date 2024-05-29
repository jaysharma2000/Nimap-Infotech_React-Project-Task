import { createContext, useState } from "react";

export const AppContext = createContext(null);

//Global Context
const AppProvider = (props) =>{

    const [search_movie, setSearch_movie] = useState("");
    const [content, setContent] = useState([]); 
    const [pageno, setPageno] = useState(1);
    const [totalResults, setTotalResults] = useState();
    const [activeItem, setActiveItem] = useState(null);

    let value = {
        search_movie, setSearch_movie,
        content, setContent,
        pageno, setPageno,
        totalResults, setTotalResults,
        activeItem, setActiveItem
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider;