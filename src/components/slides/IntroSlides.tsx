import React from "react"
import { SlideProps } from "../../types"
import { ArrowUpRight, ThumbsUp } from "lucide-react"

export function CoverSlide({ data }: SlideProps) {
  const { titulo_principal, subtitulo, data_apresentacao, logo_agencia, logo_cliente, legenda_rodape } = data.content_slots
  return (
    <div className="w-full h-full bg-zinc-950 flex relative overflow-hidden text-white">
      {/* Background image */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
        <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80" alt="Garantida Motos" className="w-full h-full object-cover opacity-40" />
      </div>
      
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent z-20" />

      <div className="relative z-20 flex flex-col justify-center p-16 w-2/3 h-full">
        <div className="text-red-500 font-bold tracking-widest text-xs uppercase mb-3">
          {logo_agencia || "V4 COMPANY"}
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight max-w-2xl text-white mb-4">
          {titulo_principal || "Planejamento Estratégico de Marketing & Vendas"}
        </h1>
        <h2 className="text-2xl font-light text-zinc-300 italic mb-8">
          {subtitulo || "Garantida Motos"}
        </h2>
        
        <div className="mt-auto">
          <div className="text-zinc-500 font-semibold tracking-wider text-xs mb-2 uppercase">Apresentado para</div>
          <div className="flex items-center gap-4">
            <div className="bg-red-600 text-white font-bold py-2 px-4 rounded text-sm tracking-wider uppercase">
              {logo_cliente || "GARANTIDA MOTOS"}
            </div>
            <span className="text-zinc-400 text-xs">{data_apresentacao || "Setembro 2026"}</span>
          </div>
        </div>
      </div>

      {legenda_rodape && (
        <div className="absolute bottom-6 left-0 w-full text-center text-zinc-500 text-xs z-20 tracking-wider">
          {legenda_rodape}
        </div>
      )}
    </div>
  )
}

export function TimelineSlide({ data }: SlideProps) {
  const { titulo, etapas_timeline, etapa_atual_destacada, label_fase_rodape, anotacoes_contextuais } = data.content_slots
  
  return (
    <div className="w-full h-full bg-zinc-950 flex flex-col relative text-white p-14 overflow-y-auto">
      <h2 className="text-3xl font-bold text-center mb-16 mt-4">{titulo}</h2>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="flex items-center gap-2 w-full max-w-4xl">
          {etapas_timeline?.map((etapa: string, index: number) => {
            const isCurrent = etapa === etapa_atual_destacada
            return (
              <React.Fragment key={index}>
                <div className={`relative flex flex-col items-center flex-1 ${isCurrent ? 'scale-105 z-10' : 'opacity-60'}`}>
                  {isCurrent && (
                    <div className="absolute -top-10 bg-zinc-800 text-red-400 text-[10px] py-1 px-3 rounded-full font-semibold border border-red-900/50 mb-2 whitespace-nowrap">
                      Você está aqui
                    </div>
                  )}
                  <div className={`
                    w-full py-3 px-2 text-center rounded font-bold text-xs
                    ${isCurrent ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)] ring-2 ring-red-500' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'}
                  `}>
                    {etapa}
                  </div>
                </div>
                {index < etapas_timeline.length - 1 && (
                  <div className="w-6 h-0.5 bg-zinc-800 shrink-0" />
                )}
              </React.Fragment>
            )
          })}
        </div>
      </div>

      <div className="mt-auto border-t border-zinc-800/80 pt-4 flex flex-col items-center gap-2 text-zinc-400 text-xs">
        <span>Fase: <strong className="text-red-400">{label_fase_rodape}</strong></span>
        {anotacoes_contextuais && (
          <p className="text-zinc-500 text-center max-w-2xl text-[11px]">{anotacoes_contextuais}</p>
        )}
      </div>
    </div>
  )
}

export function AgendaSlide({ data }: SlideProps) {
  const { titulo, itens_agenda } = data.content_slots
  
  return (
    <div className="w-full h-full bg-zinc-950 flex relative text-white p-14 overflow-y-auto">
      <div className="relative z-10 w-full max-w-3xl">
        <h2 className="text-4xl font-bold text-red-600 mb-8">{titulo}</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          {itens_agenda?.map((item: string, idx: number) => (
            <div key={idx} className="flex items-center gap-4 group">
              <span className="text-2xl font-light text-zinc-600 group-hover:text-red-500 transition-colors w-8">
                {(idx + 1).toString().padStart(2, '0')}
              </span>
              <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function DividerSlide({ data }: SlideProps) {
  const { titulo_secao } = data.content_slots
  
  return (
    <div className="w-full h-full bg-zinc-950 flex items-center relative text-white p-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80" alt="Background" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-4xl flex items-center gap-6">
        <ArrowUpRight className="w-16 h-16 text-red-600 shrink-0" />
        <h2 className="text-5xl font-bold text-white leading-tight">{titulo_secao}</h2>
      </div>
    </div>
  )
}

export function ClosingSlide({ data }: SlideProps) {
  const { titulo_encerramento, texto_cta } = data.content_slots
  
  return (
    <div className="w-full h-full bg-zinc-950 flex flex-col items-center justify-center relative text-white p-16 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center gap-8">
        <h2 className="text-5xl font-bold text-center tracking-tight">{titulo_encerramento || "Vamos Acelerar Juntos"}</h2>
        
        <div className="flex gap-4 items-center">
          <div className="bg-zinc-900 border border-zinc-800 p-3 px-6 rounded-xl font-bold text-sm tracking-wider uppercase">
            V4 COMPANY
          </div>
          <span className="text-red-500 font-bold text-xl">+</span>
          <div className="bg-red-600 text-white p-3 px-6 rounded-xl font-bold text-sm tracking-wider uppercase">
            GARANTIDA MOTOS
          </div>
        </div>

        <button className="mt-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-8 rounded-full flex items-center gap-3 text-sm transition-colors shadow-lg shadow-emerald-900/40">
          <ThumbsUp className="w-5 h-5" />
          {texto_cta || "Aprovar Planejamento & Iniciar Campanhas"}
        </button>
      </div>
    </div>
  )
}
