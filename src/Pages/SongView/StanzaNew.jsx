import { useRef } from 'react';
import './Stanza.css';

export function StanzaNew({onStanzaChange})
{
    const input = useRef(null);
    // Set the trigger value to reset the input box when a new stanza is added.
    // This allows the line function to call a trigger.
    
    function onChange(e)
    {
        onStanzaChange(e.target.value);
        input.current.value = '';
    }

    return (
        <input ref={input} onChange={onChange} placeholder={'Type here to add a new stanza.'} className='stanza'></input>
    );
}