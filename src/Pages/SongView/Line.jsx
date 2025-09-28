import { useState } from 'react';
import { Chord } from './Chord';
import './Line.css';

export function Line({stanzas, chords, onUpdateLine, editable})
{
    const [chordState, setChordState] = useState(chords);

    function updatePositionOnChord(index, positionPixels)
    {
        const position = parseInt(positionPixels.substring(0, positionPixels.length - 2));
        const newChords = [...chordState];
        newChords[index].position = position + 'px';
        setChordState(newChords);
        onUpdateLine({stanzas: stanzas, chords: newChords});
    }

    const chordElements = chords.map((chord, index) => {
        return <Chord editable={editable} key={index} text={chord.text} position={chord.position} onUpdateChordPosition={(positionPixels) => {
            console.log(positionPixels);
            updatePositionOnChord(index, positionPixels);
        }} />
    });

    const stanzaElements = stanzas.map((stanza, index) => {
        return <span key={index}>{stanza}</span>
    });

    return (
        <div className='line'>
            <div className='line-chords'>
                {chordElements}
            </div>
            <div className='line-stanzaContainer'>
                {stanzaElements}
            </div>
        </div>
    );
}