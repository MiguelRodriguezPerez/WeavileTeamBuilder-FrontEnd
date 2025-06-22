import { useContext } from 'react';
import { SelectedComponentContext } from '.././../../../../context/selectedMenuComponent/SelectedComponentContext';

import styles from '../../../../../styles/selectedMemberMenu/memberCard/memberTypeCoverageIvsEvsNatureDiv.module.css';


export const MemberTypeCoverageIvsEvsNatureDiv = () => {

    const { changeElementType } = useContext(SelectedComponentContext)!

    return (
        <div className={ styles['member-ivs-evs-nature-type-coverage-div'] }>
            <button
                onClick={() => changeElementType('memberTypeCoverage')}
                className={`${ styles['member-type-coverage']} ${ styles['member-card-button']}`}
            >Type Coverage</button>

            <button onClick={ () => changeElementType('memberIvsEvsNature') }
                className={ `${ styles['member-ivs-evs-nature']} ${ styles['member-card-button']}` }>Ivs/Evs/Nature</button>
        </div>
    );
}