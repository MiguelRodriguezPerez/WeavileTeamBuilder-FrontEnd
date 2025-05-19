import { ReactNode, useEffect, useState } from "react";
import { ElementHeader } from "./ElementHeader";
import { AbilityGrid, ItemGrid, MoveGrid } from "./elementGrids";
import { MemberTypeSummary } from "./memberTypeSummary/MemberTypeSummary";
import { MemberIvsEvsNature } from "./ivsEvsNatureMenu";

/* NOTA: Por la razón que sea, si al estado le pasas  setActiveComponents(TypeCoverageTable)
en vez de setActiveComponents(<TypeCoverageTable/>) dara el error de que estas llamando a un hook
fuera del comienzo de la declaración de un componente */

export const SelectedElementWrapper = ({ elementType }: { elementType: string }) => {

    const [activeComponents, setActiveComponents] = useState<ReactNode>(
        <>
            <ElementHeader elementName="Moves" />
            <MoveGrid />
        </>
    );

    useEffect(() => {
        /* Si por la razón que sea lo mandas sin que todas sean minúsculas
        no dará error */
        elementType = elementType.toLowerCase();

        switch (true) {
            case (elementType === 'move'):
                setActiveComponents(
                    <>
                        <ElementHeader elementName="Moves" />
                        <MoveGrid />
                    </>
                )
                break;
            case (elementType === 'item'):
                setActiveComponents(
                    <>
                        <ElementHeader elementName="Items" />
                        <ItemGrid />
                    </>
                )
                break;
            case (elementType === 'ability'):
                setActiveComponents(
                    <>
                        <ElementHeader elementName="Ability" />
                        <AbilityGrid />
                    </>
                )
                break;

            case (elementType === 'membertypecoverage'):
                setActiveComponents(<MemberTypeSummary />);
                break;

            case (elementType === 'memberivsevsnature'):
                setActiveComponents(<MemberIvsEvsNature />);
                break;

            default:
                console.error('SelectedElementWrapper error. Active component ' + elementType +
                    ' is not handled by SelectedElementWrapper switch'
                );
                break;
        }

    }, [elementType])

    return (
        <>
            {activeComponents}
        </>
    );
}