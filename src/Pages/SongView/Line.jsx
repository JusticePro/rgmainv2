import { useState } from 'react';
import { Chord } from './Chord';
import './Line.css';
import { RGButton } from '/src/Components/RGButton';
import { Stanza } from './Stanza';

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

    function addChord(chordName)
    {
        const newChords = [...chordState];
        newChords.push({text: chordName, position: '0px'});
        setChordState(newChords);
        onUpdateLine({stanzas: stanzas, chords: newChords});
    }

    const chordElements = chords.map((chord, index) => {
        return <Chord editable={editable} key={index} text={chord.text} position={chord.position} onUpdateChordPosition={(positionPixels) => {
            updatePositionOnChord(index, positionPixels);
        }} />
    });

    const stanzaElements = stanzas.map((stanza, index) => {
        return <Stanza key={index} stanza={stanza} />;
    });

    return (
        <div className='line'>
            {editable ?
                <div className='line-add-chord-container'>
                    <RGButton onClick={() => {addChord(prompt('Chord'))}} className='line-add-chord' text={'Add Chord'} color={'#1fc636ff'} />
                </div> : <></>}
            <div className='line-chords'>
                {chordElements}
            </div>
            <div className='line-stanzaContainer'>
                {stanzaElements}
            {editable ?
                <Stanza newStanza={true} stanza={''} /> : <></>}
            </div>
        </div>
    );
}