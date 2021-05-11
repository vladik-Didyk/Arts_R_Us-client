// //code from yonatan bendahan Lecture- Nodejs #8
// import { createContext, useContext, useEffect, useState } from "react";
// import localforage from 'localforage';

// export const AuthContext = createContext({
//   isInitiallyLoaded: false,
//   token: '',
//   user: '',
//   updateUserContext: async (data) => { },
//   saveToken: async (data) => {  },
//   removeToken: async () => {  } 
// });

// const tokenKey = 'userToken'; 

// export const useAuth = () => {
//   return useContext(AuthContext);
// }

// const AuthProvider = (props) => {
//   const [isInitiallyLoaded, setIsInitiallyLoaded] = useState(false);
//   const [token, setToken] = useState();
//   const [user, setUser] = useState();
//   const saveToken = async (data) => {
//     setUser(data.user);
//     setToken(data.token);
//     await localforage.setItem(tokenKey, data);
//   }
//   const removeToken = async () => {
//     setToken();
//     setUser();
//     await localforage.removeItem(tokenKey);
//   }
//   const updateUserContext = async (userData) => {
//     setUser(userData);
//   }
//   useEffect(() => { 
//     localforage.getItem(tokenKey) 
//       .then(data => { 
//         if (data) { 
//           setToken(data.token); 
//           setUser(data.user);
//         }
//         setIsInitiallyLoaded(true);
//       });
//   }, []);  
//   return (
//     <AuthContext.Provider
//       value={{ token, user, isInitiallyLoaded, saveToken, removeToken, updateUserContext }} 
//     >
//       {props.children}
//     </AuthContext.Provider>
//   )
// }
// export default AuthProvider;