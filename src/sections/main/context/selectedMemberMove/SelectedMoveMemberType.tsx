import { Dispatch, SetStateAction } from "react";

export type SelectedMoveMemberType = {
    selectedMove: number,
    changeSelectedMove: Dispatch<SetStateAction<number>>;
}