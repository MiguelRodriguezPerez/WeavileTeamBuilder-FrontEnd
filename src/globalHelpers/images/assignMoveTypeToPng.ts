import { MoveType } from "../domain/enums"

export const assignMoveTypeToPng = (moveType: MoveType): string => {
    return `images/main/moveTypeIcons/${moveType.toLowerCase()}.png`;
}