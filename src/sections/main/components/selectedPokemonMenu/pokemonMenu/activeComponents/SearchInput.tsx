import { useEffect, useState } from "react";

import missignoStyles from  '../../../../styles/missignoMenu/missignoMenu.module.css';

export const SearchInput = (
    { propSearch, setPropSearch } 
    : 
    { propSearch: string, setPropSearch: React.Dispatch<React.SetStateAction<string>> }) => {
  
    const [ searchText, setSearchText ] = useState<string>('');

    useEffect(() => setSearchText(propSearch), [propSearch]);

    const eventWrapper = (newInput: string): void => {
        setSearchText(newInput);
        setPropSearch(newInput);
    }

    return (
        <input 
            type="text"
            value={ searchText }
            onChange={ (e) => eventWrapper( e.target.value ) } 
            className={ missignoStyles['missigno-header-input'] } 
        />
    );
}