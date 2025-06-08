import {createContext} from 'react';

const TareasContext = createContext();

const Proveedor = ({children}) => {

    let nombre = 'usuario';

    return (
        <TareasContext.Provider value={{nombre}}>
            {children}
        </TareasContext.Provider>
    );
}
export { TareasContext, Proveedor };