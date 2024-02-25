import PropTypes from 'prop-types';
import { createContext, useState, useContext } from "react";
import { regis } from '/api/Auth';


export const AuthContext = createContext();

export const useAuth=()=>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAuth debe estar dentro del proveedor AuthContext');
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const sigup = async (user) => {
        try{
            const res = await regis(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        }catch(err){
            console.error(err);
        }
    };
    return <AuthContext.Provider value={{
        sigup,
        user,
        isAuthenticated,
    }}>{children }
    </AuthContext.Provider>
}




//no eliminar este bloque de código
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
