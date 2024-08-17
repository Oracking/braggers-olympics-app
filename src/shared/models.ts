export interface SummaryDetail {
    name: string;
    value: string | number;
}

export interface ParentSummaryDetail extends SummaryDetail {
    childSummaryDetails: SummaryDetail[];
    inActive?: boolean;
}