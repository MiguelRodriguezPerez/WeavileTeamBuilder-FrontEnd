import { getStatBarWidth } from "../../../../../helpers/memberIvsEvsNature"

export const BaseStatBar = ({ value } : { value: number }) => {

    return (
        <div style={{ width: `${getStatBarWidth(value)}%` }}
            className="stat-bar"></div>
    );
}