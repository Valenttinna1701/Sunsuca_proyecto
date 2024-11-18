import React, { useState, useEffect } from 'react';
import './ManageEvents.css';

function ManageEvents({ role }) {
  // Obtener eventos y citas desde localStorage al cargar la página
  const [events, setEvents] = useState(() => {
    const storedEvents = localStorage.getItem('events');
    return storedEvents ? JSON.parse(storedEvents) : [];
  });

  const [appointments, setAppointments] = useState(() => {
    const storedAppointments = localStorage.getItem('appointments');
    return storedAppointments ? JSON.parse(storedAppointments) : [];
  });

  const [newAppointment, setNewAppointment] = useState({
    id: '',
    eventId: '',
    date: '',
    time: '',
  });

  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    description: '',
  });

  const [editingEvent, setEditingEvent] = useState(null);

  // Guardar los eventos y citas en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  const handleAppointmentChange = (e) => {
    setNewAppointment({ ...newAppointment, [e.target.name]: e.target.value });
  };

  const handleEventChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleScheduleAppointment = () => {
    const newId = newAppointment.id ? newAppointment.id : appointments.length + 1;

    setAppointments([
      ...appointments,
      { id: newId, ...newAppointment },
    ]);
    setNewAppointment({ id: '', eventId: '', date: '', time: '' });
  };

  const handleScheduleEvent = () => {
    setEvents([
      ...events,
      { id: events.length + 1, ...newEvent },
    ]);
    setNewEvent({ title: '', date: '', time: '', description: '' });
  };

  const handleDeleteAppointment = (id) => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const handleEditAppointment = (id) => {
    const appointmentToEdit = appointments.find(appointment => appointment.id === id);
    setNewAppointment({
      id: appointmentToEdit.id,
      eventId: appointmentToEdit.eventId,
      date: appointmentToEdit.date,
      time: appointmentToEdit.time,
    });
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setNewEvent({
      title: event.title,
      date: event.date,
      time: event.time,
      description: event.description,
    });
  };

  const handleUpdateEvent = () => {
    setEvents(events.map(event =>
      event.id === editingEvent.id ? { ...editingEvent, ...newEvent } : event
    ));
    setEditingEvent(null);
    setNewEvent({ title: '', date: '', time: '', description: '' });
  };

  return (
    <div className="manage-events">
      <div className="manage-events-container">
        <h1>Gestión de Eventos y Citas</h1>

        {/* Módulo para Admin */}
        {role === 'admin' && (
          <div className="admin-section">
            <h3>{editingEvent ? 'Editar Evento' : 'Crear Nuevo Evento'}</h3>
            <input
              type="text"
              name="title"
              placeholder="Título del evento"
              value={newEvent.title}
              onChange={handleEventChange}
            />
            <input
              type="date"
              name="date"
              value={newEvent.date}
              onChange={handleEventChange}
            />
            <input
              type="time"
              name="time"
              value={newEvent.time}
              onChange={handleEventChange}
            />
            <textarea
              name="description"
              placeholder="Descripción del evento"
              value={newEvent.description}
              onChange={handleEventChange}
            />
            <button onClick={editingEvent ? handleUpdateEvent : handleScheduleEvent}>
              {editingEvent ? 'Actualizar Evento' : 'Crear Evento'}
            </button>

            <h2>Eventos Programados</h2>
            <div className="events-list">
              {events.map((event) => (
                <div key={event.id} className="event-card">
                  <h3>{event.title}</h3>
                  <p>Fecha: {event.date}</p>
                  <p>Hora: {event.time}</p>
                  <p>{event.description}</p>

                  <div className="event-actions">
                    <button onClick={() => handleEditEvent(event)}>Editar Evento</button>
                    <button onClick={() => handleDeleteEvent(event.id)}>Eliminar Evento</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Módulo para Cliente */}
        {role === 'client' && (
          <div className="appointment-section">
            <h3>{newAppointment.id ? 'Editar Cita' : 'Agendar Nueva Cita'}</h3>
            <select
              name="eventId"
              value={newAppointment.eventId}
              onChange={handleAppointmentChange}
            >
              <option value="">Selecciona un evento</option>
              {events.map(event => (
                <option key={event.id} value={event.id}>
                  {event.title}
                </option>
              ))}
            </select>
            <input
              type="date"
              name="date"
              value={newAppointment.date}
              onChange={handleAppointmentChange}
            />
            <input
              type="time"
              name="time"
              value={newAppointment.time}
              onChange={handleAppointmentChange}
            />
            <button onClick={handleScheduleAppointment}>
              {newAppointment.id ? 'Actualizar Cita' : 'Agendar Cita'}
            </button>
          </div>
        )}

        <h2>Citas Agendadas</h2>
        <div className="appointments-list">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="appointment-card">
              <h3>Cita para el evento: {events.find(event => event.id === appointment.eventId)?.title}</h3>
              <p>Fecha: {appointment.date}</p>
              <p>Hora: {appointment.time}</p>

           
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManageEvents;
