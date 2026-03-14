import { motion } from "motion/react";
import {
  Apple,
  Brain,
  Activity,
  RefreshCw,
  ShoppingCart,
  CheckCircle2,
  ChevronDown,
  Star,
  Clock,
  BookOpen,
  Target,
  Zap,
  ShieldCheck,
} from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState, useEffect, type MouseEvent } from "react";

import logo from "./assets/logo.png";
import mockup from "./assets/mockup.png";
import portada from "./assets/portada.png";
import pg1 from "./assets/pg1.png";
import pg2 from "./assets/pg2.png";
import pg3 from "./assets/pg3.png";
import pg4 from "./assets/pg4.png";
import t1 from "./assets/testimonial1.jpg";
import t2 from "./assets/testimonial2.jpg";
import t3 from "./assets/testimonial3.jpg";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

// --- Components ---

const HOTMART_URL = "https://pay.hotmart.com/T104626871Q";

const Button = ({
  children,
  className = "",
  primary = false,
  ...props
}: any) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg cursor-pointer ${
      primary
        ? "bg-green-600 text-white hover:bg-green-700"
        : "bg-white text-brand-blue hover:bg-gray-100 border border-gray-200"
    } ${className}`}
    {...props}
  >
    {children}
  </motion.button>
);

const Section = ({ children, className = "", id = "" }: any) => (
  <section id={id} className={`py-20 px-6 md:px-12 ${className}`}>
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
);

const Hero = ({
  handleBuyClick,
}: {
  handleBuyClick: (e: MouseEvent<HTMLAnchorElement>, url: string) => void;
}) => (
  <section className="bg-brand-blue text-white pt-4 pb-8 px-5 md:px-12 overflow-hidden relative">
    <div className="max-w-6xl mx-auto">
      <nav className="flex justify-between items-center">
        <img
          src={logo}
          alt="Plan35+ Logo"
          className="h-20 md:h-28 object-contain"
          referrerPolicy="no-referrer"
        />
      </nav>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            <span className="text-brand-orange">
              Guía simple para ordenar tu alimentación y retomar el ejercicio
              después de los 35 años
            </span>
          </h1>

          <p className="text-sm md:text-lg leading-snug md:leading-relaxed opacity-95 mt-2 max-w-xl mx-auto md:mx-0">
            Una guía clara para volver a cuidarte con un plan simple y fácil de
            seguir.
          </p>

          <div className="mt-3 space-y-1 text-sm md:text-lg max-w-xl mx-0">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Plan de alimentación sencillo</span>
            </div>

            <div className="flex items-center gap-2 justify-center md:justify-start">
              <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Recetas fáciles</span>
            </div>

            <div className="flex items-center gap-2 justify-center md:justify-start">
              <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Ejercicios fáciles de seguir</span>
            </div>

            <div className="flex items-center gap-2 justify-center md:justify-start">
              <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Crear hábitos saludables</span>
            </div>
          </div>

          <div className="mt-3">
            <p className="text-brand-orange font-extrabold text-xl md:text-2xl text-center">
              PRECIO HOY: $6.99 USD
            </p>
          </div>

          <div className="mt-4 flex justify-center">
            <a
              href={HOTMART_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleBuyClick(e, HOTMART_URL)}
            >
              <Button
                primary
                className="text-sm md:text-xl uppercase tracking-wide px-10 md:px-16 py-2 md:py-4"
              >
                OBTENER EL PLAN35+
              </Button>
            </a>
          </div>

          <p className="text-xs md:text-base opacity-90 mt-2 text-center">
            Pago único • Acceso inmediato
            <br />
            Descarga digital • Pago seguro con Hotmart
          </p>
        </motion.div>

        {/* IMAGEN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="md:w-1/2 relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-[200px] md:max-w-lg">
            <img
              src={mockup}
              alt="Plan35+ Mockup"
              className="w-[100%] md:w-[180%] max-w-none h-auto drop-shadow-2xl md:rotate-6 md:-mr-40 lg:-mr-60 relative z-10"
              referrerPolicy="no-referrer"
            />

            <div className="absolute -bottom-2 -right-2 bg-brand-orange text-white px-4 py-3 rounded-xl font-bold text-center shadow-xl">
              <span className="block text-[10px] uppercase">Hoy</span>
              <span className="text-xl md:text-3xl">$7</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Identification = () => (
  <Section className="bg-[#eef2f6] text-center">
    <h2 className="text-2xl md:text-4xl font-bold mb-6 text-brand-blue leading-snug">
      ¿Sientes que la improvisación está tomando el control de tu alimentación y
      tu ejercicio?
    </h2>

    <div className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed text-brand-blue/90 space-y-2 mb-12">
      <p>No es falta de voluntad.</p>
      <p>Es exceso de decisiones cada día.</p>
      <p>
        PLAN35+ te ayuda a ordenar lo esencial para que la constancia sea
        posible, incluso en semanas ocupadas.
      </p>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-brand-beige p-8 md:p-10 rounded-3xl border border-brand-blue/10 shadow-sm max-w-5xl mx-auto"
    >
      {/* Línea decorativa superior */}
      <div className="w-20 h-1 bg-brand-orange mx-auto mb-6 rounded"></div>

      <h3 className="text-xl md:text-2xl font-extrabold text-brand-orange mb-4 uppercase tracking-wide">
        Después de los 35, la estrategia cambia
      </h3>

      <p className="text-base md:text-lg leading-relaxed italic text-brand-text max-w-3xl mx-auto">
        La energía no se recupera igual. El estrés impacta más y los errores se
        acumulan.
      </p>

      <p className="text-base md:text-lg leading-relaxed italic text-brand-text max-w-3xl mx-auto mt-3">
        Por eso este sistema no busca intensidad. Busca organización simple para
        mantener hábitos sin empezar de nuevo cada semana.
      </p>
    </motion.div>
  </Section>
);

const UniqueSystem = () => (
  <Section className="bg-white">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-8 leading-tight">
          Un{" "}
          <span className="text-brand-orange underline decoration-brand-blue/20">
            sistema
          </span>{" "}
          simple para comer mejor y retomar el ejercicio después de los 35
        </h2>
        <div className="text-lg md:text-xl space-y-4">
          {[
            "Plan claro para semanas reales",
            "Menos improvisación, menos desgaste mental",
            "Constancia sin perfección ni reinicios",
            "Ajustes prácticos sin culpa",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="bg-green-100 p-1 rounded-full">
                <CheckCircle2 className="text-green-600 w-6 h-6" />
              </div>
              <span className="text-lg md:text-2xl font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2">
        <div className="relative">
          <img
            src={portada}
            alt="Plan35+ – Guía de Alimentación y Movimiento"
            className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-brand-beige">
            <div className="flex items-center gap-2 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className="w-4 h-4 fill-brand-orange text-brand-orange"
                />
              ))}
            </div>
            <p className="font-bold text-brand-blue">Fácil de seguir</p>
            <p className="text-sm opacity-70">Para la vida real</p>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const InsidePreview = ({
  handleBuyClick,
}: {
  handleBuyClick: (e: MouseEvent<HTMLAnchorElement>, url: string) => void;
}) => (
  <Section className="bg-[#eef2f6]">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <div className="w-46 h-1 bg-brand-orange mx-auto mb-6 rounded"></div>
      <h2 className="text-2xl md:text-5xl font-bold text-brand-blue mb-6">
        Así es el Plan35+ por dentro
      </h2>

      <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Páginas reales del material para que veas cómo está organizado.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {[
        {
          src: pg1,
          alt: "Ejemplo del menú semanal",
          label: "Menú semanal claro y fácil de seguir",
        },
        {
          src: pg2,
          alt: "Ejemplo de receta",
          label: "Recetas simples para cada comida",
        },
        {
          src: pg3,
          alt: "Guía de ejercicio diaria",
          label: "Rutina diaria de ejercicios",
        },
        {
          src: pg4,
          alt: "Lista de compras",
          label: "Lista de compras inteligente",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -6 }}
          className="bg-white rounded-[2rem] p-2 md:p-3 shadow-lg transition-all"
        >
          <div className="bg-brand-beige/30 rounded-2xl p-3">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full rounded-xl shadow-lg border border-white"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="mt-4 text-lg md:text-xl font-semibold text-brand-blue text-center">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
    <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-100 px-8 py-8 text-center max-w-2xl mx-auto">
      <p className="text-xl md:text-2xl text-brand-blue font-medium leading-relaxed mb-6">
        Un sistema simple para organizar tu semana
        <span className="block text-orange-500 font-semibold mt-2">
          sin improvisar qué comer ni cuándo entrenar.
        </span>
      </p>

      <a
        href={HOTMART_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => handleBuyClick(e, HOTMART_URL)}
      >
        <Button
          primary
          className="text-sm md:text-xl uppercase tracking-wide px-10 md:px-16 py-2 md:py-4"
        >
          OBTENER EL PLAN35+
        </Button>
      </a>
    </div>
  </Section>
);

const HowItWorks = () => {
  const items = [
    {
      icon: <Apple className="w-8 h-8 text-brand-orange" />,
      title: "Organizar tus comidas sin complicarte",
      text: "Un plan simple para decidir menos y mantener lo esencial cada semana.",
    },
    {
      icon: <Brain className="w-8 h-8 text-brand-orange" />,
      title: "Reducir el desgaste mental",
      text: "Menos decisiones diarias para que comer mejor sea más fácil de sostener.",
      featured: true,
    },
    {
      icon: <Activity className="w-8 h-8 text-brand-orange" />,
      title: "Retomar el ejercicio sin exigirte de más",
      text: "Ejercicios simples que se adaptan a tu energía y a tu tiempo.",
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-brand-orange" />,
      title: "Evitar reiniciar cada semana",
      text: "Si un día no sale como esperabas, continúas y sigues adelante.",
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-brand-orange" />,
      title: "Comprar con más claridad",
      text: "Tener una lista y una idea clara de la semana reduce impulsos y facilita cumplir.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-brand-orange" />,
      title: "Mantener constancia real",
      text: "Repetir lo básico con orden te ayuda a sostener resultados con el tiempo.",
    },
  ];

  return (
    <Section className="bg-white">
      <div className="text-center mb-14">
        <div className="w-24 h-1 bg-brand-orange mx-auto mb-6 rounded"></div>

        <h2 className="text-2xl md:text-5xl font-bold text-brand-blue">
          Lo que vas a lograr con Plan35+
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className={`relative overflow-hidden rounded-3xl border transition-all duration-300 ${
              item.featured
                ? "bg-white border-brand-orange/20 shadow-[0_20px_45px_rgba(0,0,0,0.12)]"
                : "bg-white border-brand-blue/10 shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.1)]"
            }`}
          >
            {/* Franja superior */}
            <div
              className={`h-1.5 w-full ${
                item.featured ? "bg-brand-orange" : "bg-brand-blue/10"
              }`}
            ></div>

            <div className="p-7">
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 ${
                  item.featured
                    ? "bg-brand-orange/10 shadow-sm"
                    : "bg-brand-beige shadow-sm"
                }`}
              >
                {item.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-brand-blue mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const BeforeAfter = () => (
  <Section className="bg-[#eef2f6] flex items-center min-h-[75vh]">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
      {/* ANTES */}
      <div className="bg-red-50 border border-red-200 rounded-3xl p-10 md:p-12">
        <h3 className="text-4xl font-bold text-red-700 mb-10">Antes</h3>

        <ul className="space-y-7 text-lg text-red-900/80">
          <li className="flex gap-4 items-start">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-red-200 text-red-700 font-bold">
              ×
            </span>
            Improvisas qué comer cada día
          </li>

          <li className="flex gap-4 items-start">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-red-200 text-red-700 font-bold">
              ×
            </span>
            Te cansas de decidir todo el tiempo
          </li>

          <li className="flex gap-4 items-start">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-red-200 text-red-700 font-bold">
              ×
            </span>
            Dejas el ejercicio y luego intentas empezar de nuevo
          </li>

          <li className="flex gap-4 items-start mb-10">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-red-200 text-red-700 font-bold">
              ×
            </span>
            Sientes que una semana mala arruina todo
          </li>
        </ul>
      </div>

      {/* CON PLAN */}
      <div className="bg-green-50 border border-green-200 rounded-3xl p-10 md:p-12">
        <h3 className="text-4xl font-bold text-green-700 mb-10">Con Plan35+</h3>

        <ul className="space-y-7 text-lg text-green-900/80">
          <li className="flex gap-4 items-start">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-200 text-green-700 font-bold">
              ✓
            </span>
            Tienes una guía clara para tu semana
          </li>

          <li className="flex gap-4 items-start">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-200 text-green-700 font-bold">
              ✓
            </span>
            Reduces decisiones y desgaste mental
          </li>

          <li className="flex gap-4 items-start">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-200 text-green-700 font-bold">
              ✓
            </span>
            Retomas el ejercicio con algo fácil de seguir
          </li>

          <li className="flex gap-4 items-start">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-200 text-green-700 font-bold mb-10">
              ✓
            </span>
            Mantienes constancia sin reiniciar todo
          </li>
        </ul>
      </div>
    </div>
  </Section>
);

const WhatYouGet = () => (
  <Section className="bg-brand-blue text-white">
    <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 tracking-tight">
      🔥 Esto es lo que incluye Plan35+
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        {
          icon: <BookOpen className="w-10 h-10 text-brand-orange" />,
          title: "Guía principal PLAN35+",
          text: "Guía principal para organizar tu alimentación y retomar el ejercicio después de los 35.",
        },
        {
          icon: <Target className="w-10 h-10 text-brand-orange" />,
          title: "Sistema de seguimiento semanal",
          text: "Te ayuda a revisar tu semana, medir tu avance y seguir adelante sin sentir que perdiste el proceso.",
        },
        {
          icon: <ShoppingCart className="w-10 h-10 text-brand-orange" />,
          title: "Lista de compras inteligente",
          text: "Te ayuda a comprar con más claridad, evitar excesos y ajustarte mejor a tu presupuesto.",
        },
        {
          icon: <Clock className="w-10 h-10 text-brand-orange" />,
          title: "Mini guía de organización (20 min)",
          text: "Una forma simple de organizar tu semana en 20 minutos para reducir decisiones y mantener constancia.",
        },
      ].map((card, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.02 }}
          className={`bg-white text-brand-blue rounded-3xl flex flex-col md:flex-row gap-6 items-start shadow-xl ${i === 0 ? "p-10 border-t-8 border-brand-orange" : "p-8"}`}
        >
          <div className="bg-brand-beige p-4 rounded-2xl shrink-0">
            {card.icon}
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">{card.title}</h3>
            <p className="text-lg md:text-xl leading-relaxed text-gray-600">
              {card.text}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

const Bonuses = () => (
  <Section className="bg-white">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-4">
        🎁 Todo lo que recibes con tu compra
      </h2>
      <p className="text-3xl text-brand-orange font-bold">
        Acceso inmediato al sistema completo por $6.99 USD
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "Acceso inmediato",
          desc: "Descarga instantánea del sistema completo después de la compra.",
          value: "Incluido",
        },
        {
          title: "Uso ilimitado",
          desc: "Úsalo cuantas veces quieras y repite el sistema las veces que necesites.",
          value: "Incluido",
        },
        {
          title: "Actualizaciones menores",
          desc: "Mejoras de formato o ajustes del material cuando se publiquen.",
          value: "Incluido",
        },
      ].map((bono, i) => (
        <div
          key={i}
          className="bg-white p-8 rounded-3xl border border-brand-blue/5 shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="text-2xl font-bold text-brand-blue mb-3">
            {bono.title}
          </h3>

          <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
            {bono.desc}
          </p>
          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <span className="text-xl uppercase font-bold text-gray-400">
              Valor
            </span>
            <span className="text-2xl font-bold text-brand-orange">
              {bono.value}
            </span>
          </div>
        </div>
      ))}

      <div className="bg-brand-blue text-white p-8 md:p-10 rounded-3xl flex flex-col items-center text-center col-span-1 md:col-span-3">
        <Zap className="w-12 h-12 text-brand-orange mb-4" />
        <h3 className="text-2xl font-bold mb-2">¡Todo Incluido!</h3>
        <div className="mt-2">
          <p className="text-sm md:text-base opacity-80">
            Por un único pago de
          </p>
          <p className="text-3xl md:text-4xl font-extrabold text-brand-orange mt-1">
            $6.99 USD
          </p>
        </div>
      </div>
    </div>
  </Section>
);

const Pricing = ({
  handleBuyClick,
}: {
  handleBuyClick: (e: MouseEvent<HTMLAnchorElement>, url: string) => void;
}) => (
  <Section className="bg-[#eef2f6] text-center">
    <div className="max-w-6xl mx-auto">
      {/* VALOR REAL (alineado y legible) */}
      <div className="mb-16">
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.10)] border border-brand-blue/10 overflow-hidden">
          <div className="h-2 w-full bg-brand-orange"></div>

          <div className="p-8 md:p-12">
            <h3 className="text-2xl md:text-4xl font-extrabold text-brand-blue uppercase tracking-wide mb-10 text-center">
              Si compraras todo por separado
            </h3>

            <div className="grid grid-cols-[1fr_auto] gap-x-8 gap-y-5 text-lg md:text-2xl items-center">
              <span className="text-left text-brand-blue">
                Guía principal PLAN35+
              </span>
              <span className="text-right font-bold line-through text-gray-400">
                $29.99
              </span>

              <span className="text-left text-brand-blue">
                Sistema de seguimiento semanal
              </span>
              <span className="text-right font-bold line-through text-gray-400">
                $9.99
              </span>

              <span className="text-left text-brand-blue">
                Lista de compras inteligente
              </span>
              <span className="text-right font-bold line-through text-gray-400">
                $9.99
              </span>

              <span className="text-left text-brand-blue">
                Mini guía de organización (20 min)
              </span>
              <span className="text-right font-bold line-through text-gray-400">
                $9.99
              </span>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-lg md:text-xl font-bold text-brand-blue uppercase tracking-wide">
                Valor total del sistema
              </p>
              <p className="text-5xl md:text-6xl font-extrabold text-brand-orange mt-3">
                $59.96
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PRECIO HOY */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="bg-brand-beige p-14 md:p-10 rounded-[3rem] border-4 border-green-600 shadow-2xl"
      >
        <h2 className="text-3xl md:text-6xl font-extrabold text-brand-blue mb-4">
          Acceso completo hoy por $6.99 USD
        </h2>

        <p className="text-xl md:text-3xl text-gray-700 mb-5">
          Pago único • Acceso inmediato • Sin suscripción
        </p>

        <div className="mb-5 flex justify-center">
          <img
            src={portada}
            alt="Mockup Plan35+"
            className="w-70 md:w-auto max-w-lg md:max-w-xl drop-shadow-2xl mb-5"
            referrerPolicy="no-referrer"
          />
        </div>

        <a
          href={HOTMART_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => handleBuyClick(e, HOTMART_URL)}
        >
          <Button
            primary
            className="text-sm md:text-xl uppercase tracking-wide px-10 md:px-16 py-2 md:py-4"
          >
            OBTENER EL PLAN35+
          </Button>
        </a>

        <div className="mt-4 flex items-center justify-center gap-3 text-lg md:text-xl text-brand-blue font-medium">
          {" "}
          <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-green-600 shrink-0" />
          Garantía de 7 días • Compra segura
        </div>
      </motion.div>
    </div>
  </Section>
);

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      question: "¿Cuánto tiempo debo invertir?",
      answer:
        "El plan está pensado para personas con poco tiempo. La organización semanal toma unos 20 minutos y los ejercicios diarios entre 20 y 30 minutos. El objetivo es que puedas sostenerlo sin que interfiera con tu rutina.",
    },
    {
      question: "¿Cuándo veré resultados?",
      answer:
        "Muchas personas sienten más claridad y control en su alimentación desde la primera semana. Los cambios físicos dependen de cada persona, pero el sistema está diseñado para construir hábitos sostenibles en el tiempo.",
    },
    {
      question: "¿Esto reemplaza asesoría médica o nutricional?",
      answer:
        "No. Este material es una guía general de organización de alimentación y movimiento. Si tienes una condición médica específica, lo ideal es consultar con un profesional de salud.",
    },
    {
      question: "¿Qué pasa si no me funciona?",
      answer:
        "Tu compra está protegida con una garantía de 7 días. Si el material no cumple con lo que esperabas, puedes solicitar el reembolso dentro de ese periodo.",
    },
    {
      question: "¿En cuánto tiempo recibo el material?",
      answer:
        "El acceso es inmediato. Después de completar el pago recibirás el enlace de descarga del material directamente en tu correo.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue text-center mb-12">
          PREGUNTAS FRECUENTES
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-100"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-semibold text-brand-blue text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-brand-blue text-white/50 py-16 md:py-20 px-6 text-center text-base md:text-lg">
    <div className="max-w-6xl mx-auto">
      <img
        src={logo}
        alt="Plan35+"
        className="h-16 md:h-20 mx-auto mb-10 opacity-60 grayscale brightness-200"
        referrerPolicy="no-referrer"
      />
      <p className="mb-4">© 2025 Plan35+. Todos los derechos reservados.</p>
      <p>
        Este sitio no es parte de Facebook ni de Google Inc. Además, este sitio
        NO está respaldado por Facebook ni Google de ninguna manera.
      </p>
    </div>
  </footer>
);

export default function App() {
  useEffect(() => {
    window.fbq?.("track", "ViewContent");
  }, []);

  const handleBuyClick = (e: MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    window.fbq?.("track", "InitiateCheckout");

    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
    }, 150);
  };

  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white">
      <Hero handleBuyClick={handleBuyClick} />
      <Identification />
      <UniqueSystem />
      <InsidePreview handleBuyClick={handleBuyClick} />
      <HowItWorks />
      <BeforeAfter />
      <WhatYouGet />
      <Bonuses />
      <Pricing handleBuyClick={handleBuyClick} />
      <FAQ />
      <Footer />
    </div>
  );
}
