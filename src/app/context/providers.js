"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { useSession } from "next-auth/react";

const connectedUserContext = createContext();

export function ConnectedUserProvider({ children }) {
  const status = useSession();
  const [userConnected, setUserConnected] = useState(useSession());

  return (
    <connectedUserContext.Provider value={{ userConnected }}>
      {children}
    </connectedUserContext.Provider>
  );
}

// Custom hook to consume the context
export function useConnectedUser() {
  return useContext(connectedUserContext);
}
