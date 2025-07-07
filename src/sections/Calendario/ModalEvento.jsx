import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { motion } from "framer-motion";


const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);
const EventModal = ({ event, onClose }) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 h-full w-full z-10"
                onClick={onClose}
            />

            <div className="fixed inset-0 grid place-items-center z-[100]">
                <motion.div
                    layoutId={`event-${event.id}`}
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
                            onClose();
                        }}
                        className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors z-[1000] shadow-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <CloseIcon />
                    </motion.button>

                    <motion.div className="w-full h-64  bg-[url('/imgs/tl5.jpg')] bg-cover bg-center flex items-center justify-center">
                        <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                    </motion.div>

                    <div className="p-6 space-y-4">
                        <div className="flex items-center gap-2">
                            <div className={`h-4 w-4 rounded-full ${event.color || 'bg-azulArpoador-300'}`} />
                            <span className="text-sm text-orquideaLilas-500">
                                {format(parseISO(event.date), 'PPPPp', { locale: ptBR })}
                            </span>
                        </div>

                        <div className="text-neutral-600">
                            {event.description || "Descrição detalhada do evento será exibida aqui."}
                        </div>

                        <button
                            className="w-full py-3 bg-verdeEsmeralda-300 text-white rounded-lg font-medium hover:bg-verdeEsmeralda-400 transition-colors"
                            onClick={() => {
                                alert(`Inscrição para ${event.title} confirmada!`);
                            }}
                        >
                            Quero me inscrever!
                        </button>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default EventModal;