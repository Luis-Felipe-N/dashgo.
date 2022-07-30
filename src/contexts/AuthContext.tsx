import { createContext, ReactNode, useContext, useState } from "react"

interface IUser {
    email: string;
    password: string;
}

interface ICredentials extends IUser {

}

interface IAuthProvider {
    children: ReactNode;
}

interface IAuthContext {
    singIn(credentials: ICredentials): void;
    user: IUser | undefined;
}



const AuthContext = createContext({  } as IAuthContext)

function AuthProvider({ children }: IAuthProvider) {
    const [ user, setUser ] = useState<IUser>()

    function singIn(credentials: ICredentials) {
        setUser(credentials)
    }
    return (
        <AuthContext.Provider value={{singIn, user}}>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const value = useContext(AuthContext)
}