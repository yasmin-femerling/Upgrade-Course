import React, { useState } from 'react'
import { NavBar } from '../ui/NavBar'
import moment from 'moment';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/calendar-messages-es';
import 'moment/locale/es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import {uiOpenModal} from '../../actions/ui'
import { eventClearActiveEvent, eventSetActive } from '../../actions/event';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale('es');

const localizer = momentLocalizer(moment);


export const CalendarScreen = () => {

    const dispatch = useDispatch();

    const {events, activeEvent} =  useSelector(state => state.calendar)
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const onDoubleClick = (e) => {
        dispatch(uiOpenModal());
    }

    const onSelectEvent =(e) => {
        dispatch(eventSetActive(e));
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const onSelectSlot = (e) => {
        dispatch(eventClearActiveEvent());
    }

    const eventStyleGetter = () => {
        const style = {
            backgroundColor: '#367CF7',
            borderRadius:'0px',
            opacity:'0.8',
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    }

  return (
    <div className='calendar-screen'>
        <NavBar/>
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            messages={messages}
            eventPropGetter={eventStyleGetter}
            onDoubleClickEvent={onDoubleClick}
            onSelectEvent={onSelectEvent}
            onSelectSlot={onSelectSlot}
            selectable={true}
            onView={onViewChange}
            view={lastView}
            components={{
                event: CalendarEvent
            }}
            />
        <AddNewFab/>
        {
            (activeEvent)
            &&
            <DeleteEventFab/>
        }
        <CalendarModal/>
    </div>
  )
}
