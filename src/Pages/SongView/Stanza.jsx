import { useEffect, useRef } from 'react';
import './Stanza.css';

export function Stanza({stanza, editable, onStanzaChange})
{
    const input = useRef(null);
    // Set the trigger value to reset the input box when a new stanza is added.
    // This allows the line function to call a trigger.
    
    function onChange(e)
    {
        onStanzaChange(e.target.value);
    }

    // Focus the input box when the component is rendered.
    // This will select the lowest box when the stanzas are first rendered.
    // This will also focus the input box when a new stanza is added.
    useEffect(() =>
    {
        input.current.focus();
    }, []);

    return (
        <input ref={input} onChange={onChange} disabled={editable===false} className='stanza' defaultValue={stanza}></input>
    );
}