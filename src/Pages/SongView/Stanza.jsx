import './Stanza.css';

export function Stanza({stanza, editable, newStanza=false})
{
    return (
        <input placeholder={newStanza ? 'Type here to add a new stanza.' : ''} disabled={editable===false} className='stanza' defaultValue={stanza}></input>
    );
}