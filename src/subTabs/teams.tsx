import {ParentSummaryDetail} from "../shared/models";
import {ExpandableSummary} from "../shared/expandableSummary";
import {getMetrics} from "../data/data_fetcher";


export function Teams() {

    return (
        <ExpandableSummary parentSummaryDetails={getMetrics()["team_summary"]} />
    )
}