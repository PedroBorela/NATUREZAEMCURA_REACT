"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    format,
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    isSameMonth,
    isSameDay,
    parseISO,
    getDay
} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import CalendarDayNames from './DiasCalendario';
import MonthEventsList from './ListaEventosMes';
import EventModal from './ModalEvento';
import CalendarHeader from './Cabecalho';








const CalendarCell = ({
    day,
    isSelected,
    isCurrentMonth,
    events,
    onDateClick,
    onEventClick
}) => {
    return (
        <div
            key={day.toString()}
            onClick={() => onDateClick(day)}
            className={`min-h-20 max-h-24 border rounded-lg p-1 overflow-y-auto cursor-pointer transition-all duration-200
        ${isSelected ? 'ring-2 ring-verdeEsmeralda-300 bg-verdeEsmeralda-100 shadow-md' : 'hover:bg-orquideaLilas-100 hover:shadow-sm'}
        ${!isCurrentMonth ? 'text-gray-400 bg-white opacity-70' : 'text-azulArpoador-500 bg-white'}`}
        >
            <div className={`text-right text-sm mb-1 ${isCurrentMonth ? 'font-medium' : 'font-light'}`}>
                {format(day, 'd')}
            </div>
            <div className="space-y-1">
                {events.map(event => (
                    <motion.div
                        key={event.id}
                        layoutId={`event-${event.id}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            onEventClick(event);
                        }}
                        className={`text-xs p-1 rounded truncate text-white cursor-pointer ${event.color || 'bg-azulArpoador-300'}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {event.title}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const CalendarGrid = ({
    monthStart,
    monthDays,
    selectedDate,
    currentMonth,
    eventsMap,
    onDateClick,
    onEventClick
}) => {
    const startDay = getDay(monthStart);
    const emptyCells = Array(startDay).fill(null);

    return (
        <div className="grid grid-cols-7 gap-1 p-4 bg-gradient-to-br from-orquideaLilas-50 to-azulArpoador-50">
            {emptyCells.map((_, index) => (
                <div key={`empty-${index}`} className="h-16 border rounded-lg bg-white opacity-50"></div>
            ))}

            {monthDays.map(day => {
                const dayEvents = eventsMap.get(day.toDateString()) || [];
                const isSelected = isSameDay(day, selectedDate);
                const isCurrentMonth = isSameMonth(day, currentMonth);

                return (
                    <CalendarCell
                        key={day.toString()}
                        day={day}
                        isSelected={isSelected}
                        isCurrentMonth={isCurrentMonth}
                        events={dayEvents}
                        onDateClick={onDateClick}
                        onEventClick={onEventClick}
                    />
                );
            })}
        </div>
    );
};

const SelectedDateEvents = ({ selectedDate, events, onEventClick }) => {
    return (
        <div className="border-t border-orquideaLilas-200 p-6 bg-gradient-to-tr from-orquideaLilas-100 to-white">
            <h3 className="text-lg font-semibold text-orquideaLilas-500 mb-4">
                Eventos em {format(selectedDate, 'PPPP', { locale: ptBR })}
            </h3>

            {events.length > 0 ? (
                <div className="space-y-3">
                    {events.map(event => (
                        <motion.div
                            key={event.id}
                            layoutId={`event-${event.id}`}
                            onClick={() => onEventClick(event)}
                            className="p-4 rounded-lg border border-orquideaLilas-200 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                            whileHover={{ scale: 1.01 }}
                        >
                            <div className="flex items-start">
                                <div className={`h-3 w-3 rounded-full mt-1 flex-shrink-0 ${event.color || 'bg-azulArpoador-300'}`}></div>
                                <div className="ml-3">
                                    <h4 className="font-medium text-azulArpoador-500">{event.title}</h4>
                                    <p className="text-sm text-orquideaLilas-400 mt-1">
                                        {format(parseISO(event.date), 'PPPPp', { locale: ptBR })}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <p className="text-orquideaLilas-400">Nenhum evento marcado para esta data.</p>
            )}
        </div>
    );
};


const Calendario = ({ eventos = [] }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [expandedEvent, setExpandedEvent] = useState(null);

    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);

    const monthDays = useMemo(() => {
        return eachDayOfInterval({ start: monthStart, end: monthEnd });
    }, [monthStart, monthEnd]);

    const eventosPorDia = useMemo(() => {
        const map = new Map();
        eventos.forEach(event => {
            const date = parseISO(event.date);
            const key = date.toDateString();
            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key).push(event);
        });
        return map;
    }, [eventos]);

    const eventosDoMes = useMemo(() =>
        eventos.filter(event => isSameMonth(parseISO(event.date), currentMonth)),
        [eventos, currentMonth]
    );

    const selectedDateEvents = useMemo(() =>
        eventosPorDia.get(selectedDate.toDateString()) || [],
        [eventosPorDia, selectedDate]
    );

    const monthName = useMemo(() =>
        format(currentMonth, 'MMMM yyyy', { locale: ptBR }),
        [currentMonth]
    );

    const nextMonth = useCallback(() => setCurrentMonth(addMonths(currentMonth, 1)), [currentMonth]);
    const prevMonth = useCallback(() => setCurrentMonth(subMonths(currentMonth, 1)), [currentMonth]);

    const onDateClick = useCallback((day) => {
        setSelectedDate(day);
    }, []);

    const handleEventClick = useCallback((event) => {
        setExpandedEvent(event);
    }, []);

    const closeModal = useCallback(() => {
        setExpandedEvent(null);
    }, []);

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                closeModal();
            }
        }

        if (expandedEvent) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [expandedEvent, closeModal]);

    return (
        <div className="w-full bg-gradient-to-br from-orquideaLilas-100 to-azulArpoador-100 py-12">
            <h2 className="text-3xl md:text-5xl font-bold text-azulArpoador-300 mb-8 text-center drop-shadow-md z-10">
                Nossos próximos eventos
            </h2>
            <div className="flex flex-col lg:flex-row gap-8 p-6 w-auto max-w-7xl mx-auto ">
                {/* Coluna do Calendário */}
                <div className="lg:w-1/2 w-full">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-orquideaLilas-200">
                        <CalendarHeader
                            currentMonth={currentMonth}
                            onPrevMonth={prevMonth}
                            onNextMonth={nextMonth}
                        />
                        <CalendarDayNames />
                        <CalendarGrid
                            monthStart={monthStart}
                            monthDays={monthDays}
                            selectedDate={selectedDate}
                            currentMonth={currentMonth}
                            eventsMap={eventosPorDia}
                            onDateClick={onDateClick}
                            onEventClick={handleEventClick}
                        />
                        <SelectedDateEvents
                            selectedDate={selectedDate}
                            events={selectedDateEvents}
                            onEventClick={handleEventClick}
                        />
                    </div>
                </div>
        
                {/* Coluna da Lista de Eventos */}
                <div className="lg:w-1/2 w-full">
                    <MonthEventsList
                        events={eventosDoMes}
                        monthName={monthName}
                        onEventClick={handleEventClick}
                    />
                </div>
                {/* Modal de Evento Expandido */}
                <AnimatePresence>
                    {expandedEvent && (
                        <EventModal
                            event={expandedEvent}
                            onClose={closeModal}
                        />
                    )}
                </AnimatePresence>
            </div>
        </div>


    );
};

export default React.memo(Calendario);