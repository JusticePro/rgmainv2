/**
 * Takes hymn number returns json for the tab.
 * Returns an object with structure:
 * {
 *  hymnId: The hymn number that is written in the hymnal.
 *  title: The written title of the hymn.
 *  tab:
 *  [
 *      {
 *          stanzas: ['Stanza 1', 'Stanza 2'],
 *          chords: [{text: 'C', position: '0px'}, {text: 'Am', position: '16px'}]
 *      },
 *      {
 *          stanzas: ['Stanza 1', 'Stanza 2'],
 *          chords: [{text: 'F', position: '0px'}, {text: 'G', position: '16px'}]
 *      }
 *  ],
 *  verified: true|false (this is for admin verification badge)
 * }
 * @param {*} hymnId 
 */
export function getTabFromHymnID(hymnId)
{
    return {
        'hymnId': hymnId,
        'title': 'In Christ Alone',
        'tab': [
            {
                stanzas: ["In Christ a - lone, my hope is found.", "In Christ a - lone! Who took on flesh,"],
                chords: [{text: "C", position: '0px'}, {text: "G", position: '50px'}],
            },
            {
                stanzas: ["This is the third line", "This is the fourth line"],
                chords: [{text: "Am", position: '0px'}, {text: "F", position: '50px'}],
            },
        ],
        'verified': true,
    };
}

