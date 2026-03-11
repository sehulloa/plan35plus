import { motion } from "motion/react";
import {
  Apple,
  Brain,
  Activity,
  RefreshCw,
  ShoppingCart,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  Star,
  Clock,
  BookOpen,
  ListChecks,
  Target,
  Heart,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactPixel from "react-facebook-pixel";
import { useEffect } from "react";

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

// --- Components ---

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

const Hero = () => (
  <section className="bg-brand-blue text-white pt-8 pb-24 px-6 md:px-12 overflow-hidden relative">
    <div className="max-w-6xl mx-auto">
      <nav className="flex justify-between items-center">
        <img
          src={logo}
          alt="Plan35+ Logo"
          className="h-28 md:h-42 object-contain"
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
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 tracking-tight">
            <span className="text-brand-orange">
              El sistema simple para organizar tu alimentación después de los 35
            </span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed font-light opacity-90 mb-6 max-w-xl">
            Menús semanales, lista de compras inteligente y una guía práctica
            para organizar tu alimentación sin complicarte.
          </p>

          <div className="space-y-2 mb-6 text-base md:text-xl">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" />
              <span>Menús simples para toda la semana</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" />
              <span>Lista de compras inteligente</span>
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <a
              href="https://pay.hotmart.com/T104626871Q"
              target="_self"
              rel="noopener noreferrer"
            >
              <Button
                primary
                className="text-lg md:text-2xl uppercase tracking-wider px-10 md:px-16 py-4 md:py-6"
              >
                OBTENER PLAN35+ AHORA
              </Button>
            </a>
          </div>

          <p className="text-base md:text-lg leading-relaxed font-light opacity-90 mt-3 max-w-2xl text-center">
            Acceso inmediato • Descarga digital • Pago único de $9.99
          </p>

          <p className="text-xl md:text-xl leading-relaxed font-light opacity-90 mt-10 max-w-2xl text-center">
            Si llegas cansado y terminas decidiendo qué comer en el momento,
            esto es para ti.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 relative flex items-center justify-center"
        >
          <div className="relative w-full">
            <img
              src={mockup}
              alt="Plan35+ Mockup"
              className="w-[100%] md:w-[180%] max-w-none h-auto drop-shadow-2xl md:rotate-6 md:-mr-40 lg:-mr-60 relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 right-0 md:-right-12 bg-brand-orange text-white p-6 md:p-8 rounded-full font-bold text-center shadow-2xl z-20 transform translate-y-1/4">
              <span className="block text-sm uppercase tracking-tighter">
                Pago único
              </span>
              <span className="text-3xl md:text-5xl">$9.99</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
  </section>
);

const Identification = () => (
  <Section className="bg-white text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-blue">
      "¿Sientes que la improvisación está tomando el control de tu alimentación
      y tu movimiento?"
    </h2>
    <p className="text-xl md:text-2xl leading-relaxed mb-12 max-w-4xl mx-auto">
      No es falta de voluntad. Es exceso de decisiones diarias. PLAN35+ te ayuda
      a ordenar lo esencial para que la constancia sea posible, incluso en
      semanas ocupadas.
    </p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-brand-beige p-8 md:p-12 rounded-3xl border-2 border-brand-blue/10"
    >
      <h3 className="text-2xl md:text-3xl font-extrabold text-brand-orange mb-6 uppercase tracking-widest">
        "Después de los 35, la estrategia cambia."
      </h3>
      <p className="text-lg md:text-2xl leading-relaxed italic text-brand-text max-w-3xl mx-auto">
        La energía ya no se recupera igual, el estrés impacta más y los errores
        se sienten acumulativos. Por eso este sistema no busca intensidad: busca
        organización sostenible para reducir decisiones y sostener hábitos sin
        reiniciar cada semana.
      </p>
    </motion.div>
  </Section>
);

const UniqueSystem = () => (
  <Section className="bg-brand-beige">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-8 leading-tight">
          El{" "}
          <span className="text-brand-orange underline decoration-brand-blue/20">
            sistema
          </span>{" "}
          que combina alimentación organizada + movimiento simple, diseñado para
          adultos +35
        </h2>
        <div className="text-lg md:text-xl space-y-4">
          {[
            "Estructura clara para semanas reales",
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
            <p className="font-bold text-brand-blue">Estructura Real</p>
            <p className="text-sm opacity-70">Para vidas reales</p>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const InsidePreview = () => (
  <Section className="bg-white">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-4">
        Mira cómo es el Plan 35+ por dentro
      </h2>

      <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Estas son páginas reales del material para que veas cómo está organizado
        el sistema.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {[
        {
          src: pg1,
          alt: "Ejemplo del menú semanal",
          label: "Menú semanal claro y organizado",
        },
        {
          src: pg2,
          alt: "Ejemplo de receta",
          label: "Recetas para cada tiempo de comida",
        },
        {
          src: pg3,
          alt: "Guía de ejercicio diaria",
          label: "Guía de ejercicio diaria simple y realista",
        },
        {
          src: pg4,
          alt: "Lista de compras",
          label: "Lista de compras organizada",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -6 }}
          className="bg-white rounded-[2rem] p-2 md:p-3 border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all"
        >
          <div className="bg-brand-beige/40 rounded-[1.5rem] p-3 md:p-4">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full rounded-xl shadow-lg border border-white"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="mt-5 text-center">
            <p className="text-lg md:text-xl font-bold text-brand-blue">
              {item.label}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

const HowItWorks = () => {
  const items = [
    {
      icon: <Apple className="w-12 h-12 text-brand-orange" />,
      title: "Organizar tus comidas sin complicarte",
      text: "Un marco simple para decidir menos y sostener lo esencial cada semana.",
    },
    {
      icon: <Brain className="w-10 h-10 text-brand-orange" />,
      title: "Reducir decisiones diarias",
      text: "Menos fricción mental: comes mejor sin depender de motivación.",
    },
    {
      icon: <Activity className="w-10 h-10 text-brand-orange" />,
      title: "Moverte sin castigarte",
      text: "Movimiento realista que se adapta a tu energía y tiempo.",
    },
    {
      icon: <RefreshCw className="w-10 h-10 text-brand-orange" />,
      title: "Evitar reinicios por errores",
      text: "Si un día no sale, continúas en la siguiente comida y sigues.",
    },
    {
      icon: <ShoppingCart className="w-10 h-10 text-brand-orange" />,
      title: "Simplificar tus compras",
      text: "Comprar lo planificado reduce impulsos y facilita cumplir.",
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-brand-orange" />,
      title: "Sostener 4 semanas seguidas",
      text: "Repetir lo básico construye resultados reales a largo plazo.",
    },
  ];

  return (
    <Section className="bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-blue mb-16">
        Con el Sistema de Alimentación Integral vas a:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="text-4xl mb-6">{item.icon}</div>
            <h3 className="text-xl md:text-2xl font-bold text-brand-blue mb-4 leading-snug">
              {item.title}
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-gray-600">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const Testimonials = () => (
  <Section className="bg-gray-50">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-blue mb-16">
      Lo que comentan quienes ya comenzaron con el plan
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          name: "María López",
          photo: t1,
          text: "El material está muy claro y bien organizado. Me gustó que no promete perfección, sino una forma realista de ordenar la semana.",
        },
        {
          name: "Carlos Martínez",
          photo: t2,
          text: "La compra fue sencilla y el acceso inmediato. El enfoque es práctico y se nota que está pensado para personas con poco tiempo.",
        },
        {
          name: "Ana Ramírez",
          photo: t3,
          text: "Me gustó ver que es un sistema simple y aterrizado. Ya lo empecé a revisar y cumple con lo que esperaba.",
        },
      ].map((t, i) => (
        <div
          key={i}
          className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative"
        >
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
            "{t.text}"
          </p>

          <div className="flex items-center gap-4">
            <img
              src={t.photo}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover"
            />

            <span className="text-base md:text-xl font-bold text-brand-blue">
              {t.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const Comparison = () => (
  <Section className="bg-white">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="bg-red-50 p-10 rounded-3xl border-2 border-red-100">
        <h3 className="text-2xl md:text-3xl font-bold text-red-700 mb-8 flex items-center gap-3">
          <XCircle className="w-8 h-8" /> NO es para ti si:
        </h3>
        <ul className="space-y-4">
          {[
            "Buscas cambios rápidos sin organizarte",
            "Quieres entrenamientos intensos diarios",
            "Quieres una dieta estricta que alguien más controle",
            "Disfrutas de retos agresivos",
            "Prefieres improvisación sobre estructura",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-4 text-xl md:text-2xl text-red-900/80 leading-relaxed"
            >
              <span className="text-red-500 mt-1 text-2xl">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-green-50 p-10 rounded-3xl border-2 border-green-100">
        <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-8 flex items-center gap-3">
          <CheckCircle2 className="w-8 h-8" /> SI es para ti si:
        </h3>
        <ul className="space-y-4">
          {[
            "Tienes 35 años o más",
            "Buscas organización clara y sostenible",
            "Quieres reducir decisiones diarias",
            "Ya probaste planes intensos sin éxito",
            "Prefieres equilibrio sobre perfección",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-4 text-xl md:text-2xl text-green-900/80 leading-relaxed"
            >
              <span className="text-green-500 mt-1 text-2xl">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

const WhatYouGet = () => (
  <Section className="bg-brand-blue text-white">
    <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 tracking-tight">
      🔥 TODO LO QUE RECIBES HOY
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        {
          icon: <BookOpen className="w-10 h-10 text-brand-orange" />,
          title: "Guía principal PLAN35+",
          text: "Guía base de alimentación y movimiento para adultos +35. Enfoque claro, realista y sostenible.",
        },
        {
          icon: <Target className="w-10 h-10 text-brand-orange" />,
          title: "Sistema de seguimiento semanal",
          text: "Estructura para mantener claridad semanal y medir progreso sin perfección. Evita la sensación de ‘perdí la semana’.",
        },
        {
          icon: <ShoppingCart className="w-10 h-10 text-brand-orange" />,
          title: "Lista de compras inteligente",
          text: "Reduce improvisación en el supermercado. Compra lo necesario sin excesos, adaptable a tu presupuesto.",
        },
        {
          icon: <Clock className="w-10 h-10 text-brand-orange" />,
          title: "Mini guía de organización (20 min)",
          text: "Método para organizar tu semana completa en 20 minutos. Menos decisiones, más constancia.",
        },
      ].map((card, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.02 }}
          className="bg-white text-brand-blue p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-start shadow-xl"
        >
          <div className="bg-brand-beige p-4 rounded-2xl shrink-0">
            {card.icon}
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">{card.title}</h3>
            <p className="text-lg md:text-xl leading-relaxedtext-gray-600">
              {card.text}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

const Bonuses = () => (
  <Section className="bg-brand-beige">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-4">
        🎁 MATERIALES INCLUIDOS
      </h2>
      <p className="text-2xl text-brand-orange font-bold">
        (Incluidos con tu compra)
      </p>
      <p className="text-3xl text-brand-orange font-bold">(Solo por $9.99)</p>
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
          <p className="text-xl md:text-xl leading-relaxedtext-gray-600 mb-6 text-sm leading-relaxed">
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
            $9.99 USD
          </p>
        </div>
      </div>
    </div>
  </Section>
);

const Pricing = () => (
  <Section className="bg-white text-center">
    <div className="max-w-6xl mx-auto">
      {/* VALOR REAL (alineado y legible) */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-400 uppercase tracking-widest mb-10">
          El valor real de lo que recibes
        </h3>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-[1fr_auto] gap-x-10 gap-y-5 text-lg md:text-2xl text-gray-700">
            <span className="text-left">Guía principal PLAN35+</span>
            <span className="text-right font-semibold">$29.99</span>

            <span className="text-left">
              Complemento 1: Sistema de seguimiento semanal
            </span>
            <span className="text-right font-semibold">$9.99</span>

            <span className="text-left">
              Complemento 2: Lista de compras inteligente
            </span>
            <span className="text-right font-semibold">$9.99</span>

            <span className="text-left">
              Complemento 3: Mini guía de organización (20 min)
            </span>
            <span className="text-right font-semibold">$9.99</span>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 grid grid-cols-[1fr_auto] gap-x-10 items-center">
            <span className="text-left font-extrabold text-xl md:text-2xl text-brand-blue uppercase tracking-wide">
              Valor total
            </span>
            <span className="text-right font-extrabold text-2xl md:text-3xl text-brand-blue">
              $59.96
            </span>
          </div>
        </div>
      </div>

      {/* PRECIO HOY */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="bg-brand-beige p-14 md:p-16 rounded-[3rem] border-4 border-green-600 shadow-2xl"
      >
        <div
          className="hidden md:block absolute top-6 right-6 bg-green-600 text-white px-12 py-5 text-2xl font-extrabold 
        uppercase tracking-wider rounded-full shadow-2xl"
        >
          Precio de lanzamiento
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold text-brand-blue mb-4">
          PRECIO HOY: $9.99
        </h2>

        <p className="text-xl md:text-3xl text-gray-700 mb-5">
          Pago único • Acceso inmediato • Sin suscripciones
        </p>

        <div className="mb-10 flex justify-center">
          <img
            src={portada}
            alt="Mockup Plan35+"
            className="w-70 md:w-auto max-w-lg md:max-w-xl drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>

        <a
          href="https://pay.hotmart.com/T104626871Q"
          target="_self"
          rel="noopener noreferrer"
        >
          <Button
            primary
            className="w-full md:w-auto text-xl md:text-2xl px-14 py-6 mb-6"
          >
            OBTENER PLAN35+ AHORA
          </Button>
        </a>

        <div className="mt-6 flex items-center justify-center gap-4 text-xl md:text-3xl text-brand-blue font-medium">
          <ShieldCheck className="w-7 h-7 md:w-8 md:h-8 text-green-600" />
          Garantía de 7 días • Compra segura
        </div>
      </motion.div>
    </div>
  </Section>
);

const EmotionalFinal = () => (
  <Section className="bg-brand-blue text-white text-center py-20 md:py-24">
    <h2 className="text-4xl md:text-6xl font-extrabold mb-12 tracking-tight">
      Imagínate dentro de 30 días...
    </h2>
    <div className="max-w-3xl mx-auto space-y-8 text-xl md:text-2xl font-light leading-relaxed">
      <p>Tu semana ya no depende de improvisar.</p>
      <p>Decides menos, te desgastas menos, y sostienes lo básico.</p>
      <p>Si un día no sale perfecto, no reinicias: continúas.</p>
      <p className="text-brand-orange font-bold text-3xl md:text-4xl pt-8">
        No se trata de perfección. Se trata de constancia posible.
      </p>
    </div>
  </Section>
);

const Closing = () => (
  <Section className="pt-24 md:pt-28 pb-10 md:pb-12 bg-white text-center">
    <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue mb-8">
      EL MOMENTO ES AHORA
    </h2>
    <div className="max-w-2xl mx-auto mb-12 space-y-4">
      <p className="text-xl">
        Si quieres una guía clara para ordenar tu alimentación y movimiento
        después de los 35, este es tu siguiente paso.
      </p>
      <h3 className="text-3xl font-bold text-brand-orange uppercase tracking-widest pt-4">
        "EMPIEZA HOY CON ESTRUCTURA"
      </h3>
      <p className="text-4xl md:text-5xl font-extrabold text-brand-blue">
        $9.99 USD
      </p>
    </div>
    <a
      href="https://pay.hotmart.com/T104626871Q"
      target="_self"
      rel="noopener noreferrer"
    >
      <Button primary className="text-xl md:text-2xl px-16 py-6 mb-16">
        OBTENER AHORA →
      </Button>
    </a>

    <div className="pt-12 border-t border-gray-100 italic text-gray-600">
      <p className="text-xl md:text-2xl mb-2">"Con equilibrio y estructura,"</p>
      <p className="font-bold text-brand-blue text-2xl">
        Tu Mentor de Alimentación
      </p>
    </div>
  </Section>
);

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "¿Cuánto tiempo debo invertir?",
      a: "Con 20 minutos a la semana es suficiente para tener claridad diaria sobre qué comer. No se trata de cocinar más ni de pasar horas planificando, sino de decidir con anticipación para no improvisar durante la semana.",
    },
    {
      q: "¿Cuándo veré resultados?",
      a: "Muchas personas notan más claridad y organización desde la primera semana. Los resultados sostenibles llegan al repetir lo básico durante varias semanas.",
    },
    {
      q: "¿Esto reemplaza asesoría médica o nutricional?",
      a: "No. PLAN35+ es una guía educativa y práctica. Si tienes una condición médica, lo ideal es consultarlo con un profesional.",
    },
    {
      q: "¿Qué pasa si no me funciona?",
      a: "El sistema está diseñado para semanas reales. Incluye formas de ajustar sin abandonar y continuar incluso cuando un día no sale como esperabas.",
    },
    {
      q: "¿En cuánto tiempo recibo el material?",
      a: "Acceso inmediato después de la compra. Todo es digital y disponible al instante.",
    },
  ];

  return (
    <Section className="bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-brand-blue mb-12">
        PREGUNTAS FRECUENTES
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="text-xl md:text-2xl font-bold w-full p-6 text-left flex justify-between items-center text-brand-blue hover:bg-gray-50 transition-colors"
            >
              <span>{faq.q}</span>
              {open === i ? <ChevronUp /> : <ChevronDown />}
            </button>
            {open === i && (
              <div className="text-lg md:text-xl leading-relaxed p-6 pt-0 text-gray-600">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
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
    ReactPixel.init("861138036964366");
    ReactPixel.pageView();
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white">
      <Hero />
      <Identification />
      <UniqueSystem />
      <InsidePreview />
      <HowItWorks />
      <Testimonials />
      <Comparison />
      <WhatYouGet />
      <Bonuses />
      <Pricing />
      <EmotionalFinal />
      <Closing />
      <FAQ />
      <Footer />
    </div>
  );
}
