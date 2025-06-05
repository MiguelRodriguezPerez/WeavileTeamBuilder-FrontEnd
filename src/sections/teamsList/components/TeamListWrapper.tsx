import { TeamList } from "./TeamList";
import { TeamListHeading } from "./teamListHeading/TeamListHeading";

export const TeamListWrapper = () => {

    return (
        <section>
            <TeamListHeading />
            <TeamList />
        </section>
    );
}