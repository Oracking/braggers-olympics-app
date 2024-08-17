import {SummaryDetail} from "./models";

export const sortSummaryDetails = (summaryDetails: SummaryDetail[]): SummaryDetail[] => {
    return [...summaryDetails].sort((detail1, detail2) => {
        if (typeof (detail1.value) === 'string' && typeof (detail2.value) === 'string') {
            return detail1.value.localeCompare(detail2.value)
        } else if (typeof (detail1.value) === 'number' && typeof (detail2.value) == 'number') {
            if (detail1.value > detail2.value) {
                return 1
            }
            if (detail1.value < detail2.value) {
                return -1
            }
            return 0;
        }
    }).reverse();
}