import { useParams } from "react-router";
import { getTabFromHymnID } from '/src/ApiInterface';
import { useEffect, useState } from "react";
import { Song } from "./SongView/Song";
import { Badge } from "../Components/Badge";

import './PageSongView.css';

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
            <Song editable={false} tab={tabData.tab} />
        </>
    ) : (<h1>Loading...</h1>);
}
