/**
 * Takes hymn number returns json for the tab.
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

