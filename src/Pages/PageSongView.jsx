import { useParams, NavLink } from "react-router";
import { getTabFromHymnID } from '/src/ApiInterface';
import { useEffect, useState } from "react";
import { Song } from "./SongView/Song";
import { Badge } from "../Components/Badge";

import './PageSongView.css';
import { RGButton } from "../Components/RGButton";

export function PageSongView({editing=false})
{
    const params = useParams();
    const songId = params.songId;

    const [tabData, setTabData] = useState(null);
    
    // Make call to API to fetch tab information.
    useEffect(() => {
        setTabData(getTabFromHymnID(songId));
    }, [songId]);

    // Tab Data

    return tabData ? (
        <>
            <div className='page-songview-header'>
                <h1 className='page-songview-title'>{tabData.title} ({tabData.hymnId})</h1>
                {tabData.verified ? <Badge text={'Verified'} color={'#2faf35ff'} /> : <></>}
            </div>
            <Song editable={editing} tab={tabData.tab} />
            {!editing ? <NavLink to={`/song/${songId}/edit`}><RGButton text={'Edit Tab'} color={'#edbb14ff'} /></NavLink> : null}
        </>
    ) : (<h1>Loading...</h1>);
}
