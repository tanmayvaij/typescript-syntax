// union and enum with union

function dbFunc(id: string | number) {
    if ( typeof id === "string" ) id.toLowerCase()
    if (typeof id === "number") {  }
}

let seatsCandidate: "ram" | "shyam" | "roham"

seatsCandidate = "ram"