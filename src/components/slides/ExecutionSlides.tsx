import React from "react"
import { SlideProps } from "../../types"
import { ArrowUpRight } from "lucide-react"

export function GanttSlide({ data }: SlideProps) {
  const { titulo } = data.content_slots
  
  return (
    <div className="w-full h-full bg-zinc-950 flex flex-col text-white p-14 overflow-y-auto">
      <div className="flex items-center gap-3 mb-6">
        <ArrowUpRight className="w-8 h-8 text-red-600" />
        <h2 className="text-3xl font-bold">{titulo}</h2>
      </div>

      <div className="flex-1 border border-zinc-800 rounded-xl overflow-hidden flex flex-col bg-zinc-900">
        <div className="flex bg-red-600 font-bold text-xs">
          <div className="w-[45%] p-3 border-r border-red-700/50 uppercase tracking-widest">
            Ação / Etapa do Projeto
          </div>
          <div className="w-[20%] p-3 text-center border-r border-red-700/50">RESPONSÁVEL</div>
          <div className="flex-1 flex">
            {[1,2,3,4,5,6].map(w => (
              <div key={w} className="flex-1 p-3 text-center border-r border-red-700/50 last:border-0">W{w}</div>
            ))}
          </div>
        </div>

        {[
          { 
            phase: "Fase 1: Onboarding & Setup de Acessos", 
            tasks: [
              "Coleta de acessos ao Gerenciador de Anúncios e Google", 
              "Mapeamento de números de WhatsApp e canais das 3 lojas", 
              "Configuração de rastreamento e alinhamento com CRM Kanban"
            ] 
          },
          { 
            phase: "Fase 2: Roteirização, Captação & Subida de Mídia", 
            tasks: [
              "Elaboração dos scripts de Shineray Jet e Negativados (V4)", 
              "Captação bruta dos vídeos e fotos na loja física (Garantida)", 
              "Edição, aprovação final e lançamento das campanhas (V4)"
            ] 
          },
          { 
            phase: "Fase 3: Otimização Contínua & Acompanhamento Comercial", 
            tasks: [
              "Otimização diária de CPL e distribuição de verba por loja", 
              "Reuniões semanais de acompanhamento de vendas e CRM", 
              "Fechamento mensal de dashboard, CAC e calibragem de metas"
            ] 
          }
        ].map((block, i) => (
          <div key={i} className="flex flex-col">
            <div className="bg-red-950/30 text-red-400 font-bold text-[11px] p-2 pl-4 border-y border-zinc-800 uppercase tracking-widest">
              {block.phase}
            </div>
            {block.tasks.map((task, j) => (
              <div key={j} className="flex text-xs border-b border-zinc-800/50 last:border-0 hover:bg-zinc-800/50 transition-colors">
                <div className="w-[45%] p-3 border-r border-zinc-800/50 text-zinc-300">
                  {task}
                </div>
                <div className="w-[20%] p-3 text-center border-r border-zinc-800/50 text-zinc-400 text-[11px] flex items-center justify-center font-medium">
                  {i === 0 ? "V4 + Garantida" : i === 1 ? "V4 (Roteiro) + Loja (Gravação)" : "V4 + Time Comercial"}
                </div>
                <div className="flex-1 flex">
                  {[1,2,3,4,5,6].map(w => {
                    const isActive = (i === 0 && w <= 2) || (i === 1 && w >= 2 && w <= 3) || (i === 2 && w >= 3)
                    return (
                      <div key={w} className="flex-1 p-3 border-r border-zinc-800/50 last:border-0 flex items-center justify-center">
                        {isActive ? (
                          <div className="w-3 h-3 bg-red-600 rounded-sm shadow-sm" />
                        ) : (
                          <div className="w-2.5 h-2.5 bg-zinc-800 rounded-sm border border-zinc-700" />
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function MediaPlanSlide({ data }: SlideProps) {
  const { titulo, orcamento, cenarios, alcance_estimado } = data.content_slots
  
  return (
    <div className="w-full h-full bg-zinc-950 flex flex-col text-white p-14 overflow-y-auto">
      <div className="flex items-center gap-3 mb-6">
        <ArrowUpRight className="w-8 h-8 text-red-600" />
        <h2 className="text-3xl font-bold">{titulo}</h2>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center text-sm tracking-wider">
          GARANTIDA MOTOS
        </div>
        <div className="flex-1 flex bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden divide-x divide-zinc-800">
          {[
            { label: "Segmento", val: "Motos Novas & Seminovas" },
            { label: "Investimento Mídia", val: orcamento || "R$ 4.000 / mês" },
            { label: "Escopo", val: "3 Lojas (Teresina, Timon, São Miguel)" },
            { label: "Fase", val: "Calibragem (Até Dezembro)" }
          ].map(m => (
            <div key={m.label} className="flex-1 p-2.5 px-4 flex flex-col justify-center">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{m.label}</span>
              <span className="font-bold text-xs text-zinc-200">{m.val}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {cenarios?.map((c: any, i: number) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex flex-col items-center text-center justify-between">
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">{c.nome}</span>
            <span className="text-3xl font-black text-white mb-2">{c.pedidos}</span>
            <div className="bg-zinc-950 px-4 py-1.5 rounded-lg text-xs font-mono text-zinc-300 border border-zinc-800 w-full">
              {c.cpa}
            </div>
          </div>
        ))}
      </div>

      {alcance_estimado && (
        <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl text-xs text-zinc-400 leading-relaxed">
          <strong className="text-white block mb-1">Capacidade de Geração de Demanda:</strong>
          {alcance_estimado}
        </div>
      )}
    </div>
  )
}
