// Find the name of a secret society based on the first letter of each member's name.
 
// Examples:
// - `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
// - `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
// - `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.

let secretNames=["Esperanza", "Franco", "Nia"];

let secretArray= secretNames.map(name=>{
    return name[0]
})

secretArrayOrdenado= secretArray.sort();
console.log(secretArrayOrdenado);