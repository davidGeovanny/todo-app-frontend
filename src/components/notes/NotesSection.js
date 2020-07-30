import React from 'react'
import { useSelector } from 'react-redux'
import { Notes } from './Notes';
import { NoNotes } from './NoNotes';

export const NotesSection = () => {
    
    const { activeActivity } = useSelector(state => state.activities);
    const { notes = [] } = activeActivity || {};
    
    return (
        ( notes.length > 0 )
            ? <Notes />
            : <NoNotes />
    )
}
