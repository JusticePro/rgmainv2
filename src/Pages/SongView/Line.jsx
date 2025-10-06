import { useRef, useState, useMemo, memo, useEffect } from 'react';
import { Chord } from './Chord';
import './Line.css';
import { RGButton } from '/src/Components/RGButton';
import { Stanza, MemoizedStanza } from './Stanza';
import { StanzaNew } from './StanzaNew';

export function Line({stanzas, chords, onUpdateLine, editable})
{
    const [chordState, setChordState] = useState(chords);
    const [stanzaState, setStanzaState] = useState(stanzas);

    function updatePositionOnChord(index, positionPixels)
    {
        const position = parseInt(positionPixels.substring(0, positionPixels.length - 2));
        const newChords = [...chordState];
        newChords[index].position = position + 'px';
        setChordState(newChords);

        // You send newChords because chordState is not updated immediately.
        onUpdateLine({stanzas: stanzas, chords: newChords});
    }

    function addChord(chordName)
    {
        const newChords = [...chordState];
        newChords.push({text: chordName, position: '0px'});
        setChordState(newChords);
        onUpdateLine({stanzas: stanzas, chords: newChords});
    }

    const chordElements = useMemo(() =>
    chordState.map((chord, index) => {
        return <Chord editable={editable} key={index} text={chord.text} position={chord.position} onUpdateChordPosition={(positionPixels) => {
            updatePositionOnChord(index, positionPixels);
        }} />
    }), [chordState, editable]);

    /*
     * Stanza Management
     */

    // Append a new stanza to the line.
    function addStanza(stanzaText)
    {
        const newStanzas = [...stanzaState];
        newStanzas.push(stanzaText);
        setStanzaState(newStanzas);
        onUpdateLine({stanzas: newStanzas, chords: chordState});
        newStanza.current = true;
    }

    // Update text value of stanza.
    function updateStanza(index, stanzaText)
    {
        const newStanzas = [...stanzas];
        newStanzas[index] = stanzaText;
        setStanzaState(newStanzas);
        onUpdateLine({stanzas: newStanzas, chords: chordState});
    }

    // Delete stanza at index.
    function removeStanza(index)
    {
        const newStanzas = stanzaState.filter((value, id) => {
            return id !== index;
        });
        console.log(newStanzas);
        setStanzaState(newStanzas);
        onUpdateLine({stanzas: newStanzas, chords: chordState});
    }

    // Render stanzas.
    const newStanza = useRef(false);
    const stanzaElements = useMemo(() => stanzaState.map((stanza, index) => {
        let shouldFocus = false;

        if (index === stanzaState.length-1 && newStanza.current)
        {
            shouldFocus = true;
            newStanza.current = false;
        }

        // If the stanza is the last stanza and there is a new stanza. Render the stanza with the newStanza value.
        // This will be used to set the focus to the new input box instead of the StanzaNew component.
        return <MemoizedStanza key={`${index} ${stanza}`} editable={editable} stanza={stanza} onStanzaChange={(value) =>
            {
                updateStanza(index, value);
            }} removeStanza={() => {
                removeStanza(index);
            }} shouldFocus={shouldFocus} />;
    }));
    
    // Return element.
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
                <StanzaNew onStanzaChange={(value) =>
                    {
                        // This is for the new stanza box.
                        if (value.trim() === '')
                            return;
                        addStanza(value);
                    }} /> : <></>}
            </div>
        </div>
    );
}

export const MemoizedLine = memo(Line);