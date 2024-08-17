type EventResults = [string, number][];

export const events: Record<string, EventResults> = {
    "Men's 100m": [
        ["Tolu", 16],
        ["Muktar", 14],
        ["Keli", 12],
        ["Oracking", 10],
        ["Francis", 8],
        ["Isaac O", 6],
        ["Kwaku", 4],
        ["Job", 2]
    ],

    "Women's 100m": [
        ["Zenobia", 16],
        ["Ophelia", 14],
        ["Blessing", 12],
        ["Abena", 10],
        ["Nami", 8],
        ["Yolisa", 6],
        ["Kezia", 4],
        ["Dinam", 2]
    ],

    "Men's 200m": [
        ["Tolu", 16],
        ["Kwaku", 14],
        ["Keli", 12],
        ["Stephan", 10],
        ["Isaac A", 8],
        ["Mikky", 6],
        ["Nii Ako", 4],
        ["Andy", 0]
    ],

    "Women's 200m": [
        ["Ophelia", 14],
        ["Abena", 10],
        ["Simi", 6],
        ["Donna", 2]
    ],

    "Men's 400m": [
        ["Kwaku", 16],
        ["Ayo", 14],
        ["Sam", 12],
        ["Muktar", 10],
        ["Job", 8],
        ["Nii Ako", 6],
        ["Obinna", 4],
        ["Kelvin", 2]
    ],

    "Women's 400m": [
        ["Blessing", 14],
        ["Seyike", 10],
        ["Zenobia", 6],
        ["Dinam", 2]
    ],

    "Mixed 4x100 Relay": [
        ["Tolu", 14],
        ["Keli", 10],
        ["Muktar", 6],
        ["Kwaku", 2]
    ],

    "Lime and Spoon Men": [
        ["Muktar", 14],
        ["Oracking", 10],
        ["Adnan", 6],
        ["Joseph", 0]
    ],

    "Lime and Spoon Women": [
        ["Nana", 14],
        ["Waithera", 0],
        ["Petra", 0],
        ["Lamide", 0]
    ],

    "Sack Race Mixed": [
        ["Lekan", 14],
        ["Waithera", 14],
        ["Nana", 10],
        ["Oracking", 10],
        ["Stephan", 6],
        ["Sadia", 6],
        ["Muktar", 2],
        ["Ewurafua", 2]
    ],

    "Women's Shotput": [
        ["Lamide", 14],
        ["Petra", 14],
        ["Sam", 6],
        ["Simi", 2]
    ],

    "Men's Shotput": [
        ["Joseph", 14],
        ["Isaac A", 10],
        ["Nathan", 6],
        ["John", 2]
    ],

    "Men's Javelin": [
        ["Isaac O", 14],
        ["Job", 10],
        ["Oracking", 6],
        ["Francis", 0]
    ]


};

import { teamToParticipants } from './participants';

function validate() {
    const allParticipants: Set<string> = new Set([
        ...Array.from(teamToParticipants["Green"]),
        ...Array.from(teamToParticipants["Yellow"]),
        ...Array.from(teamToParticipants["Red"]),
        ...Array.from(teamToParticipants["Blue"])
    ]);

    for (const [event, result] of Object.entries(events)) {
        console.log("Validating: ", event);
        for (const [participant] of result) {
            if (!allParticipants.has(participant)) {
                throw new Error(`Failed to find person: ${participant}`);
            }
        }
    }
}

validate();
