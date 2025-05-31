export type AvailableEvsNumberType = {
    remainingEvs: number,
    setRemainingEvs:React.Dispatch<React.SetStateAction<number>>,
    validateEvsInput: (oldValue:number, newValue: number) => boolean
    updateRemainingEvs: (oldValue: number, newValue: number) => void
}