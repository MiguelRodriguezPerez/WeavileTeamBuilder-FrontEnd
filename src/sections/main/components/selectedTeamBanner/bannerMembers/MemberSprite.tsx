export const MemberSprite = ({ sprite } : { sprite: string | undefined }) => {

    /* Para mostrar el sprite la debes convertir en una url temporal
    que pueda usar el atributo src de img */

    return (
        <div className='selected-pokemon-sprite'>
            <img src={ sprite ? `data:image/jpeg;base64,${sprite}` : "/images/main/missignoTeamBanner.png" } className='heading-pokemon-sprite' />
        </div>
    );
}