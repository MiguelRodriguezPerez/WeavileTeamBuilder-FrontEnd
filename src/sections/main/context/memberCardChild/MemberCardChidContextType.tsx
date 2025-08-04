import { MemberCardChildEnum } from "./MemberCardChildEnum"

export type MemberCardChildContextType = {

    selectedChildEnum: MemberCardChildEnum | null,
    setSelectedChildEnum: React.Dispatch<React.SetStateAction<MemberCardChildEnum | null>>

}