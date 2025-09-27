import './RGButton.css';

export function RGButton({text, onClick, color})
{
    return <button style={{'--button-color': color}} className='rgbutton' onClick={onClick}>{text}</button>
}