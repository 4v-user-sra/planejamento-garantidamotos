import React, { useState } from "react"
import { presentationData } from "../data"
import { 
  ArrowUpRight, Target, Lightbulb, CheckCircle2, ChevronRight, 
  FileSpreadsheet, FileText, Video, Rocket, ExternalLink, 
  AlertTriangle, DollarSign, Users, MessageSquare, PhoneCall,
  Store, BarChart2, TrendingUp, ShieldCheck, Flame, RefreshCw
} from "lucide-react"

const themeMap: Record<string, string> = {
  "01_capa": "bg-zinc-950 text-zinc-300 border-zinc-900",
  "02_recapitulando_jornada": "bg-zinc-200 text-zinc-900 border-zinc-300",
  "03_sumario": "bg-white text-zinc-900 border-zinc-200",
  "04_divisor_secao_1": "bg-zinc-900 text-zinc-100 border-zinc-800",
  "05_analise_social": "bg-zinc-50 text-zinc-900 border-zinc-200",
  "06_analise_site": "bg-zinc-100 text-zinc-900 border-zinc-200",
  "07_analise_meta": "bg-white text-zinc-900 border-zinc-200",
  "08_diferenciais": "bg-zinc-950 text-zinc-300 border-zinc-900",
  "09_divisor_secao_2": "bg-zinc-900 text-zinc-100 border-zinc-800",
  "10_benchmarking_1": "bg-zinc-50 text-zinc-900 border-zinc-200",
  "11_benchmarking_2": "bg-white text-zinc-900 border-zinc-200",
  "12_moodboard": "bg-zinc-200 text-zinc-900 border-zinc-300",
  "14_persona_1": "bg-zinc-900 text-zinc-300 border-zinc-800",
  "15_persona_2": "bg-zinc-950 text-zinc-300 border-zinc-900",
  "17_objetivo_smart": "bg-black text-zinc-300 border-zinc-900",
  "13_estrategia": "bg-white text-zinc-900 border-zinc-200",
  "13_estrategia_campanhas": "bg-zinc-50 text-zinc-900 border-zinc-200",
  "21_criativos": "bg-zinc-100 text-zinc-900 border-zinc-200",
  "18_drawflow_funil": "bg-zinc-900 text-zinc-100 border-zinc-800",
  "19_cronograma": "bg-white text-zinc-900 border-zinc-200",
  "20_plano_midia": "bg-zinc-50 text-zinc-900 border-zinc-200"
}

function getSectionTheme(id: string, type: string) {
  if (themeMap[id]) return themeMap[id]
  if (['competitor_benchmark', 'campaign_strategy_boxes'].includes(type)) return 'bg-zinc-100 text-zinc-900 border-zinc-200'
  if (['moodboard_identity', 'spreadsheet_placeholder'].includes(type)) return 'bg-white text-zinc-900 border-zinc-200'
  if (['process_timeline', 'funnel_flow_diagram', 'visual_drawflow'].includes(type)) return 'bg-black text-zinc-300 border-zinc-900'
  if (['smart_goal_okr'].includes(type)) return 'bg-zinc-900 text-zinc-300 border-zinc-800'
  return 'bg-zinc-950 text-zinc-300 border-zinc-900'
}

function SectionWrapper({ children, themeClass }: { children: React.ReactNode; themeClass: string }) {
  return (
    <section className={`w-full min-h-[60vh] flex flex-col justify-center px-8 md:px-24 py-24 ${themeClass} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12">
        {children}
      </div>
    </section>
  )
}

function HistoricalSalesPerformanceChart({ isLight }: { isLight: boolean }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  const data = [
    { mes: "Mar", motos: 100, fat: "R$ 1.000.000", invest: "R$ 9.000", obs: "Pico histórico da Garantida com 100 motos vendidas e marketing ativo" },
    { mes: "Abr", motos: 65, fat: "R$ 680.000", invest: "R$ 6.500", obs: "Primeira mudança de equipe de marketing e início da oscilação" },
    { mes: "Mai", motos: 42, fat: "R$ 480.000", invest: "R$ 4.000", obs: "Queda no tráfego pago e descontinuidade nas campanhas" },
    { mes: "Jun", motos: 35, fat: "R$ 400.000", invest: "R$ 3.500", obs: "Nova troca de agência sem alinhamento operacional" },
    { mes: "Jul", motos: 30, fat: "R$ 350.000", invest: "R$ 3.000", obs: "Tráfego tímido e sem estratégia regional para as lojas" },
    { mes: "Ago", motos: 70, fat: "R$ 720.000", invest: "R$ 3.500", obs: "Matriz bateu 52 vendas impulsionada por Feirão interno presencial" },
    { mes: "Set", motos: 25, fat: "R$ 300.000", invest: "R$ 0 (Inativo)", obs: "Tráfego 100% inativo (demissão anterior); captação apenas por balcão/indicação" }
  ]

  const maxMotos = 120
  const svgWidth = 860
  const svgHeight = 280
  const paddingLeft = 55
  const paddingRight = 65
  const paddingTop = 35
  const paddingBottom = 45

  const plotWidth = svgWidth - paddingLeft - paddingRight
  const plotHeight = svgHeight - paddingTop - paddingBottom

  const getX = (index: number) => paddingLeft + (index + 0.5) * (plotWidth / data.length)
  const getYMotos = (val: number) => paddingTop + plotHeight - (val / maxMotos) * plotHeight

  const breakEvenMotos = 48
  const yBreakEven = getYMotos(breakEvenMotos)

  return (
    <div className={`w-full rounded-2xl border ${isLight ? 'bg-white border-zinc-200' : 'bg-zinc-900/90 border-zinc-800'} p-6 shadow-xl`}>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b pb-4 border-zinc-200 dark:border-zinc-800">
        <div>
          <div className="flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-red-600" />
            <h3 className={`text-lg font-bold ${isLight ? 'text-zinc-900' : 'text-zinc-100'}`}>
              Evolução Histórica de Vendas de Motos (Março a Setembro)
            </h3>
          </div>
          <p className={`text-xs mt-1 ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
            Impacto direto do tráfego pago ativo vs. inatividade no faturamento mensal
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-5 text-xs font-semibold">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded bg-red-600 shadow-sm" />
            <span className={isLight ? 'text-zinc-700' : 'text-zinc-300'}>Motos Vendidas (Volume)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 border-b-2 border-dashed border-amber-500" />
            <span className="text-amber-600 dark:text-amber-400 font-bold">Ponto de Equilíbrio: 48 Motos</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 border-b-2 border-dashed border-emerald-500" />
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">Meta: 80-85 Motos</span>
          </div>
        </div>
      </div>

      {/* SVG Chart */}
      <div className="relative w-full overflow-x-auto">
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto min-w-[650px] font-sans">
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((val) => {
            const y = getYMotos(val)
            return (
              <g key={val}>
                <line
                  x1={paddingLeft}
                  y1={y}
                  x2={svgWidth - paddingRight}
                  y2={y}
                  stroke={isLight ? '#f1f5f9' : '#27272a'}
                  strokeWidth="1"
                />
                <text
                  x={paddingLeft - 10}
                  y={y + 4}
                  textAnchor="end"
                  fontSize="10"
                  fill={isLight ? '#94a3b8' : '#71717a'}
                  fontWeight="600"
                >
                  {val}
                </text>
              </g>
            )
          })}

          {/* Reference Line for Break-even (48 motos) */}
          <line
            x1={paddingLeft}
            y1={yBreakEven}
            x2={svgWidth - paddingRight}
            y2={yBreakEven}
            stroke="#f59e0b"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <text
            x={svgWidth - paddingRight - 8}
            y={yBreakEven - 6}
            textAnchor="end"
            fontSize="10"
            fill="#f59e0b"
            fontWeight="bold"
          >
            Break-Even: 48 Motos (R$ 308k)
          </text>

          {/* Bars for Motos */}
          {data.map((d, i) => {
            const x = getX(i)
            const barWidth = 44
            const barHeight = (d.motos / maxMotos) * plotHeight
            const y = getYMotos(d.motos)
            const isHovered = hoveredIdx === i

            return (
              <g
                key={i}
                className="cursor-pointer transition-all duration-200"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <rect
                  x={x - barWidth / 2}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  rx="6"
                  fill={d.motos >= 70 ? '#dc2626' : d.motos >= 48 ? '#ea580c' : '#71717a'}
                  opacity={isHovered ? 1 : 0.85}
                  className="transition-opacity duration-200"
                />
                <text
                  x={x}
                  y={y - 6}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="bold"
                  fill={isLight ? '#1e293b' : '#f8fafc'}
                >
                  {d.motos}
                </text>
                <text
                  x={x}
                  y={svgHeight - 15}
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight={isHovered ? 'bold' : '600'}
                  fill={isHovered ? '#dc2626' : isLight ? '#475569' : '#a1a1aa'}
                >
                  {d.mes}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      {/* Hover details */}
      {hoveredIdx !== null ? (
        <div className={`mt-4 p-4 rounded-xl border transition-all ${isLight ? 'bg-red-50/80 border-red-200' : 'bg-red-950/30 border-red-900/50'} flex flex-col md:flex-row items-center justify-between gap-4`}>
          <div className="flex items-center gap-3">
            <span className="text-xl font-black text-red-600">{data[hoveredIdx].mes} 2026</span>
            <span className={`text-sm ${isLight ? 'text-zinc-600' : 'text-zinc-300'}`}>• {data[hoveredIdx].obs}</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-bold">
            <div>Vendas: <span className="text-red-600">{data[hoveredIdx].motos} Motos</span></div>
            <div>Faturamento: <span className="text-emerald-600">{data[hoveredIdx].fat}</span></div>
            <div>Mídia: <span className="text-amber-600">{data[hoveredIdx].invest}</span></div>
          </div>
        </div>
      ) : (
        <div className="mt-4 grid md:grid-cols-2 gap-3 text-xs leading-relaxed">
          <div className={`p-3 rounded-xl border ${isLight ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900' : 'bg-emerald-950/20 border-emerald-900/40 text-emerald-300'} flex items-start gap-2.5`}>
            <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong>Pico de Março (100 Motos / R$ 1M):</strong> Prova real de que a Garantida possui demanda reprimida, equipe comercial e tração quando há investimento contínuo em marketing.
            </div>
          </div>
          <div className={`p-3 rounded-xl border ${isLight ? 'bg-rose-50/80 border-rose-200 text-rose-900' : 'bg-rose-950/20 border-rose-900/40 text-rose-300'} flex items-start gap-2.5`}>
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <strong>Diagnóstico de Queda Recente (Setembro):</strong> 3 meses sem tráfego ativo e ausência de CRM estruturado deixaram a operação dependente apenas de indicações e feirões esporádicos.
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function RenderBlock({ slide }: { slide: any }) {
  const [expandedImage, setExpandedImage] = useState<string | null>(null)
  const type = slide.slide_type
  const d = slide.content_slots
  const themeClass = getSectionTheme(slide.id, type)
  const isLight = themeClass.includes('bg-white') || themeClass.includes('bg-zinc-50') || themeClass.includes('bg-zinc-100') || themeClass.includes('bg-zinc-200')

  const titleColor = isLight ? "text-zinc-900" : "text-white"
  const subtitleColor = isLight ? "text-zinc-600" : "text-zinc-400"
  const cardBg = isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-zinc-900 border-zinc-800"

  if (type === 'cover') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8">
        <div className="flex items-center gap-3">
          <span className="text-xl md:text-2xl font-serif text-zinc-400 tracking-widest uppercase">{d.logo_agencia}</span>
          <span className="text-zinc-500 font-light">•</span>
          <span className="text-xl md:text-2xl font-bold text-red-500 tracking-wider uppercase">{d.logo_cliente}</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white max-w-4xl leading-tight tracking-tight">
          {d.titulo_principal}
        </h1>
        <div className="h-px w-24 bg-red-600 my-8" />
        <h2 className="text-3xl md:text-4xl font-light text-zinc-300 font-serif italic">
          {d.subtitulo}
        </h2>
        <div className="pt-12 flex flex-col items-center gap-4 text-zinc-500">
          <p className="text-lg tracking-wide uppercase font-semibold text-zinc-400">{d.data_apresentacao}</p>
          <p className="max-w-xl text-sm leading-relaxed">{d.legenda_rodape}</p>
        </div>
      </div>
    )
  }

  if (type === 'process_timeline') {
    return (
      <div>
        <h2 className={`text-4xl font-bold ${titleColor} mb-16 text-center`}>{d.titulo}</h2>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 top-4 bottom-0 w-px bg-zinc-300 md:hidden" />
          <div className="absolute top-4 left-0 right-0 h-px bg-zinc-300 hidden md:block" />
          
          {d.etapas_timeline?.map((etapa: string, i: number) => {
            const isCurrent = etapa === d.etapa_atual_destacada
            return (
              <div key={i} className="relative z-10 flex flex-col items-center gap-4 flex-1 px-2 my-4 md:my-0">
                <div className="h-8 flex items-center justify-center">
                  <div className={`w-8 h-8 rounded-full border-4 flex items-center justify-center relative z-10 ${isCurrent ? 'border-red-600 bg-white' : 'border-zinc-300 bg-white'}`}>
                    {isCurrent && <div className="w-2 h-2 rounded-full bg-red-600" />}
                  </div>
                </div>
                <span className={`text-sm md:text-base font-medium text-center ${isCurrent ? 'text-red-600 font-bold' : subtitleColor}`}>
                  {etapa}
                </span>
              </div>
            )
          })}
        </div>
        <div className="mt-20 text-center">
          {d.label_fase_rodape && (
            <p className={`inline-block px-6 py-2 rounded-full ${isLight ? 'bg-red-100 text-red-700 border-red-200' : 'bg-red-950/30 text-red-400 border-red-900/50'} font-semibold text-sm`}>
              {d.label_fase_rodape}
            </p>
          )}
        </div>
      </div>
    )
  }

  if (type === 'agenda_toc') {
    return (
      <div className="flex flex-col md:flex-row gap-12 items-start max-w-5xl mx-auto w-full">
        <div className="w-full md:w-1/3 pt-4">
          <h2 className={`text-4xl font-bold ${titleColor} sticky top-32`}>{d.titulo}</h2>
        </div>
        <div className={`w-full md:w-2/3 flex flex-col gap-3 border-l ${isLight ? 'border-zinc-200' : 'border-zinc-800'} pl-8 md:pl-12`}>
          {d.itens_agenda?.map((item: string, i: number) => (
            <div key={i} className="flex gap-6 group items-center transition-colors">
              <span className="text-xl font-bold text-red-600 font-mono w-6 text-right opacity-80">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className={`text-xl font-medium ${titleColor} opacity-80 group-hover:opacity-100 transition-opacity`}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (type === 'section_divider') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
        <Target className="w-16 h-16 text-red-600 mb-8 opacity-80" />
        <h2 className={`text-5xl font-bold ${titleColor} max-w-3xl leading-tight`}>{d.titulo_secao}</h2>
      </div>
    )
  }

  if (type === 'diagnostic_analysis') {
    const isStackedLayout = slide.id === '06_analise_site' || slide.layout === 'stacked'
    const positivos = d.insights_estruturados?.filter((item: any) => item.tipo === 'positivo') || []
    const negativos = d.insights_estruturados?.filter((item: any) => item.tipo === 'negativo') || []

    if (isStackedLayout) {
      return (
        <div className="flex flex-col gap-8 w-full">
          <div>
            <h2 className={`text-4xl font-bold ${titleColor} mb-4`}>{d.titulo_slide}</h2>
            <div className="w-16 h-1 bg-red-600 mb-6" />
          </div>

          {(d.imagem_url || d.image_placeholder) && (
            <div className="w-full">
              <div className={`w-full rounded-2xl border-2 ${d.imagem_url ? (isLight ? 'border-zinc-200 shadow-xl' : 'border-zinc-800 shadow-2xl') : (isLight ? 'border-dashed border-zinc-300 bg-zinc-50' : 'border-dashed border-zinc-800 bg-zinc-900/50')} overflow-hidden flex items-center justify-center relative bg-zinc-100 dark:bg-zinc-900`}>
                {d.imagem_url ? (
                  <img 
                    src={d.imagem_url} 
                    alt={d.titulo_slide || "Diagnóstico Visual"} 
                    className="w-full h-auto object-cover max-h-[480px] object-top cursor-pointer transition-transform hover:scale-[1.01]" 
                    onClick={() => setExpandedImage(d.imagem_url)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-12 opacity-50 min-h-[250px]">
                    <Target className="w-12 h-12 mb-4" />
                    <p className="font-bold text-lg">{d.image_placeholder}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8 mt-2">
            {/* Coluna Positivos (Abaixo e à Esquerda) */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 pb-2 border-b border-emerald-500/30">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <h3 className={`text-sm font-bold uppercase tracking-wider ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>
                  Pontos Positivos
                </h3>
              </div>
              {positivos.map((insight: any, i: number) => (
                <div key={i} className={`flex items-start gap-4 p-5 rounded-2xl border ${isLight ? 'border-emerald-200 bg-emerald-50/80 shadow-sm' : 'border-emerald-900/50 bg-emerald-950/20'}`}>
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-1 text-emerald-500" />
                  <div>
                    {insight.titulo && <span className="font-bold text-emerald-700 dark:text-emerald-400 block mb-1 uppercase text-xs tracking-wider">{insight.titulo}</span>}
                    <p className={`text-sm md:text-base leading-relaxed ${titleColor}`}>{insight.texto}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Coluna Negativos (Abaixo e à Direita) */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 pb-2 border-b border-amber-500/30">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <h3 className={`text-sm font-bold uppercase tracking-wider ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>
                  Pontos Negativos & Oportunidades
                </h3>
              </div>
              {negativos.map((insight: any, i: number) => (
                <div key={i} className={`flex items-start gap-4 p-5 rounded-2xl border ${isLight ? 'border-amber-200 bg-amber-50/80 shadow-sm' : 'border-amber-900/50 bg-amber-950/20'}`}>
                  <AlertTriangle className="w-5 h-5 shrink-0 mt-1 text-amber-500" />
                  <div>
                    {insight.titulo && <span className="font-bold text-amber-700 dark:text-amber-400 block mb-1 uppercase text-xs tracking-wider">{insight.titulo}</span>}
                    <p className={`text-sm md:text-base leading-relaxed ${titleColor}`}>{insight.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {expandedImage && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12 animate-in fade-in duration-300"
              onClick={() => setExpandedImage(null)}
            >
              <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
                <img 
                  src={expandedImage} 
                  alt="Fullscreen" 
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300" 
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          )}
        </div>
      )
    }

    return (
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col h-full justify-center">
          <h2 className={`text-4xl font-bold ${titleColor} mb-6`}>{d.titulo_slide}</h2>
          <div className="w-16 h-1 bg-red-600 mb-8" />
          
          {(d.imagem_url || d.image_placeholder) && (
            <div className="flex flex-col gap-4">
              <div className={`mt-2 w-full rounded-2xl border-2 ${d.imagem_url ? (isLight ? 'border-zinc-200 shadow-xl' : 'border-zinc-800 shadow-2xl') : (isLight ? 'border-dashed border-zinc-300 bg-zinc-50' : 'border-dashed border-zinc-800 bg-zinc-900/50')} overflow-hidden flex items-center justify-center relative`}>
                {d.imagem_url ? (
                  <img 
                    src={d.imagem_url} 
                    alt="Diagnóstico Visual" 
                    className="w-full h-auto object-cover max-h-[420px] cursor-pointer transition-transform hover:scale-[1.02]" 
                    onClick={() => setExpandedImage(d.imagem_url)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-12 opacity-50 min-h-[250px]">
                    <Target className="w-12 h-12 mb-4" />
                    <p className="font-bold text-lg">{d.image_placeholder}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-5">
          {d.insights_estruturados?.map((insight: any, i: number) => {
            const isPositivo = insight.tipo === 'positivo'
            const Icon = isPositivo ? CheckCircle2 : AlertTriangle
            const iconColor = isPositivo ? 'text-emerald-500' : 'text-amber-500'
            const borderColor = isPositivo ? (isLight ? 'border-emerald-200 bg-emerald-50/80' : 'border-emerald-900/50 bg-emerald-950/20') : (isLight ? 'border-amber-200 bg-amber-50/80' : 'border-amber-900/50 bg-amber-950/20')
            
            return (
              <div key={i} className={`flex items-start gap-4 p-5 rounded-2xl border ${borderColor}`}>
                <Icon className={`w-6 h-6 shrink-0 mt-1 ${iconColor}`} />
                <div>
                  {insight.titulo && <span className={`font-bold ${iconColor} block mb-1 uppercase text-xs tracking-wider`}>{insight.titulo}</span>}
                  <p className={`text-base leading-relaxed ${titleColor}`}>{insight.texto}</p>
                </div>
              </div>
            )
          })}
        </div>

        {expandedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12 animate-in fade-in duration-300"
            onClick={() => setExpandedImage(null)}
          >
            <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
              <img 
                src={expandedImage} 
                alt="Fullscreen" 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300" 
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    )
  }

  if (type === 'meta_ads_analysis') {
    return (
      <div className="flex flex-col h-full gap-8">
        <h2 className={`text-4xl font-bold ${titleColor} mb-2`}>{d.titulo}</h2>
        
        {/* Top 3 KPI Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className={`${cardBg} p-6 rounded-2xl shadow-lg border-l-4 border-red-500 flex flex-col gap-2`}>
            <span className={`text-xs uppercase tracking-wider font-semibold ${subtitleColor}`}>Orçamento Aprovado</span>
            <span className="text-3xl font-black text-red-600">{d.investimento}</span>
            <span className="text-xs text-zinc-500">Teto inicial • 20 a 25 leads qualificados/dia</span>
          </div>
          <div className={`${cardBg} p-6 rounded-2xl shadow-lg border-l-4 border-emerald-500 flex flex-col gap-2`}>
            <span className={`text-xs uppercase tracking-wider font-semibold ${subtitleColor}`}>Pico Histórico de Vendas</span>
            <span className="text-3xl font-black text-emerald-600">100 Motos / Mês</span>
            <span className="text-xs text-emerald-600 font-semibold">R$ 1 Milhão faturados em Março</span>
          </div>
          <div className={`${cardBg} p-6 rounded-2xl shadow-lg border-l-4 border-amber-500 flex flex-col gap-2`}>
            <span className={`text-xs uppercase tracking-wider font-semibold ${subtitleColor}`}>CAC Histórico de Vendas</span>
            <span className="text-3xl font-black text-amber-600">{d.cpa_medio}</span>
            <span className="text-xs text-amber-600 font-semibold">Já considerando comissão de ~R$ 300</span>
          </div>
        </div>

        {/* Sales Performance Chart */}
        <HistoricalSalesPerformanceChart isLight={isLight} />

        {/* 2 Bottom Columns: O que Funcionou vs Desafios a Corrigir */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`${isLight ? 'bg-emerald-50' : 'bg-emerald-950/20'} p-8 rounded-2xl border border-emerald-200/50 flex flex-col`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-500 rounded-xl text-white shadow-md shadow-emerald-500/20">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400">O que funcionou (Pilares para Escalar)</h3>
                <p className={`text-xs ${subtitleColor}`}>Estratégias que geraram tração comprovada em vendas</p>
              </div>
            </div>
            <ul className="flex flex-col gap-4">
              {d.funcionou.map((item: string, i: number) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className={`text-sm leading-relaxed ${isLight ? 'text-zinc-700' : 'text-zinc-300'}`}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${isLight ? 'bg-red-50' : 'bg-red-950/20'} p-8 rounded-2xl border border-red-200/50 flex flex-col`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-500 rounded-xl text-white shadow-md shadow-red-500/20">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-700 dark:text-red-400">Gargalos Superados (Pontos Corrigidos)</h3>
                <p className={`text-xs ${subtitleColor}`}>Fatores que causaram a estagnação e queda de faturamento</p>
              </div>
            </div>
            <ul className="flex flex-col gap-4">
              {d.nao_funcionou.map((item: string, i: number) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  <span className={`text-sm leading-relaxed ${isLight ? 'text-zinc-700' : 'text-zinc-300'}`}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'vertical_feature_list') {
    return (
      <div>
        <h2 className={`text-4xl font-bold ${titleColor} text-center mb-16`}>{d.titulo}</h2>
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {d.features?.map((f: any, i: number) => (
            <div key={i} className={`p-8 rounded-2xl border ${cardBg} flex flex-col md:flex-row gap-8 items-start hover:border-red-500/50 transition-colors`}>
              <div className={`w-16 h-16 shrink-0 rounded-2xl ${isLight ? 'bg-zinc-100 border-zinc-200' : 'bg-zinc-950 border-zinc-800'} flex items-center justify-center shadow-inner`}>
                <span className="text-2xl font-bold text-red-600">0{i + 1}</span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className={`text-2xl font-bold ${titleColor}`}>{f.titulo}</h3>
                <p className={`text-base ${subtitleColor} leading-relaxed`}>{f.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (type === 'moodboard_identity') {
    return (
      <div>
        <h2 className={`text-4xl font-bold ${titleColor} mb-16 text-center`}>{d.titulo}</h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div>
              <h4 className={`text-xs font-bold ${isLight ? 'text-zinc-500' : 'text-zinc-400'} uppercase tracking-widest mb-4`}>Tipografia Principal</h4>
              <p className={`text-4xl font-sans font-black ${titleColor} mb-2`}>{d.tipografia_principal}</p>
              <p className={`text-xl font-sans ${subtitleColor}`}>Google Sans / Helvetica / Roboto</p>
            </div>
            <div>
              <h4 className={`text-xs font-bold ${isLight ? 'text-zinc-500' : 'text-zinc-400'} uppercase tracking-widest mb-4`}>Tipografia Secundária & Números</h4>
              <p className={`text-3xl font-mono font-bold ${titleColor} mb-2`}>{d.tipografia_secundaria}</p>
              <p className={`text-lg font-mono ${subtitleColor}`}>Clareza em Ofertas, Parcelas e Tabelas</p>
            </div>
          </div>
          <div>
            <h4 className={`text-xs font-bold ${isLight ? 'text-zinc-500' : 'text-zinc-400'} uppercase tracking-widest mb-6`}>Paleta de Cores Institucional</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {d.paleta_cores?.map((cor: string, i: number) => (
                <div key={i} className="flex flex-col gap-2">
                  <div 
                    className={`w-full aspect-square rounded-2xl shadow-inner border ${isLight ? 'border-zinc-200' : 'border-zinc-800'}`}
                    style={{ backgroundColor: cor }}
                  />
                  <span className={`text-xs font-mono ${subtitleColor} text-center uppercase`}>{cor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'persona_profile') {
    return (
      <div className={`p-8 md:p-12 rounded-3xl border ${cardBg}`}>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column: Demographic & Profile */}
          <div className="md:w-1/3">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${isLight ? 'bg-red-100' : 'bg-red-950/30'} text-red-500 font-bold mb-6 text-sm`}>
              <Target className="w-4 h-4" /> Persona {d.numero_persona}
            </div>
            <h2 className={`text-3xl font-bold ${titleColor} mb-6 leading-tight`}>{d.nome_persona}</h2>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <div className={`px-4 py-2 rounded-xl text-xs font-bold border ${isLight ? 'bg-zinc-100 border-zinc-200' : 'bg-zinc-900 border-zinc-800'}`}>
                <span className="text-zinc-500 block text-[10px] uppercase mb-0.5">Dispositivo</span>
                <span className={titleColor}>{d.dispositivo}</span>
              </div>
              <div className={`px-4 py-2 rounded-xl text-xs font-bold border ${isLight ? 'bg-zinc-100 border-zinc-200' : 'bg-zinc-900 border-zinc-800'}`}>
                <span className="text-zinc-500 block text-[10px] uppercase mb-0.5">Canais</span>
                <span className={titleColor}>{d.canais}</span>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className={`flex justify-between border-b ${isLight ? 'border-zinc-200' : 'border-zinc-800'} pb-2`}>
                <span className={subtitleColor}>Local</span>
                <span className={`font-semibold ${titleColor}`}>{d.local}</span>
              </div>
              <div className={`flex justify-between border-b ${isLight ? 'border-zinc-200' : 'border-zinc-800'} pb-2`}>
                <span className={subtitleColor}>Idade</span>
                <span className={`font-semibold ${titleColor}`}>{d.idade}</span>
              </div>
              <div className={`flex justify-between border-b ${isLight ? 'border-zinc-200' : 'border-zinc-800'} pb-2`}>
                <span className={subtitleColor}>Profissão</span>
                <span className={`font-semibold ${titleColor} text-right max-w-[180px]`}>{d.profissao}</span>
              </div>
              <div className={`flex justify-between border-b ${isLight ? 'border-zinc-200' : 'border-zinc-800'} pb-2`}>
                <span className={subtitleColor}>Renda</span>
                <span className={`font-semibold ${titleColor}`}>{d.renda}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dores, Desejos e Objeções alinhados verticalmente */}
          <div className="md:w-2/3 flex flex-col justify-center gap-6">
            {/* Dores */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-zinc-950 border-zinc-800'}`}>
              <h4 className="text-base font-bold text-red-500 mb-4 flex items-center gap-2 uppercase tracking-wider text-xs">
                <AlertTriangle className="w-4 h-4 text-red-500" /> Dores do Cliente
              </h4>
              <ul className="space-y-3">
                {d.dores_bullets?.map((item: string, i: number) => (
                  <li key={i} className={`flex gap-3 text-sm ${subtitleColor} leading-relaxed`}>
                    <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desejos */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-zinc-950 border-zinc-800'}`}>
              <h4 className="text-base font-bold text-emerald-500 mb-4 flex items-center gap-2 uppercase tracking-wider text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Desejos & Objetivos
              </h4>
              <ul className="space-y-3">
                {d.desejos_bullets?.map((item: string, i: number) => (
                  <li key={i} className={`flex gap-3 text-sm ${subtitleColor} leading-relaxed`}>
                    <span className="text-emerald-500 font-bold shrink-0 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Objeções de Compra */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-zinc-950 border-zinc-800'}`}>
              <h4 className="text-base font-bold text-amber-500 mb-4 flex items-center gap-2 uppercase tracking-wider text-xs">
                <Lightbulb className="w-4 h-4 text-amber-500" /> Objeções de Compra
              </h4>
              <ul className="space-y-3">
                {d.objecoes_bullets?.map((item: string, i: number) => (
                  <li key={i} className={`flex gap-3 text-sm ${subtitleColor} leading-relaxed`}>
                    <span className="text-amber-500 font-bold shrink-0 mt-0.5">•</span>
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

  if (type === 'smart_goal_okr') {
    return (
      <div className="p-10 md:p-12 rounded-3xl border border-red-900/50 bg-gradient-to-br from-zinc-950 via-zinc-900 to-red-950/30 shadow-2xl">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{d.titulo}</h2>
          <p className="text-lg md:text-xl text-zinc-200 leading-relaxed font-sans italic border-l-4 border-red-600 pl-6 py-2 text-left bg-black/30 rounded-r-xl">
            {d.objetivo_geral}
          </p>
        </div>

        {/* 2 Key Results Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-black/60 border border-red-900/40 p-6 rounded-2xl flex flex-col gap-3 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-lg bg-red-950 border border-red-800 text-red-400 font-black font-mono text-sm">KR 1</span>
              <span className="text-xs text-zinc-400 uppercase font-semibold">Indicadores</span>
            </div>
            <h4 className="text-base font-bold text-white">Métricas & Performance</h4>
            <p className="text-sm text-zinc-300 leading-relaxed">{d.kr1_texto}</p>
          </div>

          <div className="bg-black/60 border border-red-900/40 p-6 rounded-2xl flex flex-col gap-3 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-400 font-black font-mono text-sm">KR 2</span>
              <span className="text-xs text-zinc-400 uppercase font-semibold">Rentabilidade</span>
            </div>
            <h4 className="text-base font-bold text-white">Retorno sobre Investimento</h4>
            <p className="text-sm text-zinc-300 leading-relaxed">{d.kr2_texto}</p>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'campaign_strategy_boxes') {
    return (
      <div>
        <h2 className={`text-4xl font-bold ${titleColor} text-center mb-16`}>{d.titulo}</h2>
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {d.boxes?.map((box: any, i: number) => (
            <div key={i} className={`flex-1 ${cardBg} border rounded-2xl p-8 flex flex-col shadow-sm hover:-translate-y-1 transition-transform`}>
              <span className="text-5xl font-black text-red-600 mb-4">{box.percentual}</span>
              <h3 className={`text-2xl font-bold ${titleColor} mb-4`}>{box.nome}</h3>
              <p className={`text-base ${subtitleColor} leading-relaxed`}>{box.detalhes}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (type === 'creative_workflow') {
    const icons: any = { FileText, CheckCircle2, Video, Rocket }

    return (
      <div className="flex flex-col items-center max-w-4xl mx-auto w-full">
        <h2 className={`text-4xl font-bold ${titleColor} mb-4 text-center`}>{d.titulo}</h2>
        <p className={`text-lg ${subtitleColor} mb-16 text-center max-w-2xl`}>{d.subtitulo}</p>

        {/* Horizontal Workflow timeline */}
        <div className="flex flex-col md:flex-row items-center w-full justify-between relative mb-12 px-4">
          <div className={`hidden md:block absolute top-8 left-12 right-12 h-1 -translate-y-1/2 rounded-full ${isLight ? 'bg-zinc-200' : 'bg-zinc-800'} z-0`} />

          {d.passos?.map((passo: any, i: number) => {
            const Icon = icons[passo.icone] || FileText
            return (
              <div key={i} className="flex flex-col items-center text-center gap-4 group relative z-10 mb-8 md:mb-0 w-36">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border shadow-xl transition-all duration-300 group-hover:-translate-y-2 
                  ${isLight ? 'bg-white border-zinc-200 shadow-zinc-200/50' : 'bg-zinc-950 border-zinc-800 shadow-black/50'}`}>
                  <Icon className="w-7 h-7 text-red-500" />
                </div>
                <h4 className={`font-bold text-sm ${titleColor} leading-tight`}>{passo.titulo}</h4>
              </div>
            )
          })}
        </div>

        {/* Role breakdown note */}
        <div className={`w-full p-6 rounded-2xl border ${cardBg} grid md:grid-cols-2 gap-4 text-sm leading-relaxed`}>
          <div className="flex items-start gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-600 mt-1.5 shrink-0" />
            <div>
              <strong className={titleColor}>Papel da V4 Company:</strong>
              <p className={subtitleColor}>Criação de roteiros, argumentos de venda, design, edição dos criativos e gestão de tráfego com otimização diária.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
            <div>
              <strong className={titleColor}>Papel da Garantida Motos:</strong>
              <p className={subtitleColor}>Captação bruta nas lojas físicas com celular/microfone, atendimento imediato aos leads no WhatsApp e alimentação do CRM.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'visual_drawflow') {
    return (
      <div className="flex flex-col items-center py-8 w-full overflow-x-auto">
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className={`text-4xl font-bold ${titleColor}`}>{d.titulo}</h2>
            <p className={`text-base mt-2 ${subtitleColor}`}>{d.subtitulo || "Estrutura de aquisição, distribuição no CRM e conversão para as 3 lojas"}</p>
          </div>
        </div>
        
        <div className="min-w-[920px] w-full flex flex-col items-center relative">
          {/* Top Node */}
          <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border-2 border-zinc-700 text-white font-extrabold px-10 py-4 rounded-2xl flex items-center gap-3 shadow-2xl z-10">
            <DollarSign className="w-6 h-6 text-emerald-400" />
            <div className="flex flex-col text-left">
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">Orçamento Total de Mídia Paga</span>
              <span className="text-2xl text-emerald-400 font-black">R$ 4.000,00 / mês</span>
            </div>
          </div>

          <div className={`h-10 w-px ${isLight ? 'bg-zinc-300' : 'bg-zinc-700'}`} />
          <div className={`w-[85%] h-px ${isLight ? 'bg-zinc-300' : 'bg-zinc-700'}`} />
          
          <div className="flex w-[85%] justify-between">
            <div className={`h-10 w-px ${isLight ? 'bg-zinc-300' : 'bg-zinc-700'} relative`}>
              <ChevronRight className={`absolute -bottom-2 -left-2.5 w-5 h-5 ${isLight ? 'text-zinc-400' : 'text-zinc-500'} rotate-90`} />
            </div>
            <div className={`h-10 w-px ${isLight ? 'bg-zinc-300' : 'bg-zinc-700'} relative`}>
              <ChevronRight className={`absolute -bottom-2 -left-2.5 w-5 h-5 ${isLight ? 'text-zinc-400' : 'text-zinc-500'} rotate-90`} />
            </div>
            <div className={`h-10 w-px ${isLight ? 'bg-zinc-300' : 'bg-zinc-700'} relative`}>
              <ChevronRight className={`absolute -bottom-2 -left-2.5 w-5 h-5 ${isLight ? 'text-zinc-400' : 'text-zinc-500'} rotate-90`} />
            </div>
          </div>

          {/* 3 Campaign Channels */}
          <div className="flex w-full justify-between gap-6 px-4 mt-2 z-10">
            {/* Branch 1: Meta Ads (75%) */}
            <div className={`flex-[1.4] ${cardBg} p-6 rounded-2xl text-left shadow-xl border-2 border-emerald-500/60 relative flex flex-col justify-between overflow-hidden`}>
              <div className="absolute top-0 right-0 bg-emerald-500 text-white font-black text-xs px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                75% (R$ 3.000)
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Motor Principal</span>
                </div>
                <h4 className={`font-black text-xl mb-1 ${titleColor}`}>Meta Ads (WhatsApp Direto)</h4>
                <p className="text-2xl font-black text-emerald-600 mb-3">R$ 3.000 <span className="text-xs font-semibold text-zinc-500">/mês</span></p>
                <div className={`text-xs ${isLight ? 'text-zinc-600' : 'text-zinc-300'} space-y-1.5`}>
                  <p><strong>Ofertas:</strong> Shineray Jet (R$ 13.790), Financiamento Rápido, Compra Garantida e Negativados.</p>
                  <p className="text-emerald-700 dark:text-emerald-400 font-medium">⚡ Segmentação geolocalizada: Teresina, Timon e São Miguel do Tapuio</p>
                </div>
              </div>
            </div>

            {/* Branch 2: Google Ads (15%) */}
            <div className={`flex-[1] ${cardBg} p-6 rounded-2xl text-left shadow-xl border-2 border-indigo-500/60 relative flex flex-col justify-between overflow-hidden`}>
              <div className="absolute top-0 right-0 bg-indigo-500 text-white font-black text-xs px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                15% (R$ 600)
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Intenção de Compra</span>
                </div>
                <h4 className={`font-black text-xl mb-1 ${titleColor}`}>Google Search & Local</h4>
                <p className="text-2xl font-black text-indigo-600 mb-3">R$ 600 <span className="text-xs font-semibold text-zinc-500">/mês</span></p>
                <div className={`text-xs ${isLight ? 'text-zinc-600' : 'text-zinc-300'} space-y-1.5`}>
                  <p><strong>Público:</strong> Buscas por 'motos novas/seminovas em Teresina / Timon' e concessionárias.</p>
                  <p className="text-indigo-700 dark:text-indigo-400 font-medium">📍 Tráfego quente para ligação e rota até as lojas físicas</p>
                </div>
              </div>
            </div>

            {/* Branch 3: Remarketing & Feirões (10%) */}
            <div className={`flex-[1] ${cardBg} p-6 rounded-2xl text-left shadow-xl border-2 border-amber-500/60 relative flex flex-col justify-between overflow-hidden`}>
              <div className="absolute top-0 right-0 bg-amber-500 text-white font-black text-xs px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                10% (R$ 400)
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Reengajamento</span>
                </div>
                <h4 className={`font-black text-xl mb-1 ${titleColor}`}>Remarketing & Feirões</h4>
                <p className="text-2xl font-black text-amber-600 mb-3">R$ 400 <span className="text-xs font-semibold text-zinc-500">/mês</span></p>
                <div className={`text-xs ${isLight ? 'text-zinc-600' : 'text-zinc-300'} space-y-1.5`}>
                  <p><strong>Foco:</strong> Recuperação de contatos antigos do CRM e impulsos em dias de Feirão da Loja.</p>
                  <p className="text-amber-700 dark:text-amber-400 font-medium">🔥 Conversão de indecisos e aceleração de final de mês</p>
                </div>
              </div>
            </div>
          </div>

          {/* Central Convergence Node: CRM & WhatsApp */}
          <div className="w-full flex flex-col items-center mt-8">
            <div className={`h-8 w-px ${isLight ? 'bg-zinc-300' : 'bg-zinc-700'}`} />
            <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white font-bold p-6 rounded-2xl shadow-2xl shadow-red-900/30 flex items-center justify-between gap-6 z-10 w-full max-w-2xl">
              <div className="flex items-center gap-4">
                <div className="p-3.5 bg-white/10 rounded-xl">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-black block">Central de Atendimento & CRM Kanban</span>
                  <span className="text-xs font-normal text-red-100">Distribuição automática de leads entre 7 a 10 consultores nas 3 unidades</span>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl text-right shrink-0">
                <span className="text-[10px] uppercase block text-red-100 font-bold">Capacidade</span>
                <span className="text-base font-black">20-25 Leads/Dia</span>
              </div>
            </div>
          </div>

          {/* Connector to Final Closure & Retention */}
          <div className={`h-8 w-px ${isLight ? 'bg-zinc-300' : 'bg-zinc-700'}`} />
          
          <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl z-10">
            {/* Closure Node */}
            <div className={`${isLight ? 'bg-emerald-50 border-emerald-300 text-emerald-800' : 'bg-emerald-950/40 border-emerald-500/50 text-emerald-400'} border-2 p-5 rounded-2xl flex items-center gap-3 shadow-lg`}>
              <Store className="w-7 h-7 text-emerald-500 shrink-0" />
              <div className="text-left">
                <span className="text-base font-black block">Fechamento na Loja Física & Digital</span>
                <span className={`text-xs ${isLight ? 'text-emerald-700' : 'text-emerald-300'}`}>Visita presencial, test-ride e assinatura de contrato</span>
              </div>
            </div>

            {/* Retention Node */}
            <div className={`${isLight ? 'bg-blue-50 border-blue-300 text-blue-800' : 'bg-blue-950/40 border-blue-500/50 text-blue-400'} border-2 p-5 rounded-2xl flex items-center gap-3 shadow-lg`}>
              <RefreshCw className="w-7 h-7 text-blue-500 shrink-0" />
              <div className="text-left">
                <span className="text-base font-black block">Pós-Venda & Programa de Indicação</span>
                <span className={`text-xs ${isLight ? 'text-blue-700' : 'text-blue-300'}`}>Revisão gratuita/troca de óleo por indicação de amigos</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }

  if (type === 'media_projection') {
    return (
      <div className="flex flex-col h-full items-center justify-center py-8">
        <h2 className={`text-4xl font-bold ${titleColor} mb-2`}>{d.titulo}</h2>
        <p className={`text-xl ${subtitleColor} mb-12`}>Orçamento planejado: <strong className="text-emerald-600">{d.orcamento}</strong></p>

        <div className="w-full max-w-5xl grid md:grid-cols-3 gap-8">
          {d.cenarios.map((cenario: any, i: number) => {
            let color = 'text-zinc-500'
            let bg = isLight ? 'bg-zinc-100' : 'bg-zinc-800'
            let border = 'border-zinc-200 dark:border-zinc-700'
            
            if (i === 0) { color = 'text-amber-500'; bg = isLight ? 'bg-amber-50' : 'bg-amber-950/30'; border = 'border-amber-200 dark:border-amber-900/50'; }
            if (i === 1) { color = 'text-emerald-500'; bg = isLight ? 'bg-emerald-50' : 'bg-emerald-950/30'; border = 'border-emerald-200 dark:border-emerald-900/50'; }
            if (i === 2) { color = 'text-red-500'; bg = isLight ? 'bg-red-50' : 'bg-red-950/30'; border = 'border-red-200 dark:border-red-900/50'; }

            return (
              <div key={i} className={`${cardBg} rounded-3xl p-8 border-2 ${border} shadow-xl flex flex-col items-center text-center relative overflow-hidden`}>
                <div className={`absolute top-0 inset-x-0 h-2 ${color.replace('text', 'bg')}`} />
                <h4 className={`text-base font-bold uppercase tracking-wider ${color} mb-6`}>{cenario.nome}</h4>
                <div className="flex flex-col items-center gap-2 mb-6">
                  <span className="text-4xl md:text-5xl font-black">{cenario.pedidos}</span>
                  <span className={`text-xs font-medium uppercase tracking-wider ${subtitleColor}`}>por mês (3 lojas)</span>
                </div>
                <div className={`mt-auto ${bg} px-6 py-3 rounded-xl w-full`}>
                  <span className={`font-bold text-sm ${color}`}>{cenario.cpa}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  if (type === 'spreadsheet_placeholder') {
    return (
      <div>
        <div className="flex items-center gap-4 mb-10">
          <FileSpreadsheet className="w-10 h-10 text-red-600" />
          <h2 className={`text-4xl font-bold ${titleColor}`}>{d.titulo}</h2>
        </div>
        
        <div className={`w-full rounded-2xl border ${cardBg} p-8 shadow-xl flex flex-col gap-6`}>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { etapa: "1. Setup & Acessos", desc: "Coleta de acessos ao Meta Ads, BM e Google Meu Negócio", responsavel: "Garantida + V4", prazo: "Imediato" },
              { etapa: "2. Validação de Roteiros", desc: "Envio de scripts e direcionamentos de cena para Shineray Jet e Negativados", responsavel: "V4 (Andreas / Manu)", prazo: "Dias 1-3" },
              { etapa: "3. Captação na Loja", desc: "Gravação de vídeos brutos com os consultores e motos no pátio", responsavel: "Garantida Motos", prazo: "Dias 4-6" },
              { etapa: "4. Lançamento de Mídia", desc: "Edição, aprovação final e subida das campanhas no ar", responsavel: "V4 (Emanuelle / Giovana)", prazo: "Dia 29/Set" }
            ].map((item, idx) => (
              <div key={idx} className={`p-5 rounded-xl border ${isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-zinc-950 border-zinc-800'} flex flex-col justify-between gap-3`}>
                <div>
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">{item.etapa}</span>
                  <p className={`text-sm font-medium ${titleColor} mt-2`}>{item.desc}</p>
                </div>
                <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex justify-between text-xs text-zinc-500">
                  <span>{item.responsavel}</span>
                  <span className="font-bold text-red-500">{item.prazo}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={`p-5 rounded-xl ${isLight ? 'bg-amber-50 border-amber-200 text-amber-900' : 'bg-amber-950/20 border-amber-900/40 text-amber-300'} border flex items-center justify-between text-sm`}>
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              <span><strong>Reunião de Acompanhamento:</strong> Análise semanal de CPL, MQL, SQL e vendas por unidade com a equipe comercial.</span>
            </div>
            <span className="font-bold shrink-0">Ciclo Semanal</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`p-8 border border-red-500 ${cardBg} text-red-500`}>
      <p>⚠️ Missing renderer for slide type: {type}</p>
    </div>
  )
}

export default function ReportViewer() {
  const { slides } = presentationData

  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-red-500/30 font-sans">
      {slides.map((slide, index) => {
        const themeClass = getSectionTheme(slide.id, slide.slide_type)
        return (
          <SectionWrapper key={slide.id || index} themeClass={themeClass}>
            <RenderBlock slide={slide} />
          </SectionWrapper>
        )
      })}
    </div>
  )
}
