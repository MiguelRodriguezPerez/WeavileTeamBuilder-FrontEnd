import { IvsNatureHeading } from "./header/IvsNatureHeading";
import { IvsNatureBody } from './body/IvsNatureBody';
import { IvsNatureFooter } from "./footer";
import { AvailableEvsNumberProvider } from "../../../../../context/ivsEvsNatureMenu";


export const MemberIvsEvsNature = () => {

    return (
        <section>
            <AvailableEvsNumberProvider>
                <IvsNatureHeading />
                <IvsNatureBody />
                <IvsNatureFooter/>
            </AvailableEvsNumberProvider>
        </section>
    );
}