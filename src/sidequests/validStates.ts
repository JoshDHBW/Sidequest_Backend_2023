export const validStatesObj = {
    published: "PUBLISHED", //Eingegangen, noch nicht durch Sachbearbeitergesichtet
    in_progress: "IN_PROGRESS", //Durch Sachbearbeiter gesichtet, aber noch nicht anonymisiert
    finished: "FINISHED", //Anonymisiert, in Begutachtung durch Experten
    canceled: "CANCELED", //Expertenbegutachtung abgeschlossen
    accepted: "ACCEPTED", //Vorschlag angenommen, wird auf Dashboard angezeigt
    disputed: "DISPUTED", //Vorschlag angenommen, wird auf Dashboard angezeigt
}

export const validStates = [
    validStatesObj.published, //Eingegangen, noch nicht durch Sachbearbeitergesichtet
    validStatesObj.in_progress, //Durch Sachbearbeiter gesichtet, aber noch nicht anonymisiert
    validStatesObj.finished, //Anonymisiert, in Begutachtung durch Experten
    validStatesObj.canceled, //Expertenbegutachtung abgeschlossen
    validStatesObj.accepted, //Vorschlag angenommen, wird auf Dashboard angezeigt
    validStatesObj.disputed, //Vorschlag abgelehnt, wird auf Dashboard angezeigt
]