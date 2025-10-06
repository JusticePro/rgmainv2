import { memo, useEffect, useRef, useState } from 'react';
import './Stanza.css';

export function Stanza({stanza, editable, onStanzaChange, removeStanza, shouldFocus})
{
    const input = useRef(null);
    
    function onChange(e)
    {
        onStanzaChange(e.target.value);
    }

    function onKeyDown(e)
    {
        // If the user presses backspace on an empty input box, delete the stanza.
        if (e.key === 'Backspace' && e.target.value === '')
        {
            e.preventDefault();
            removeStanza();
        }
    }

    // Focus the input box when the component is rendered.
    // This will select the lowest box when the stanzas are first rendered.
    // This will also focus the input box when a new stanza is added.
    useEffect(() =>
    {
        if (shouldFocus)
        {
            input.current.focus();
        }
    }, []);

    return (
        <input ref={input} onKeyDown={onKeyDown} /*onChange={onChange}*/ onBlur={onChange} disabled={editable===false} className='stanza' defaultValue={stanza}></input>
    );
}

export const MemoizedStanza = memo(Stanza);