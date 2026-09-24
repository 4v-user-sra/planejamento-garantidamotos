import React from "react"
import { SlideProps } from "../../types"
import { InsightCard } from "../ui/InsightCard"
import { Target, ArrowRight } from "lucide-react"

export function PillarsSlide({ data }: SlideProps) {
  const { titulo, pilar_1_nome, pilar_1_texto, pilar_2_nome, pilar_2_texto, pilar_3_nome, pilar_3_texto, features } = data.content_slots
  
  const pilares = features ? features.map((f: any) => ({ nome: f.titulo, texto: f.descricao })) : [
    { nome: pilar_1_nome, texto: pilar_1_texto },
    { nome: pilar_2_nome, texto: pilar_2_texto },
    { nome: pilar_3_nome, texto: pilar_3_texto },
  ]

  return (
    <div className="w-full h-full bg-zinc-950 flex flex-col text-white p-14 overflow-y-auto">
      <h2 className="text-3xl font-bold mb-10 max-w-3xl leading-tight">{titulo}</h2>

      <div className="flex-1 flex gap-6">
        {pilares.map((pilar, idx) => (
          <div key={idx} className="flex-1 flex flex-col">
            <div className="bg-red-600 text-white font-bold py-3 px-4 rounded-t-xl text-center uppercase tracking-wider text-xs shadow-lg">
              {pilar.nome}
            </div>
            <div className="flex-1 bg-zinc-900 border-2 border-red-600/60 border-t-0 rounded-b-xl p-6 flex items-center shadow-inner">
              <p className="text-zinc-300 text-sm leading-relaxed text-justify">
                {pilar.texto}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SmartGoalSlide({ data }: SlideProps) {
  const { titulo, objetivo_geral, kr1_texto, kr2_texto } = data.content_slots
  
  const krs = [
    { num: 1, label: "KR 1 - Indicadores", text: kr1_texto },
    { num: 2, label: "KR 2 - Rentabilidade", text: kr2_texto }
  ]

  return (
    <div className="w-full h-full bg-zinc-950 flex flex-col text-white p-14 overflow-y-auto">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-3xl font-bold mb-3">{titulo}</h2>
        </div>
      </div>

      <div className="text-base text-zinc-200 leading-relaxed max-w-5xl mb-8 border-l-4 border-red-600 pl-6 bg-zinc-900/60 p-4 rounded-r-xl">
        {objetivo_geral}
      </div>

      <div className="flex-1 flex gap-6">
        {krs.map((kr, idx) => (
          <div key={idx} className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl p-5 pt-8 relative mt-4 flex flex-col">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 bg-red-600 rounded-full flex items-center justify-center font-bold text-sm shadow-lg shadow-red-900/50">
              {kr.num}
            </div>
            <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider text-center block mb-2">{kr.label}</span>
            <p className="text-zinc-300 text-xs text-center leading-relaxed">{kr.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function FunnelSlide({ data }: SlideProps) {
  const { titulo } = data.content_slots
  
  const columns = ["Aquisição (Mídia Paga)", "Atendimento (WhatsApp / CRM)", "Fechamento (Loja Física)"]
  const rows = ["Meta Ads", "Google Ads", "Remarketing & Feirão"]

  return (
    <div className="w-full h-full bg-zinc-950 flex flex-col text-white p-14">
      <div className="flex items-center gap-3 mb-8">
        <ArrowRight className="w-8 h-8 text-red-600 -rotate-45" />
        <h2 className="text-3xl font-bold">{titulo}</h2>
      </div>

      <div className="flex-1 flex flex-col relative pl-12">
        <div className="flex gap-4 mb-4">
          {columns.map(col => (
            <div key={col} className="flex-1 bg-red-600 text-center py-2.5 rounded-lg font-bold uppercase tracking-wider text-xs">
              {col}
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-col gap-3">
          {rows.map((row, idx) => (
            <div key={row} className="flex-1 flex gap-4 relative">
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-zinc-700 flex items-center justify-center font-bold text-xs text-zinc-400 bg-zinc-900">
                {idx + 1}
              </div>
              
              <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg p-3 flex flex-col items-center justify-center text-center">
                <span className="font-bold text-xs text-white">{row}</span>
                <span className="text-[10px] text-zinc-400 mt-1">Ofertas Shineray Jet & Negativados</span>
              </div>
              
              <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg p-3 flex flex-col items-center justify-center text-center">
                <span className="font-bold text-xs text-emerald-400">CRM Kanban (Joaquim)</span>
                <span className="text-[10px] text-zinc-400 mt-1">7 a 10 Vendedores nas 3 Lojas</span>
              </div>

              <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg p-3 flex flex-col items-center justify-center text-center">
                <span className="font-bold text-xs text-red-400">Conversão & Pós-Venda</span>
                <span className="text-[10px] text-zinc-400 mt-1">Test-ride, Contrato & Revisão</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
