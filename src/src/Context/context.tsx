import { createContext, useState, ReactNode } from "react";

interface DataContextType {
    flag: number;
    setFlag: React.Dispatch<React.SetStateAction<number>>;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    isFilpped: boolean;
    setIsFilpped: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({children} : { children: ReactNode }) => {
    
    const [flag, setFlag] = useState(0);
    const [count, setCount] = useState(0);
    const [isFilpped, setIsFilpped]  = useState(false);

    return (
        <DataContext.Provider value={{flag, setFlag, count, setCount, isFilpped, setIsFilpped}}>   
            {children}
        </DataContext.Provider>
    )
}