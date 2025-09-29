import './Badge.css';

export function Badge({text, color})
{
    return <span style={{'--badge-color': color}} className='rgbadge'>{text}</span>
}