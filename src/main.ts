
/**
 * Converts a CSV string into JSON
 * 
 * ```js
 * csv2Json('firstname,lastname, \n Aleem,Isiaka \nBabatunde, Isiaka')
 * // Should return
 * [
 *   {
 *     firstname: "Aleem",
 *     lastname: Isiaka
 *   },
 *   {
 *     firstname: "Babatunde",
 *     lastname: Isiaka
 *   }
 * ]
 * ```
 * @param csv {string} 
 * @returns 
 */
 function csv2Json (csv: String) {
    // Split the comma separated string using the newline 
    const splittedCSV = csv.split("\n");

    // The first row of the string is always the keys for the JSON object
    const keysRow = splittedCSV.splice(0, 1);

    // .splice returns [...splicedItems] we pick the first row
    // Separate that row using comma to get indiividual keys
    const keys = keysRow[0].trim().split(",");


    // The magic
    return splittedCSV.reduce((acc, row: string, index: number, items) => {
        // Create a new array for an item
        const newItem = {};
        // The reduce gets the content for each row
        // Already available through \n splitting
        // We split again using "," to get individual columns for the row
        const splittedRow = row.trim().split(",");
        // Create a new array for the keysRow generated above.
        // Copying over the array can override the keys making the final result not totally uniform
        [...keys].map((key, index) =>{
            // Pick the string value of a key at `index`
            // Use the string as a key for the new JSON item
            // And set the value to be the value at the index of splittedRow
            newItem[keys[index]] = splittedRow[index];
        });
        return [...acc, newItem];
    }, []);
    // return[];
}

export default csv2Json;