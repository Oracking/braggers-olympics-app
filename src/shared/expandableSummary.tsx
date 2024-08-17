import {useEffect, useState} from "react";
import {ParentSummaryDetail} from "./models";
import {sortSummaryDetails} from "./utilities";
import {Card} from "grommet";
import {ParentSummary} from "./parentSummary";

export interface ExpandableSummaryProps {
    parentSummaryDetails: ParentSummaryDetail[];
}


export const ExpandableSummary = (props: ExpandableSummaryProps) => {

    const [sortedParentSummaryDetails, setSortedParentSummaryDetails] = useState<ParentSummaryDetail[]>(sortSummaryDetails(props.parentSummaryDetails) as ParentSummaryDetail[]);

    useEffect(() => {
        setSortedParentSummaryDetails(sortSummaryDetails(props.parentSummaryDetails) as ParentSummaryDetail[]);
    }, [props.parentSummaryDetails]);

    return (
        <Card style={{margin: "30px"}} >
            {sortedParentSummaryDetails.map(parentSummaryDetail => <ParentSummary summaryDetail={parentSummaryDetail} />)}
        </Card>
    )
}