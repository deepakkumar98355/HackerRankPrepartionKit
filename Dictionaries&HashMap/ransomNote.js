function checkMagazine(magazine, note) {

    /* 
        Space Complexity : O(n)
        Time Complexity : O(m+n)
    */

    /* 
        Key takeaway :
            -- Space complexity can be optimized from O(m) to O(n)
                Instead of looping through all magazine words will loop through notes 
            -- keep count of notes length and loop with magazine words 
            -- if all words matched i.e note.length becomes zero will return 
    */


    if (note.length > magazine.length)
        return 'No'

    const words = {}
    let notesLength = note.length

    for (let text of note) {
        words[text] = (words[text] || 0) + 1
    }

    for (let text of magazine) {
        if (words[text]) {
            if (words[text] > 0) {
                words[text]--
                notesLength--
            }
            if (notesLength == 0)
                return 'Yes'

        }

    }

    return 'No'

}


checkMagazine(['give', 'me', 'one', 'grand', 'today', 'night'], ['give', 'one', 'grand', 'today'])