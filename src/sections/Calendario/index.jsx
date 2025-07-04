"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const Calendario = ({ eventos = [] }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [expandedEvent, setExpandedEvent] = useState(null);

    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
    

    const onDateClick = day => {
        setSelectedDate(day);
    };

    const getEventsForDate = date => {
        return eventos.filter(event => {
            try {
                return isSameDay(parseISO(event.date), date);
            } catch (e) {
                console.error('Erro ao processar data do evento:', event.date, e);
                return false;
            }
        });
    };

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                setExpandedEvent(null);
            }
        }

        if (expandedEvent) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [expandedEvent]);

    const renderHeader = () => {
        return (
            <div className="flex items-center justify-between py-4 px-6 border-b border-orquideaLilas-200 bg-gradient-to-r from-orquideaLilas-100 to-azulArpoador-100">
                <button
                    onClick={prevMonth}
                    className="p-2 rounded-full hover:bg-orquideaLilas-200 transition-colors text-orquideaLilas-500"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <h2 className="text-xl font-semibold text-orquideaLilas-500">
                    {format(currentMonth, 'MMMM yyyy', { locale: ptBR })}
                </h2>

                <button
                    onClick={nextMonth}
                    className="p-2 rounded-full hover:bg-orquideaLilas-200 transition-colors text-orquideaLilas-500"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        );
    };

    const renderDays = () => {
        const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
        return (
            <div className="grid grid-cols-7 gap-1 py-2 px-4 bg-orquideaLilas-100">
                {days.map(day => (
                    <div key={day} className="text-center text-sm font-medium text-orquideaLilas-500">
                        {day}
                    </div>
                ))}
            </div>
        );
    };

    const renderCells = () => {
        const startDay = monthStart.getDay();
        const emptyCells = Array(startDay).fill(null);

        return (
            <div className="grid grid-cols-7 gap-1 p-4 bg-gradient-to-br from-orquideaLilas-50 to-azulArpoador-50">
                {emptyCells.map((_, index) => (
                    <div key={`empty-${index}`} className="h-24 border rounded-lg bg-white opacity-50"></div>
                ))}

                {monthDays.map(day => {
                    const dayEvents = getEventsForDate(day);
                    const isSelected = isSameDay(day, selectedDate);
                    const isCurrentMonth = isSameMonth(day, currentMonth);

                    return (
                        <div
                            key={day.toString()}
                            onClick={() => onDateClick(day)}
                            className={`h-24 border rounded-lg p-1 overflow-y-auto cursor-pointer transition-all duration-200
                                ${isSelected ? 'ring-2 ring-verdeEsmeralda-300 bg-verdeEsmeralda-100 shadow-md' : 'hover:bg-orquideaLilas-100 hover:shadow-sm'}
                                ${!isCurrentMonth ? 'text-gray-400 bg-white opacity-70' : 'text-azulArpoador-500 bg-white'}`}
                        >
                            <div className={`text-right text-sm mb-1 ${isCurrentMonth ? 'font-medium' : 'font-light'}`}>
                                {format(day, 'd')}
                            </div>
                            <div className="space-y-1">
                                {dayEvents.map(event => (
                                    <motion.div
                                        key={event.id}
                                        layoutId={`event-${event.id}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setExpandedEvent(event);
                                        }}
                                        className={`text-xs p-1 rounded truncate text-white cursor-pointer ${event.color || 'bg-azulArpoador-300'
                                            }`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {event.title}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const renderSelectedDateEvents = () => {
        const selectedEvents = getEventsForDate(selectedDate);

        return (
            <div className="border-t border-orquideaLilas-200 p-6 bg-gradient-to-b from-orquideaLilas-50 to-white">
                <h3 className="text-lg font-semibold text-orquideaLilas-500 mb-4">
                    Eventos em {format(selectedDate, 'PPPP', { locale: ptBR })}
                </h3>

                {selectedEvents.length > 0 ? (
                    <div className="space-y-3">
                        {selectedEvents.map(event => (
                            <motion.div
                                key={event.id}
                                layoutId={`event-${event.id}`}
                                onClick={() => setExpandedEvent(event)}
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

    return (
        <>
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border m-5 border-orquideaLilas-200">
                {renderHeader()}
                {renderDays()}
                {renderCells()}
                {renderSelectedDateEvents()}
            </div>

            {/* Modal de Evento Expandido */}
            <AnimatePresence>
                {expandedEvent && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 h-full w-full z-10"
                            onClick={() => setExpandedEvent(null)}
                        />

                        <div className="fixed inset-0 grid place-items-center z-[100]">
                            <motion.div
                                layoutId={`event-${expandedEvent.id}`}
                                className="w-full max-w-[500px] h-fit max-h-[90vh] flex flex-col bg-white rounded-3xl overflow-hidden relative"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                            >

                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setExpandedEvent(null);
                                    }}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors z-[1000] shadow-sm"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </motion.button>

                                <motion.div className="w-full h-64 bg-gradient-to-r from-orquideaLilas-300 to-azulArpoador-300 flex items-center justify-center">
                                    <h3 className="text-2xl font-bold text-white">{expandedEvent.title}</h3>
                                </motion.div>

                                <div className="p-6 space-y-4">
                                    <div className="flex items-center gap-2">
                                        <div className={`h-4 w-4 rounded-full ${expandedEvent.color || 'bg-azulArpoador-300'}`} />
                                        <span className="text-sm text-orquideaLilas-500">
                                            {format(parseISO(expandedEvent.date), 'PPPPp', { locale: ptBR })}
                                        </span>
                                    </div>

                                    <div className="text-neutral-600">
                                        {expandedEvent.description || "Descrição detalhada do evento será exibida aqui."}
                                    </div>

                                    <button
                                        className="w-full py-3 bg-verdeEsmeralda-300 text-white rounded-lg font-medium hover:bg-verdeEsmeralda-400 transition-colors"
                                        onClick={() => {
                                            // Lógica de inscrição
                                            alert(`Inscrição para ${expandedEvent.title} confirmada!`);
                                        }}
                                    >
                                        Quero me inscrever!
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export default Calendario;