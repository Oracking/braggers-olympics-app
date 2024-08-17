type Participant = [string, string];

const participants: Participant[] = [
    ["Red", "Blessing"],
    ["Red", "Kwaku"],
    ["Red", "Adnan"],
    ["Red", "Mikky"],
    ["Red", "Nathan"],
    ["Red", "Job"],
    ["Red", "Simi"],
    ["Red", "Samira"],
    ["Red", "Waithera"],
    ["Red", "Isaac O"],
    ["Red", "Nami"],

    ["Yellow", "Ophelia"],
    ["Yellow", "Keli"],
    ["Yellow", "Oracking"],
    ["Yellow", "Nii Ako"],
    ["Yellow", "Kelvin"],
    ["Yellow", "John"],
    ["Yellow", "Yolisa"],
    ["Yellow", "Samantha"],
    ["Yellow", "Seyike"],
    ["Yellow", "Nana"],

    ["Blue", "Lamide"],
    ["Blue", "Sam"],
    ["Blue", "Obinna"],
    ["Blue", "Joseph"],
    ["Blue", "Stephan"],
    ["Blue", "Tolu"],
    ["Blue", "Lekan"],
    ["Blue", "Dinam"],
    ["Blue", "Sadia"],
    ["Blue", "Abena"],

    ["Green", "Zenobia"],
    ["Green", "Andy"],
    ["Green", "Muktar"],
    ["Green", "Francis"],
    ["Green", "Ayo"],
    ["Green", "Isaac A"],
    ["Green", "Kezia"],
    ["Green", "Donna"],
    ["Green", "Ewurafua"],
    ["Green", "Petra"]
];

export const teamToParticipants: Record<string, Set<string>> = {};

for (const [team, participant] of participants) {
    const teamMembers = teamToParticipants[team] || new Set<string>();
    teamMembers.add(participant);
    teamToParticipants[team] = teamMembers;
}



console.log(teamToParticipants);
