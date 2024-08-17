import {List} from "grommet";
import {useEffect, useState} from "react";
import {SummaryDetail} from "./models";
import {sortSummaryDetails} from "./utilities";

export interface ChildSummaryProps {
    summaryDetails: SummaryDetail[];
}


export const ChildSummary = (props: ChildSummaryProps) => {

    const [sortedChildSummaryDetails, setSortedChildSummaryDetails] = useState<SummaryDetail[]>(sortSummaryDetails(props.summaryDetails))

    useEffect(() => {
        setSortedChildSummaryDetails(sortSummaryDetails(props.summaryDetails));
    }, [props.summaryDetails]);

    return (
        <List
            style={{paddingTop: "20px"}}
            primaryKey="name"
            secondaryKey={"value"}
            data={sortedChildSummaryDetails}
        />
    )
}