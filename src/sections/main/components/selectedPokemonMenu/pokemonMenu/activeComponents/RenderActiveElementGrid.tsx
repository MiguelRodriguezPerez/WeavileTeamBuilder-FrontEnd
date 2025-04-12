import { useContext } from "react";
import { SelectedComponentContext } from "../../../../context/selectedMember/SelectedComponentContext";

export const RenderActiveElementGrid = () => {
    const componenteActivo = useContext(SelectedComponentContext)!.selectedComponent;
    return <>{componenteActivo}</>;
}