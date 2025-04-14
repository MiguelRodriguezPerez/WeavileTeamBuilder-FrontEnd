import '../../../../../styles/selectedMemberMenu/elementGrids/elementGridHeader.css'

export const MoveDataGridHeader = () => {
  
    return (
        <header className="element-grid-header">
            <h3>Moves</h3>
            <button className='delete-button'>
                <span>Delete Pokemon</span>
                <img src="images/main/elementGrid/deletePokemon.png" alt="" />
            </button>     
        </header>
    );
}