import { createContext } from "react";
import { MemberCardChildContextType } from "./MemberCardChidContextType";

export const MemberCardChildContext = createContext<MemberCardChildContextType | null>(null);