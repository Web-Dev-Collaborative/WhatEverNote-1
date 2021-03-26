import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'

const NoteInList = ({note}) => {
    return (
        <div className="NoteinList__container">
            <span className="note-title">{note.title}</span>
            <span className="note-text">{note.text}</span>
            <div className="note-list-updated-tags__container">
            <span className="note-updated">{note.updated_at}</span>
            {note.tags.length? note.tags.map(tag => (
                <span className="notelist-tag" key={tag.id}>{tag.name}</span>
            )):null}


            </div>

        </div>

    )
}
export default NoteInList