import { ReactNode, useState } from "react"
import { MemberCardChildContext } from "./MemberCardChildContext";
import { MemberCardChildEnum } from "./MemberCardChildEnum";

export const MemberCardChildProvider = ({ children }: { children: ReactNode }) => {

    const [selectedChildEnum, setSelectedChildEnum] = useState<MemberCardChildEnum | null>(null);

    return (
        <MemberCardChildContext.Provider value={{
            selectedChildEnum: selectedChildEnum,
            setSelectedChildEnum: setSelectedChildEnum
        }}>
            {children}
        </MemberCardChildContext.Provider>
    )
}