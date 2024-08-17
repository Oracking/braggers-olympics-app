import {useState} from "react";
import {Box} from "grommet";
import {ParentSummaryDetail, SummaryDetail} from "./models";
import {ChildSummary} from "./childSummary";

export interface ParentSummaryProps {
    summaryDetail: ParentSummaryDetail;
}

export const ParentSummary = (props: ParentSummaryProps) => {

    const [expanded, setExpanded] = useState(false);
    const cardColor = props.summaryDetail.inActive ? "#CCCCCC": "#de7bae";

    return (
        <Box style={{background: cardColor, padding:"10px", borderRadius: "5px", margin: "10px"}}>
            <Box direction={"row"} onClick={() => setExpanded(!expanded)}>
                <Box flex={{grow: 7}}>{props.summaryDetail.name}</Box>
                <Box flex={{grow: 1}}>{props.summaryDetail.value}</Box>
                <Box flex={{grow: 1}}>{expanded ? "▲" : "▼"}</Box>
            </Box>

            {expanded && props.summaryDetail.childSummaryDetails &&
                <ChildSummary summaryDetails={props.summaryDetail.childSummaryDetails} />
            }
        </Box>
    );
}