// src/helpers/match.js

export function matchClinicsByName(array_1, array_2) {

    if (!Array.isArray(array_1) || !array_2 || !Array.isArray(array_2.SrchResults)) {
        console.error("Invalid input data");
        return [];
    }

    const searchResults = array_2.SrchResults.slice(1);
    const resultNames = searchResults
        .map(result => result.NAME?.toLowerCase())
        .filter(Boolean);


    const matchedClinics = array_1.filter(clinic => {
        if (typeof clinic !== 'object' || clinic === null || typeof clinic.Name !== 'string') {
            return false;
        }

        const clinicName = clinic.Name.toLowerCase();
        const isMatch = resultNames.some(name => name.includes(clinicName) || clinicName.includes(name));
        return isMatch;
    });

    return matchedClinics;
}