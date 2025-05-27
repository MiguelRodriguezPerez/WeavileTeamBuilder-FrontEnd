export type AvailableEvsNumberType = {
    remainingEvs: number,
    setRemainingEvs:React.Dispatch<React.SetStateAction<number>>,
    validateEvsInput: (newValue: number) => boolean
    updateRemainingEvs: (oldValue: number, newValue: number) => void
}