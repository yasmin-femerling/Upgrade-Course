import React from 'react';
import { eventDeleted } from '../../actions/event';
import { useDispatch } from 'react-redux'

export const DeleteEventFab = () => {

    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch( eventDeleted() );
    }

    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={ handleDelete }
        >
            <i className="fas fa-trash"></i>
            <span> Borrar evento </span>
        </button>
    )
}
