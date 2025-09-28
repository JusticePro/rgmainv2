import './Stanza.css';

export function Stanza({stanza, editable})
{
    return (
        <input disabled={editable===false} className='stanza' defaultValue={stanza}></input>
    );
}