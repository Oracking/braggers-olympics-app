import { cloneDeep } from 'lodash';  // lodash is used for deep copying
import { teamToParticipants } from './participants';
import { events } from './events';

interface EventBreakdown {
    name: string;
    value: number | string;
    inActive: boolean;
    childSummaryDetails: Array<{ name: string; value: number }>;
}

interface Summary {
    name: string;
    value: number;
    inActive: boolean;
    childSummaryDetails: Array<{ name: string; value: number }>;
}

interface Metrics {
    events_summary: EventBreakdown[];
    team_summary: Summary[];
    individual_summary: Summary[];
}

function getMetrics(): Metrics {
    const eventToEventBreakdown = cloneDeep(events);
    const nameToEventBreakdown: Record<string, Array<[string, number]>> = {};
    const nameToTotalScore: Record<string, number> = {};
    const teamToIndividualTotal: Record<string, Array<[string, number]>> = {};

    const allParticipants = new Set<string>([
        ...Array.from(teamToParticipants["Green"]),
        ...Array.from(teamToParticipants["Yellow"]),
        ...Array.from(teamToParticipants["Red"]),
        ...Array.from(teamToParticipants["Blue"])
    ]);

    allParticipants.forEach(participant => {
        nameToEventBreakdown[participant] = [];
    });

    Object.entries(eventToEventBreakdown).forEach(([eventName, results]) => {
        results.forEach(([personName, points]) => {
            nameToEventBreakdown[personName].push([eventName, points]);
        });
    });

    Object.entries(nameToEventBreakdown).forEach(([personName, eventBreakdown]) => {
        if (eventBreakdown.length >= 2) {
            eventBreakdown.push(["Participation", 15]);
        } else if (eventBreakdown.length === 1) {
            eventBreakdown.push(["Participation", 10]);
        } else {
            eventBreakdown.push(["Participation", 0]);
        }
    });

    Object.entries(nameToEventBreakdown).forEach(([personName, eventBreakdown]) => {
        let totalScore = 0;
        eventBreakdown.forEach(([, score]) => {
            totalScore += score;
        });
        nameToTotalScore[personName] = totalScore;
    });

    Object.entries(teamToParticipants).forEach(([team, participants]) => {
        teamToIndividualTotal[team] = [];
        participants.forEach(participant => {
            teamToIndividualTotal[team].push([participant, nameToTotalScore[participant]]);
        });
    });

    return convertToUiMetrics(eventToEventBreakdown, nameToEventBreakdown, nameToTotalScore, teamToIndividualTotal);
}

function convertToUiMetrics(
    eventToEventBreakdown: Record<string, Array<[string, number]>>,
    nameToEventBreakdown: Record<string, Array<[string, number]>>,
    nameToTotalScore: Record<string, number>,
    teamToIndividualTotal: Record<string, Array<[string, number]>>
): Metrics {
    const eventsSummary: EventBreakdown[] = [];

    Object.entries(eventToEventBreakdown).forEach(([event, eventBreakdowns]) => {
        const eventSummary: EventBreakdown = {
            name: event,
            value: eventBreakdowns.length > 0 ? "Done" : "Pending",
            inActive: eventBreakdowns.length < 1,
            childSummaryDetails: []
        };
        eventBreakdowns.forEach(([name, value]) => {
            eventSummary.childSummaryDetails.push({ name, value });
        });
        eventsSummary.push(eventSummary);
    });

    const teamSummary: Summary[] = [];
    Object.entries(teamToIndividualTotal).forEach(([team, individualTotals]) => {
        let teamTotal = 0;
        const childSummaryDetails: Array<{ name: string; value: number }> = [];
        individualTotals.forEach(([personName, personTotal]) => {
            teamTotal += personTotal;
            childSummaryDetails.push({ name: personName, value: personTotal });
        });
        teamSummary.push({
            name: team,
            value: teamTotal,
            inActive: false,
            childSummaryDetails
        });
    });

    const individualSummary: Summary[] = [];
    Object.entries(nameToEventBreakdown).forEach(([personName, eventBreakdowns]) => {
        const individual: Summary = {
            name: personName,
            value: nameToTotalScore[personName],
            inActive: false,
            childSummaryDetails: []
        };
        eventBreakdowns.forEach(([name, value]) => {
            individual.childSummaryDetails.push({ name, value });
        });
        individualSummary.push(individual);
    });

    return {
        events_summary: eventsSummary,
        team_summary: teamSummary,
        individual_summary: individualSummary
    };
}

export { getMetrics, convertToUiMetrics };
