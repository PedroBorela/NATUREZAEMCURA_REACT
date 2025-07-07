const DAYS_OF_WEEK = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];


const CalendarDayNames = () => {
    return (
        <div className="grid grid-cols-7 gap-1 py-2 px-4 bg-orquideaLilas-100">
            {DAYS_OF_WEEK.map(day => (
                <div key={day} className="text-center text-sm font-medium text-orquideaLilas-500">
                    {day}
                </div>
            ))}
        </div>
    );
};

export default CalendarDayNames;