import { useRef } from 'react';
import './Chord.css';

export function Chord({text, position, editable=false, onUpdateChordPosition})
{
    const dragging = useRef(false);
    const offset = useRef(0);
    const chordElement = useRef(null);

    function onDown(e)
    {
        if (editable === false) return;
        e.preventDefault();
        dragging.current = true;
        document.addEventListener('mouseup', onUp);
        document.addEventListener('mousemove', onMove);

        offset.current = e.pageX - parseInt(position.substring(0, position.length - 2));
    }

    function onUp(e)
    {
        dragging.current = false;
        document.removeEventListener('mouseup', onUp);
        document.removeEventListener('mousemove', onMove);
        onUpdateChordPosition(chordElement.current.style.left);
    }

    function onMove(e)
    {
        if (dragging.current)
        {
            chordElement.current.style.left = (e.pageX - offset.current) + 'px';
        }
    }

    return (
        <div className='chord-container'>
            <div ref={chordElement} onMouseDown={onDown} className='chord' style={{left: position}}>
                {text}
            </div>
        </div>
    );
}