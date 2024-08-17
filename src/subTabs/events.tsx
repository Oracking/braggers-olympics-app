import {useState} from "react";
import {ExpandableSummary} from "../shared/expandableSummary";
import {getMetrics} from "../data/data_fetcher";

export const Events = () => {
    const [showEventDialog, setShowEventDialog] = useState(false);

    return (
        <>
            <ExpandableSummary parentSummaryDetails={getMetrics()["events_summary"]} />
            {/*<Box onClick={() => setShowEventDialog(!showEventDialog)}>Random Text</Box>*/}
            {/*<AddEventResultsDialog showDialog={showEventDialog} setShowDialog={setShowEventDialog} />*/}
        </>
    )
}