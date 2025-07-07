import { motion } from "framer-motion";

import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
const MonthEventsList = ({ events, monthName, onEventClick }) => {
    return (
        <div className="bg-verdeEsmeralda-100 rounded-xl shadow-lg overflow-hidden border border-orquideaLilas-200 p-6">
            <h2 className="text-xl font-semibold text-orquideaLilas-500 mb-6">
                Eventos de {monthName}
            </h2>

            {events.length > 0 ? (
                <div className="space-y-4">
                    {events.map(event => (
                        <motion.div
                            key={event.id}
                            whileHover={{ scale: 1.01 }}
                            className="p-4 rounded-lg border border-orquideaLilas-200 bg-white shadow-sm cursor-pointer"
                            onClick={() => onEventClick(event)}
                        >
                            <div className="flex items-start gap-3">
                                <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${event.color || 'bg-azulArpoador-300'}`} />
                                <div>
                                    <h3 className="font-medium text-azulArpoador-500">{event.title}</h3>
                                    <p className="text-sm text-orquideaLilas-400 mt-1">
                                        {format(parseISO(event.date), 'PPPPp', { locale: ptBR })}
                                    </p>
                                    {event.description && (
                                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                                            {event.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <p className="text-orquideaLilas-400">Nenhum evento agendado para este mês.</p>
            )}
        </div>
    );
};

export default MonthEventsList;