import { format } from "date-fns";
import { ptBR } from "date-fns/locale";


const CalendarHeader = ({ currentMonth, onPrevMonth, onNextMonth }) => {
    return (
        <div className="flex flex-row items-center justify-between p-4 border-b border-orquideaLilas-200 bg-gradient-to-r from-orquideaLilas-100 to-azulArpoador-100">
            <button
                onClick={onPrevMonth}
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
                onClick={onNextMonth}
                className="p-2 rounded-full hover:bg-orquideaLilas-200 transition-colors text-orquideaLilas-500"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

export default CalendarHeader;