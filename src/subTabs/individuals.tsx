import {ParentSummaryDetail} from "../shared/models";
import {ExpandableSummary} from "../shared/expandableSummary";
import {getMetrics} from "../data/data_fetcher";

export function Individuals() {

    return (
        <ExpandableSummary parentSummaryDetails={getMetrics()["individual_summary"]} />
    )
}