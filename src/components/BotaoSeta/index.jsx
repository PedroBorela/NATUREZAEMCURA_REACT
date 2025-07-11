import ShinyText from '../../blocks/TextAnimations/ShinyText/ShinyText'
import './BotaoSeta.css'

const BotaoSeta = ({ texto = "Saiba mais", referencia}) => {
  const irSecao =() =>{
    window.location.href = referencia
  }
  return (
    
    <button className="learn-more relative inline-block w-56 h-12 overflow-hidden p-0 border-none cursor-pointer bg-transparent font-inherit text-inherit" onClick={irSecao} >
      <span className="circle absolute top-0 left-0 w-12 h-12 bg-[--orquideaLilas] rounded-full transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)]">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text absolute top-0 left-5 right-0 bottom-0 text-center text-[--orquideaLilas] font-bold uppercase leading-[1.6] px-0 py-3 transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)]">
       <ShinyText text={texto} speed={'2s'} > </ShinyText>
      </span>
    </button>
  )
}

export default BotaoSeta
