import { useEffect, useMemo, useRef, useState } from "react";
import { ElementFilterProps } from "./elementFilterProps";

import missignoStyles from  '../../../../../styles/missignoMenu/missignoMenu.module.css';
import { elementInterface } from "./elementInterface";


export const ElementFilter = <T extends elementInterface>({ list, setter }: ElementFilterProps<T>) => {

    const [ elementList, setElementList ] = useState(list);
    const [ userInput, setUserInput ] = useState<string>('');

    useEffect(() => {
        setter(elementList.filter((element) => element.name.toLowerCase().includes(userInput.toLowerCase())));
    }, [userInput]);


    return (
        <input value={ userInput } type="text"
            onChange={ (e) => setUserInput( e.target.value ) } 
            className={missignoStyles['missigno-header-input']} />
    );
}