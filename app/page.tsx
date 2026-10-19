'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  ArrowUpRight,
  Braces,
  ChevronRight,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  GitBranch,
  Globe2,
  Mail,
  Menu,
  Network,
  Server,
  X,
  Zap,
} from 'lucide-react'

const softwareSkills = [
  ['JavaScript', 'JS'], ['React', 'RE'], ['Python', 'PY'], ['PHP', 'PHP'], ['MySQL', 'SQL'],
]
const networkSkills = [
  ['Linux System Administration', 'LNX'], ['Cisco Packet Tracer', 'CPT'], ['Microcontrollers (Arduino)', 'ARD'], ['Network Topologies', 'NET'],
]
const projects = [
  { number: '01', title: 'Orion Dashboard', description: 'Panel de monitoreo para visualizar métricas operativas en tiempo real con una interfaz modular y accesible.', tags: ['React', 'JavaScript', 'API'], icon: Code2, className: 'md:col-span-2' },
  { number: '02', title: 'Red Campus', description: 'Simulación de red empresarial con VLANs, routing inter-VLAN y servicios DHCP documentados.', tags: ['Packet Tracer', 'Cisco', 'VLAN'], icon: Network, className: '' },
  { number: '03', title: 'Node Monitor', description: 'Prototipo de telemetría con microcontroladores para capturar y transmitir datos de sensores.', tags: ['Arduino', 'Python', 'IoT'], icon: Cpu, className: '' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="min-h-screen overflow-hidden bg-[#080b10] text-[#e8eef5] selection:bg-cyan-400/20 selection:text-cyan-200">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#080b10]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3 font-mono text-sm font-semibold tracking-tight" onClick={closeMenu}>
            <span className="grid size-8 place-items-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-cyan-300"><Braces /></span>
            <span>omar<span className="text-cyan-300">.dev</span></span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {['Inicio', 'Sobre mí', 'Skills', 'Proyectos', 'Contacto'].map((item, i) => <a key={item} href={['#inicio','#sobre-mi','#skills','#proyectos','#contacto'][i]} className="text-xs text-slate-400 transition-colors hover:text-cyan-300">{item}</a>)}
            <Button nativeButton={false} render={<a href="/cv-alex-martinez.pdf" download />} size="sm" className="bg-cyan-300 text-[#061016] hover:bg-cyan-200"><Download data-icon="inline-start" /> Descargar CV</Button>
          </div>
          <button className="grid size-10 place-items-center rounded-md border border-white/10 text-slate-300 md:hidden" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <div className="border-t border-white/[0.07] bg-[#080b10] px-6 py-5 md:hidden"><div className="flex flex-col gap-5">{['Inicio','Sobre mí','Skills','Proyectos','Contacto'].map((item, i) => <a key={item} href={['#inicio','#sobre-mi','#skills','#proyectos','#contacto'][i]} onClick={closeMenu} className="font-mono text-sm text-slate-300">{item}</a>)}<Button nativeButton={false} render={<a href="/cv-alex-martinez.pdf" download />} size="sm" className="w-fit bg-cyan-300 text-[#061016] hover:bg-cyan-200"><Download data-icon="inline-start" /> Descargar CV</Button></div></div>}
      </nav>

      <section id="inicio" className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-20 pt-32 lg:px-8">
        <div className="network-bg" aria-hidden="true"><span className="node n1"/><span className="node n2"/><span className="node n3"/><span className="node n4"/><span className="node n5"/></div>
        <div className="relative z-10 max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.06] px-3 py-1.5 font-mono text-[11px] text-emerald-300"><span className="size-1.5 animate-pulse rounded-full bg-emerald-300" /> Disponible para nuevos proyectos</div>
          <p className="mb-5 font-mono text-sm text-cyan-300">// software × infraestructura</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.06em] text-white sm:text-7xl lg:text-[88px]">Construyo sistemas <span className="text-cyan-300">que conectan.</span></h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">Desarrollador de software autodidacta y estudiante de Redes Inteligentes y Telecomunicaciones. Transformo ideas en soluciones digitales claras, funcionales y escalables.</p>
          <div className="mt-10 flex flex-wrap gap-3"><Button nativeButton={false} render={<a href="#proyectos" />} className="bg-cyan-300 text-[#061016] hover:bg-cyan-200">Ver proyectos <ArrowUpRight data-icon="inline-end" /></Button><Button nativeButton={false} render={<a href="#contacto" />} variant="outline" className="border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.08] hover:text-white">Contactar <ChevronRight data-icon="inline-end" /></Button></div>
          <div className="mt-16 flex items-center gap-6 font-mono text-[11px] text-slate-500"><span className="flex items-center gap-2"><Server className="text-cyan-300" /> full-stack</span><span className="h-3 w-px bg-white/15"/><span className="flex items-center gap-2"><Network className="text-purple-300" /> networking</span></div>
        </div>
      </section>

      <section id="sobre-mi" className="border-y border-white/[0.07] bg-[#0b0f15] py-28"><div className="mx-auto max-w-6xl px-6 lg:px-8"><SectionHeader eyebrow="01 / SOBRE MÍ" title="Curiosidad técnica, visión de sistema." description="Me interesa entender cómo funcionan las cosas, desde la primera línea de código hasta el último paquete que cruza la red."/><div className="mt-14 grid overflow-hidden rounded-2xl border border-white/10 bg-[#0d1219] lg:grid-cols-2"><div className="p-8 sm:p-12"><span className="mb-12 block font-mono text-xs text-cyan-300">01 — perfil</span><p className="text-2xl leading-relaxed tracking-tight text-slate-200">Aprendo haciendo. Mi camino combina desarrollo web, administración de sistemas y redes para crear productos con una base sólida.</p><p className="mt-7 leading-7 text-slate-400">Actualmente estudio Técnico en Redes Inteligentes y Telecomunicaciones mientras construyo proyectos que conectan software e infraestructura. Siempre estoy explorando una nueva herramienta o una forma más simple de resolver un problema.</p></div><div className="terminal-grid border-t border-white/10 bg-[#070a0e] p-6 font-mono text-xs sm:p-10 lg:border-l lg:border-t-0"><div className="mb-8 flex gap-2"><span className="size-2.5 rounded-full bg-red-400/70"/><span className="size-2.5 rounded-full bg-yellow-300/70"/><span className="size-2.5 rounded-full bg-emerald-300/70"/></div><p className="text-slate-500">alex@portfolio:~$ <span className="text-slate-300">whoami</span></p><p className="mt-3 text-emerald-300">&gt; software_developer + network_student</p><p className="mt-6 text-slate-500">alex@portfolio:~$ <span className="text-slate-300">cat current_focus.txt</span></p><div className="mt-3 flex flex-col gap-2 text-slate-400"><span><span className="text-cyan-300">+</span> interfaces que importan</span><span><span className="text-cyan-300">+</span> redes resilientes</span><span><span className="text-cyan-300">+</span> aprendizaje continuo</span></div><p className="mt-8 text-slate-500">alex@portfolio:~$ <span className="animate-pulse text-emerald-300">_</span></p></div></div></div></section>

      <section id="skills" className="py-28"><div className="mx-auto max-w-6xl px-6 lg:px-8"><SectionHeader eyebrow="02 / SKILLS" title="Las herramientas son parte del lenguaje." description="Un stack híbrido para diseñar, construir y mantener soluciones de extremo a extremo."/><div className="mt-14 grid gap-5 md:grid-cols-2"><SkillCard icon={Code2} title="Software" description="Construcción de productos web y servicios." skills={softwareSkills} accent="cyan"/><SkillCard icon={Network} title="Redes e Infraestructura" description="Sistemas conectados, estables y observables." skills={networkSkills} accent="purple"/></div></div></section>

      <section id="proyectos" className="border-y border-white/[0.07] bg-[#0b0f15] py-28"><div className="mx-auto max-w-6xl px-6 lg:px-8"><SectionHeader eyebrow="03 / PROYECTOS" title="Cosas que he puesto en marcha." description="Una selección de experimentos, soluciones y sistemas en constante evolución."/><div className="mt-14 grid gap-5 md:grid-cols-3">{projects.map(({number,title,description,tags,icon: Icon,className}) => <article key={title} className={`group relative flex min-h-80 flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0d1219] p-7 transition-all hover:-translate-y-1 hover:border-cyan-300/30 ${className}`}><div><div className="flex items-start justify-between"><span className="font-mono text-xs text-slate-600">{number}</span><Icon className="text-cyan-300/70" /></div><h3 className="mt-14 text-2xl font-medium tracking-tight text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{description}</p></div><div className="mt-8 flex items-center justify-between gap-4"><div className="flex flex-wrap gap-2">{tags.map(tag => <span key={tag} className="rounded-md border border-white/10 px-2 py-1 font-mono text-[10px] text-slate-400">{tag}</span>)}</div><a href="#contacto" aria-label={`Ver proyecto ${title}`} className="text-slate-500 transition-colors hover:text-cyan-300"><ExternalLink /></a></div></article>)}</div></div></section>

      <section id="contacto" className="py-28"><div className="mx-auto max-w-6xl px-6 lg:px-8"><div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]"><div><SectionHeader eyebrow="04 / CONTACTO" title="¿Construimos algo juntos?" description="Cuéntame sobre tu idea, tu reto o simplemente saluda. Mi bandeja está abierta."/><div className="mt-10 flex gap-3"><a href="https://github.com" target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-cyan-300/40 hover:text-cyan-300" aria-label="GitHub"><GitBranch /></a><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-cyan-300/40 hover:text-cyan-300" aria-label="LinkedIn"><Globe2 /></a></div></div><form className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#0d1219] p-7 sm:p-9" onSubmit={(e) => e.preventDefault()}><label className="flex flex-col gap-2 text-xs font-mono text-slate-400">NOMBRE<input required className="rounded-lg border border-white/10 bg-[#080b10] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-cyan-300/60" placeholder="Tu nombre" /></label><label className="flex flex-col gap-2 text-xs font-mono text-slate-400">EMAIL<input required type="email" className="rounded-lg border border-white/10 bg-[#080b10] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-cyan-300/60" placeholder="tu@email.com" /></label><label className="flex flex-col gap-2 text-xs font-mono text-slate-400">MENSAJE<textarea required rows={4} className="resize-none rounded-lg border border-white/10 bg-[#080b10] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-cyan-300/60" placeholder="¿En qué estás trabajando?" /></label><Button type="submit" className="mt-2 bg-cyan-300 text-[#061016] hover:bg-cyan-200">Enviar mensaje <Mail data-icon="inline-end" /></Button></form></div></div></section>
      <footer className="border-t border-white/[0.07] py-8"><div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-8"><span className="font-mono">© 2024 Alex Martínez</span><span className="flex items-center gap-2 font-mono"><Zap className="text-cyan-300" /> Diseñado y construido con intención.</span></div></footer>
    </main>
  )
}

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) { return <div className="max-w-2xl"><p className="font-mono text-xs tracking-[0.18em] text-cyan-300">{eyebrow}</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">{title}</h2><p className="mt-5 max-w-xl leading-7 text-slate-400">{description}</p></div> }
function SkillCard({ icon: Icon, title, description, skills, accent }: { icon: typeof Code2; title: string; description: string; skills: string[][]; accent: 'cyan' | 'purple' }) { return <div className="rounded-2xl border border-white/10 bg-[#0d1219] p-7 sm:p-9"><div className="flex items-start justify-between"><div><div className={`grid size-11 place-items-center rounded-xl border ${accent === 'cyan' ? 'border-cyan-300/25 bg-cyan-300/10 text-cyan-300' : 'border-purple-300/25 bg-purple-300/10 text-purple-300'}`}><Icon /></div><h3 className="mt-7 text-2xl font-medium text-white">{title}</h3><p className="mt-2 text-sm text-slate-500">{description}</p></div><span className="font-mono text-xs text-slate-600">{skills.length.toString().padStart(2, '0')} items</span></div><div className="mt-9 grid grid-cols-2 gap-3">{skills.map(([name, code]) => <div key={name} className="flex items-center gap-3 rounded-lg border border-white/[0.08] bg-white/[0.02] p-3"><span className="font-mono text-[10px] text-cyan-300">{code}</span><span className="text-xs text-slate-300">{name}</span></div>)}</div></div> }
