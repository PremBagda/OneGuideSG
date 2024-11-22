function matchClinicsByName(array_1, array_2) {
    // Extract the 'SrchResults' from array_2
    const searchResults = array_2.SrchResults.slice(1); // Skip the first element as it's metadata

    // Create a set of clinic names from the search results for efficient lookup
    const resultNames = new Set(searchResults.map(result => result.NAME));

    // Match and return results from array_1
    return array_1.filter(clinic => resultNames.has(clinic.Name));
}

// Usage
const matchedResults = matchClinicsByName(array_1, array_2);