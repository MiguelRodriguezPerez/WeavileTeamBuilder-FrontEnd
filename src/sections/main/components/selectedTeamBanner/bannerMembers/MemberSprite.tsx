export const MemberSprite = ({ sprite } : { sprite: Blob}) => {

    /* Para mostrar el sprite la debes convertir en una url temporal
    que pueda usar el atributo src de img */

    return (
        <div className='selected-pokemon-sprite'>
            <img src={ sprite ? URL.createObjectURL(sprite) : "/images/main/missigno.png" } className='heading-pokemon-sprite' />
        </div>
    );
}