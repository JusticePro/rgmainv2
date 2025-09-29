import { useState } from "react";
import { Line, MemoizedLine } from "./Line";
import {RGButton} from '/src/Components/RGButton';

export function Song({editable, tab})
{
    const [viewing, setViewing] = useState(false);
    const [lines, setLines] = useState(tab);
    function compileToJson()
    {
        return JSON.stringify(lines);
    }

    function updateLine(index, newLine)
    {
        const newLines = [...lines];
        newLines[index] = newLine;
        setLines(newLines);
    }

    function handleLineUpdate(index, newLine)
    {
        updateLine(index, newLine);
    }

    const lineElements = lines.map((line, index) => {
        return <MemoizedLine editable={!viewing} key={index} stanzas={line.stanzas} chords={line.chords} onUpdateLine={(newLine) => handleLineUpdate(index, newLine)} />
    });

    return (
        <div className='song'>
            {lineElements}
            <RGButton onClick={() => {console.log(compileToJson())}} text={'Compile to JSON'} color={'#1fb6caff'} />
            <RGButton onClick={() => {setViewing(!viewing)}} text={'View Mode'} color={'#1fb6caff'} />
        </div>
    )
}