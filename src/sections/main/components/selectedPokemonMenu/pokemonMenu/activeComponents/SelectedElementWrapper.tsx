import { ReactNode, useEffect, useState } from "react";
import { ElementHeader } from "./ElementHeader";
import { AbilityGrid, ItemGrid, MoveGrid } from "./elementGrids";

export const SelectedElementWrapper = ({ elementType } : { elementType: string }) => {

    const [ activeComponents, setActiveComponents ] = useState<ReactNode>(
        <>
            <ElementHeader elementName="Moves"/>
            <MoveGrid/>
        </>
    );

    useEffect(() => {
        /* Si por la razón que sea lo mandas sin que todas sean minúsculas
        no dará error */
        elementType = elementType.toLowerCase();

        switch(true) {
            case (elementType === 'move') :
                setActiveComponents(
                    <>
                        <ElementHeader elementName="Moves"/>
                        <MoveGrid/>
                    </>
                )
                break;
            case (elementType === 'item') :
                setActiveComponents(
                    <>
                        <ElementHeader elementName="Items"/>
                        <ItemGrid/>
                    </>
                )
                break;
            case (elementType === 'ability') :
                setActiveComponents(
                    <>
                        <ElementHeader elementName="Ability"/>
                        <AbilityGrid/>
                    </>
                )
                break;
            }
    }, [elementType])
  
    return (
        <>
            { activeComponents }
        </>
    );
}