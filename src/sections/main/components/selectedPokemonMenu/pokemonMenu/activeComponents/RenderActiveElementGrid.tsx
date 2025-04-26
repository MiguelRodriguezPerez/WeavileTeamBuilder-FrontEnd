import { useContext } from "react";
import { SelectedComponentContext } from "../../../../context/selectedMenuComponent/SelectedComponentContext";

export const RenderActiveElementGrid = () => {
    const componenteActivo = useContext(SelectedComponentContext)!.selectedComponent;
    return <>{componenteActivo}</>;
}