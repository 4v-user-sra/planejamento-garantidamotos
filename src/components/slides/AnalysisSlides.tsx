import React from "react"
import { SlideProps } from "../../types"
import { InsightCard } from "../ui/InsightCard"
import { ArrowUpRight, AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react"

export function DiagnosticSlide({ data }: SlideProps) {
  const { titulo_slide, insights_estruturados, insights_bullets } = data.content_slots
  
  const formattedInsights = insights_estruturados ? insights_estruturados.map((ins: any) => `${ins.titulo ? ins.titulo + ': ' : ''}${ins.texto}`) : (insights_bullets || [])

  return (
    <div className="w-full h-full bg-zinc-950 flex flex-col text-white p-16">
      <div className="flex items-center gap-3 mb-10">
        <ArrowUpRight className="w-8 h-8 text-red-600" />
        <h2 className="text-3xl font-bold">{titulo_slide}</h2>
      </div>

      <div className="flex-1 flex gap-8">
        <div className="flex-1 bg-zinc-900 rounded-xl border border-zinc-800 p-8 flex flex-col items-center justify-center relative overflow-hidden">
          {data.content_slots.imagem_url ? (
            <img src={data.content_slots.imagem_url} alt="Diagnóstico" className="w-full h-full object-cover rounded opacity-85" />
          ) : (
            <div className="w-3/4 h-3/4 bg-zinc-800 rounded shadow-xl border border-zinc-700 flex items-center justify-center text-zinc-500 font-semibold">
              [ Diagnóstico Operacional Garantida Motos ]
            </div>
          )}
        </div>
        
        <div className="w-[45%]">
          <InsightCard insights={formattedInsights} className="h-full" />
        </div>
      </div>
    </div>
  )
}

export function PersonaSlide({ data }: SlideProps) {
  const { numero_persona, nome_persona, local, idade, profissao, renda, genero, dispositivo, canais, dores_bullets, desejos_bullets, objecoes_bullets } = data.content_slots

  return (
    <div className="w-full h-full bg-zinc-950 flex flex-col text-white p-12 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-zinc-400 uppercase tracking-widest text-xs font-bold">Persona {numero_persona} • Perfil do Cliente</h2>
        <span className="text-red-500 font-mono text-xs font-bold">Garantida Motos</span>
      </div>

      <div className="flex-1 flex gap-8">
        {/* Left Card: Demographic Profile */}
        <div className="w-1/3 bg-zinc-900 rounded-2xl border border-zinc-800 p-6 flex flex-col items-center text-center justify-between">
          <div className="w-24 h-24 rounded-full bg-zinc-800 mb-4 border-2 border-red-600 shadow-lg flex items-center justify-center overflow-hidden">
            <img 
              src={numero_persona === "1" ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" : "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"} 
              alt="Persona" 
              className="w-full h-full object-cover grayscale opacity-90" 
            />
          </div>
          <h3 className="text-xl font-bold text-red-500 mb-4 leading-tight">{nome_persona}</h3>
          
          <div className="w-full flex flex-col gap-2">
            {[
              { label: "Local", value: local },
              { label: "Idade", value: idade },
              { label: "Profissão", value: profissao },
              { label: "Renda", value: renda },
              { label: "Canais", value: canais }
            ].map((attr, i) => (
              <div key={i} className="flex justify-between bg-zinc-950 rounded px-3 py-2 text-xs">
                <span className="text-zinc-500">{attr.label}</span>
                <span className="font-semibold text-zinc-300 text-right">{attr.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content: Dores, Desejos e Objeções alinhados verticalmente */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-red-400 font-bold uppercase text-xs tracking-wider">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span>Dores</span>
            </div>
            <ul className="flex flex-col gap-1.5 pl-2">
              {dores_bullets?.map((item: string, j: number) => (
                <li key={j} className="flex items-start gap-2 text-zinc-300 text-xs leading-relaxed">
                  <span className="text-red-500 font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase text-xs tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Desejos</span>
            </div>
            <ul className="flex flex-col gap-1.5 pl-2">
              {desejos_bullets?.map((item: string, j: number) => (
                <li key={j} className="flex items-start gap-2 text-zinc-300 text-xs leading-relaxed">
                  <span className="text-emerald-500 font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold uppercase text-xs tracking-wider">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>Objeções de Compra</span>
            </div>
            <ul className="flex flex-col gap-1.5 pl-2">
              {objecoes_bullets?.map((item: string, j: number) => (
                <li key={j} className="flex items-start gap-2 text-zinc-300 text-xs leading-relaxed">
                  <span className="text-amber-500 font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export function MoodboardSlide({ data }: SlideProps) {
  const { titulo, tipografia_principal, tipografia_secundaria, paleta_cores } = data.content_slots
  
  return (
    <div className="w-full h-full bg-zinc-50 flex flex-col text-zinc-950 p-16">
      <h2 className="text-3xl font-bold mb-10 text-center">{titulo}</h2>

      <div className="flex-1 flex gap-12">
        <div className="w-[40%] flex flex-col gap-8">
          <div>
            <div className="w-48 h-14 bg-red-600 text-white font-black rounded flex items-center justify-center text-lg tracking-wider mb-2">
              GARANTIDA MOTOS
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-3">Tipografia</h4>
            <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm flex flex-col gap-4">
              <div>
                <div className="text-xs text-zinc-400 mb-1">Principal</div>
                <div className="text-2xl font-black text-zinc-900">{tipografia_principal}</div>
              </div>
              <div className="w-full h-px bg-zinc-100" />
              <div>
                <div className="text-xs text-zinc-400 mb-1">Secundária</div>
                <div className="text-xl font-bold text-zinc-700">{tipografia_secundaria}</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-3">Cores</h4>
            <div className="flex gap-3">
              {paleta_cores?.map((hex: string, i: number) => (
                <div key={i} className="flex flex-col gap-1 items-center">
                  <div className="w-12 h-12 rounded-full shadow-sm border border-black/10" style={{ backgroundColor: hex }} />
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">{hex}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4">
          {[
            "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1571188654248-7a89213915f7?auto=format&fit=crop&w=500&q=80"
          ].map((url, i) => (
            <div key={i} className="bg-zinc-200 rounded-xl overflow-hidden border border-zinc-300 relative shadow-sm">
              <img src={url} alt="Ref" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function BenchmarkSlide({ data }: SlideProps) {
  const { titulo, subtitulo, nome_concorrente, insights_estruturados, insights_bullets } = data.content_slots
  const formattedInsights = insights_estruturados ? insights_estruturados.map((ins: any) => `${ins.titulo ? ins.titulo + ': ' : ''}${ins.texto}`) : (insights_bullets || [])

  return (
    <div className="w-full h-full bg-zinc-950 flex flex-col text-white p-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">{titulo}</h2>
        {subtitulo && <p className="text-zinc-400 text-sm mt-1">{subtitulo}</p>}
      </div>

      <div className="flex-1 flex gap-8">
        <div className="flex-1 bg-zinc-900 rounded-xl border border-zinc-800 p-8 flex flex-col gap-6 overflow-hidden justify-center items-center">
          <div className="text-center">
            <span className="text-red-500 font-bold text-xs uppercase tracking-widest block mb-2">Concorrência Regional</span>
            <h3 className="text-2xl font-bold text-white">{nome_concorrente || "Mercado Concorrente"}</h3>
          </div>
        </div>
        
        <div className="w-[45%]">
          <InsightCard insights={formattedInsights} className="h-full" />
        </div>
      </div>
    </div>
  )
}
