import { useParams } from "react-router";
import { getTabFromHymnID } from '/src/ApiInterface';
import { useEffect, useState } from "react";
import { Song } from "./SongView/Song";

export function PageSongView()
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
            <h1>{tabData.title} ({tabData.hymnId})</h1>
            <Song editable={true} tab={tabData.tab} />
        </>
    ) : (<h1>Loading...</h1>);
}
