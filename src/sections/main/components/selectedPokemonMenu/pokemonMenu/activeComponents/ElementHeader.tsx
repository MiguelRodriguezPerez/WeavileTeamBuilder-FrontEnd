import styles from '../../../../styles/selectedMemberMenu/elementGrids/elementGridHeader.module.css'

export const ElementHeader = ({ elementName } : { elementName : string }) => {

    return (
        <header className={ styles['element-grid-header']}>
            <h3>{ elementName }</h3>
            {/* <button className='delete-button'>
                <span>Delete Pokemon</span>
                <img src="images/main/elementGrid/deletePokemon.png" alt="" />
            </button> */}
        </header>
    );
}