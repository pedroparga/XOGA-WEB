import type { Metadata } from "next";
import type { ReactNode } from "react";

export type Lang = "es" | "en";
type PageKey = "home" | "about" | "contact" | "faq" | "legal";

const baseUrl = "https://xogaapp.es";

const iconCheck = (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <path d="M9.5 12.5l2 2 3.5-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18z" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const iconTarget = (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10z" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const iconPin = (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <path d="M12 2l4 8-4 12-4-12 4-8z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const iconClock = (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <path d="M12 3a9 9 0 1 0 9 9" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M12 7v6l4 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const iconUser = (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path d="M12 12a4 4 0 1 0-4-4a4 4 0 0 0 4 4z" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M4 20a8 8 0 0 1 16 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const iconForm = (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path d="M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M8 10h8M8 14h5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const iconTick = (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path d="M5 12l4 4 10-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const iconTrophy = (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path d="M8 4h8v4a4 4 0 0 1-8 0V4z" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M6 4h12M9 18h6M8 22h8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

type LegalSection = { title: string; paragraphs?: string[]; items?: string[] };
type LegalDocument = { id: string; title: string; intro?: string; sections: LegalSection[] };

type LangContent = {
  languageSwitcherLabel: string;
  menuLabel: string;
  navigation: Array<{ label: string; href: string }>;
  meta: Record<PageKey, { title: string; description: string; canonical: string }>;
  home: {
    hero: { title: string; description: string; downloadLabel: string; buttons: string[]; images: { src: string; alt: string; className: string }[] };
    ticker: string[];
    why: { kicker: string; title: string; items: Array<{ title: string; body: string; icon: ReactNode }> };
    showcase: { kicker: string; title: string; description: string; images: { src: string; alt: string; className: string }[] };
    sports: { kicker: string; title: string; note: string; items: Array<{ title: string; emoji: string }> };
    cta: { title: string; cta: string };
    steps: { kicker: string; title: string; anchorId: string; items: Array<{ title: string; body: string; number: string; icon: ReactNode }> };
  };
  about: {
    kicker: string;
    title: string;
    subtitle: string;
    intro: string;
    story: { title: string; paragraphs: string[] };
    drive: { title: string; missionTitle: string; mission: string; visionTitle: string; vision: string };
    valuesTitle: string;
    values: Array<{ title: string; body: string }>;
    forWhoTitle: string;
    forWho: string[];
  };
  contact: {
    kicker: string;
    title: string;
    description: string;
    formTitle: string;
    formDescription: string;
    sidebarTitle: string;
    socialLabel: string;
    supportTitle: string;
    supportBody: string;
    supportCta: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      subject: string;
      subjectOptions: string[];
      company: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      idleStatus: string;
      sending: string;
      required: string;
      success: string;
      error: string;
    };
  };
  faq: { kicker: string; title: string; items: Array<{ question: string; answer: string }>; helpTitle: string; helpBody: string; helpCta: string };
  legal: { kicker: string; title: string; description: string; documents: LegalDocument[] };
  footer: { contact: string; privacy: string; legal: string; cookies: string; rights: string };
};

const content: Partial<Record<Lang, LangContent>> = {
  es: {
    languageSwitcherLabel: "Selector de idioma",
    menuLabel: "Abrir menú",
    navigation: [
      { label: "Cómo se usa", href: "/es#como-se-usa" },
      { label: "Sobre nosotros", href: "/es/about" },
      { label: "Contacto", href: "/es/contact" },
      { label: "Preguntas frecuentes", href: "/es/faq" }
    ],
    meta: {
      home: { title: "XOGA | App para organizar partidos y torneos deportivos", description: "XOGA es la app para organizar partidos, crear torneos y jugar deportes cerca de ti. Une a tus amigos, elige nivel y confirma plazas en segundos.", canonical: "/es" },
      about: { title: "Sobre XOGA | App para organizar partidos deportivos", description: "Conoce XOGA, la app para organizar partidos y torneos deportivos. Nuestra misión es facilitar que juegues con gente de tu nivel, cerca de ti.", canonical: "/es/about" },
      contact: { title: "Contacto XOGA | Soporte de la app de partidos deportivos", description: "Contacto XOGA: soporte de la app para organizar partidos y torneos. Escríbenos para dudas, sugerencias o colaboraciones.", canonical: "/es/contact" },
      faq: { title: "Preguntas frecuentes | XOGA", description: "Preguntas frecuentes sobre XOGA, la app para organizar partidos y torneos deportivos. Resolvemos dudas sobre registros, niveles y disponibilidad.", canonical: "/es/faq" },
      legal: { title: "Legal | XOGA", description: "Políticas legales de XOGA: privacidad, aviso legal y cookies para la app y la web.", canonical: "/es/legal" }
    },
    home: {
      hero: {
        title: "Organiza partidos y torneos deportivos<br />con la app XOGA",
        description: "Crea partidos de fútbol, basket, tenis o voley y encuentra jugadores de tu nivel en tu ciudad.",
        downloadLabel: "Descarga la app",
        buttons: ["App Store", "Play Store"],
        images: [
          { src: "/imagenes/home-negro.webp", alt: "Pantalla de inicio de XOGA", className: "iphone-left" },
          { src: "/imagenes/lista-partidos-negro.webp", alt: "Pantalla de acceso a XOGA", className: "iphone-right" }
        ]
      },
      ticker: ["FUTBOL", "BASKET", "VOLEY", "TENNIS"],
      why: {
        kicker: "¿Por qué XOGA?",
        title: "Organizar partidos nunca fue tan fácil.",
        items: [
          { title: "Sin líos de mensajes", body: "Todo el mundo ve horario, nivel y plazas disponibles en tiempo real.", icon: iconCheck },
          { title: "Juega con gente de tu nivel", body: "Evita partidos desequilibrados y disfruta de cada encuentro.", icon: iconTarget },
          { title: "Partidos cerca de ti", body: "Encuentra jugadores y pistas en tu zona sin perder tiempo.", icon: iconPin },
          { title: "Más juego, menos organización", body: "XOGA se encarga de todo, tú solo juega.", icon: iconClock }
        ]
      },
      showcase: {
        kicker: "Así se ve XOGA",
        title: "Todo el control en tu bolsillo",
        description: "Crea, únete y juega. Así de simple.",
        images: [
          { src: "/imagenes/crear-partido-negro.webp", alt: "Pantalla para crear partidos en XOGA", className: "iphone-a" },
          { src: "/imagenes/login-negro.webp", alt: "Lista de partidos y torneos en XOGA", className: "iphone-b" },
          { src: "/imagenes/perfil-negro.webp", alt: "Perfil y nivel deportivo en XOGA", className: "iphone-c" }
        ]
      },
      sports: {
        kicker: "Deportes disponibles",
        title: "Elige tu deporte",
        note: "Y muchos más en camino...",
        items: [
          { title: "Futbol", emoji: "⚽️" },
          { title: "Basket", emoji: "🏀" },
          { title: "Tenis", emoji: "🎾" },
          { title: "Voley", emoji: "🏐" }
        ]
      },
      cta: { title: "Empieza a jugar hoy con XOGA", cta: "Descargar app" },
      steps: {
        kicker: "Cómo se usa XOGA",
        title: "Jugar nunca fue tan fácil. En solo unos pasos:",
        anchorId: "como-se-usa",
        items: [
          { number: "1", title: "Regístrate", body: "Crea tu perfil en segundos y elige deportes y nivel.", icon: iconUser },
          { number: "2", title: "Crea o únete", body: "Elige deporte, horario y lugar o únete a partidos cercanos.", icon: iconForm },
          { number: "3", title: "Confirma y juega", body: "Controla plazas y confirma asistencia sin líos.", icon: iconTick },
          { number: "4", title: "Mejora y compite", body: "Registra tu progreso y sube de nivel.", icon: iconTrophy }
        ]
      }
    },
    about: {
      kicker: "Sobre XOGA",
      title: "Somos la app XOGA",
      subtitle: "La app que nació para que organizar partidos no sea un problema.",
      intro: "XOGA surge de una idea sencilla: facilitar que las personas se junten para jugar sin líos, sin discusiones y sin perder tiempo organizando.",
      story: { title: "Nuestra historia", paragraphs: ["XOGA nace de algo que nos pasaba a todos: grupos de WhatsApp eternos, gente que falla a última hora y partidos que no se completan.", "Queríamos una forma sencilla de organizar partidos, encontrar gente de nuestro nivel y centrarnos solo en jugar. Así empezó XOGA: una app pensada por y para jugadores."] },
      drive: { title: "Qué nos mueve", missionTitle: "Misión", mission: "Facilitar que cualquier persona pueda jugar a su deporte favorito, cuando quiera y con quien quiera.", visionTitle: "Visión", vision: "Crear una comunidad deportiva activa, conectada y accesible para todos." },
      valuesTitle: "Nuestros valores",
      values: [{ title: "Sencillez", body: "Menos organización, más juego." }, { title: "Comunidad", body: "Jugar es mejor cuando se comparte." }, { title: "Deporte real", body: "Pensada para personas, no para estadísticas." }, { title: "Compromiso", body: "Respeto por el tiempo y el esfuerzo de todos." }],
      forWhoTitle: "Para quién es XOGA",
      forWho: ["Para personas que juegan después del trabajo.", "Para quien quiere competir sin presión.", "Para quien solo quiere que el partido salga adelante."]
    },
    contact: {
      kicker: "Contacto",
      title: "Contacta con XOGA",
      description: "¿Tienes dudas, sugerencias o quieres colaborar? Escríbenos.",
      formTitle: "Nos encanta escuchar a la comunidad",
      formDescription: "Si tienes cualquier duda o idea sobre la app de partidos XOGA, estaremos encantados de leerte.",
      sidebarTitle: "O si lo prefieres...",
      socialLabel: "Redes sociales:",
      supportTitle: "Ayúdanos a mejorar",
      supportBody: "XOGA está en constante evolución. Tu feedback nos ayuda a crear una mejor experiencia para todos.",
      supportCta: "Enviar sugerencia",
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        email: "Email",
        emailPlaceholder: "tu@email.com",
        subject: "Asunto",
        subjectOptions: ["Duda", "Sugerencia", "Problema técnico", "Colaboración", "Otro"],
        company: "Empresa",
        message: "Mensaje",
        messagePlaceholder: "Cuéntanos",
        submit: "Enviar mensaje",
        idleStatus: "Te responderemos lo antes posible.",
        sending: "Enviando...",
        required: "Completa nombre, email y mensaje.",
        success: "Mensaje enviado. Te responderemos pronto.",
        error: "Error enviando el mensaje. Prueba de nuevo."
      }
    },
    faq: {
      kicker: "Preguntas frecuentes",
      title: "Resolvemos las dudas más comunes sobre XOGA",
      items: [
        { question: "¿Qué es XOGA?", answer: "XOGA es una app que te permite crear y unirte a partidos deportivos de forma sencilla, organizando horarios, plazas y ubicaciones sin complicaciones." },
        { question: "¿XOGA es gratis?", answer: "Sí, XOGA es gratuita. Algunas funciones avanzadas podrán añadirse en el futuro, pero jugar y organizar partidos es totalmente gratuito." },
        { question: "¿Qué deportes puedo encontrar?", answer: "Actualmente puedes crear y unirte a partidos de fútbol, baloncesto, tenis y voley. Estamos trabajando para añadir más deportes." },
        { question: "¿Necesito crear un partido para jugar?", answer: "No. Puedes unirte a partidos ya creados por otros usuarios cerca de tu ubicación y según tu nivel." },
        { question: "¿Cómo funciona el nivel de los jugadores?", answer: "El nivel se define a partir de la información de tu perfil y del feedback de otros jugadores, para asegurar partidos equilibrados." },
        { question: "¿Qué pasa si alguien no se presenta?", answer: "Los jugadores son responsables de la asistencia, se puede controlar mediante el bloque de los jugadores." },
        { question: "¿Puedo cancelar mi asistencia?", answer: "Sí, simplemente con salir del partido la plaza queda liberada para otro jugador." },
        { question: "¿XOGA está disponible en toda España?", answer: "Sí, puedes usar XOGA en cualquier ciudad. La disponibilidad de partidos dependerá de la actividad en tu zona." },
        { question: "¿Necesito una cuenta para usar XOGA?", answer: "Sí, necesitas crear una cuenta para participar en partidos y mantener una experiencia segura para todos." },
        { question: "¿Mis datos están protegidos?", answer: "Sí. La seguridad y privacidad de tus datos es una prioridad. Solo se usan para mejorar tu experiencia dentro de la app." }
      ],
      helpTitle: "¿No encuentras lo que buscas?",
      helpBody: "Escríbenos y te ayudaremos lo antes posible.",
      helpCta: "Contactar con soporte"
    },
    legal: {
      kicker: "Legal",
      title: "Privacidad, aviso legal y cookies",
      description: "Toda la información legal de XOGA reunida en una única página.",
      documents: [
        { id: "privacy-policy", title: "Política de privacidad", intro: "Esta política explica de forma clara cómo tratamos los datos personales en XOGA.", sections: [{ title: "Identidad del responsable", paragraphs: ["Responsable: XOGA", "Email de contacto: xogaapp@gmail.com", "Ubicación: España"] }, { title: "Qué datos recogemos", items: ["Nombre o alias", "Email", "Datos de perfil deportivo (edad, sexo, deportes)", "Ubicación aproximada", "Mensajes enviados por formularios"] }, { title: "Para qué usamos estos datos", items: ["Crear y gestionar cuentas de usuario", "Organizar partidos deportivos", "Mejorar la experiencia dentro de la app", "Responder consultas o solicitudes", "Garantizar la seguridad de la plataforma"] }, { title: "Base legal del tratamiento", paragraphs: ["El tratamiento de datos se basa en el consentimiento del usuario y en la ejecución del servicio solicitado."] }, { title: "Conservación de los datos", paragraphs: ["Los datos se conservarán mientras el usuario mantenga su cuenta activa o durante el tiempo necesario para cumplir con obligaciones legales."] }, { title: "Cesión de datos a terceros", paragraphs: ["XOGA no vende datos personales.", "Algunos servicios técnicos pueden acceder a los datos únicamente para prestar el servicio (hosting, bases de datos o analítica)."] }, { title: "Derechos del usuario", paragraphs: ["El usuario puede ejercer sus derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad enviando un email a xogaapp@gmail.com."] }, { title: "Seguridad de los datos", paragraphs: ["Aplicamos medidas técnicas y organizativas para proteger los datos personales frente a accesos no autorizados."] }] },
        { id: "legal-notice", title: "Aviso legal", intro: "En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:", sections: [{ title: "Titular del sitio web", paragraphs: ["Titular: XOGA", "Email de contacto: xogaapp@gmail.com", "Ubicación: España"] }, { title: "Objeto", paragraphs: ["El presente Aviso Legal regula el acceso y uso del sitio web y la aplicación XOGA, cuyo objetivo es facilitar la organización de partidos deportivos entre usuarios."] }, { title: "Condiciones de uso", paragraphs: ["El acceso a la plataforma atribuye la condición de usuario y supone la aceptación de las condiciones aquí reflejadas. El usuario se compromete a utilizar la plataforma de forma responsable y conforme a la legalidad vigente."] }, { title: "Responsabilidad", paragraphs: ["XOGA no se responsabiliza del uso indebido de la plataforma ni de los posibles daños derivados de la participación en actividades deportivas organizadas por los usuarios. Cada usuario es responsable de su comportamiento y de su participación en las actividades deportivas."] }, { title: "Propiedad intelectual", paragraphs: ["Todos los contenidos del sitio web y la aplicación, incluidos textos, diseños, logotipos e imágenes, son propiedad del titular o cuentan con los derechos necesarios para su uso, quedando prohibida su reproducción sin autorización expresa."] }, { title: "Enlaces externos", paragraphs: ["XOGA no se responsabiliza del contenido de los enlaces a sitios web de terceros."] }, { title: "Modificaciones", paragraphs: ["XOGA se reserva el derecho a modificar el presente Aviso Legal en cualquier momento."] }, { title: "Legislación aplicable y jurisdicción", paragraphs: ["La relación entre XOGA y el usuario se regirá por la normativa española, sometiéndose las partes a los juzgados y tribunales de España."] }] },
        { id: "cookie-policy", title: "Política de cookies", intro: "La presente Política de Cookies es aplicable al uso de la aplicación XOGA, accesible desde dispositivos móviles.", sections: [{ title: "¿Qué son las cookies?", paragraphs: ["Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario cuando utiliza una aplicación o sitio web. En una app móvil, las cookies y tecnologías similares permiten el funcionamiento correcto del servicio y la gestión de sesiones."] }, { title: "Tecnologías utilizadas en la App", paragraphs: ["La App XOGA utiliza tecnologías equivalentes a cookies, tales como identificadores de sesión, almacenamiento local o tokens, necesarias para:"], items: ["Permitir el inicio y mantenimiento de la sesión del usuario", "Garantizar la seguridad de la cuenta", "Facilitar el funcionamiento correcto de la App", "Mejorar la experiencia del usuario"] }, { title: "Tipos de cookies y tecnologías utilizadas", paragraphs: ["Tecnologías técnicas y necesarias.", "La App utiliza tecnologías estrictamente necesarias para autenticar al usuario, mantener la sesión activa, gestionar la navegación interna y garantizar la seguridad del servicio.", "Estas tecnologías no requieren consentimiento previo, ya que son esenciales para el funcionamiento de la App.", "Algunos servicios técnicos de terceros pueden utilizar identificadores técnicos necesarios para la prestación del servicio.", "XOGA no utiliza cookies publicitarias ni de seguimiento con fines comerciales."] }, { title: "Gestión de cookies y tecnologías similares", paragraphs: ["Dado que la App utiliza únicamente tecnologías técnicas necesarias, no es posible desactivar estas sin afectar al funcionamiento del servicio.", "El usuario puede eliminar la App en cualquier momento desde su dispositivo móvil, lo que eliminará automáticamente los datos de navegación asociados."] }, { title: "Actualizaciones de la política", paragraphs: ["XOGA se reserva el derecho a modificar la presente Política de Cookies para adaptarla a cambios técnicos o legislativos. Cualquier modificación será publicada en el sitio web de XOGA."] }, { title: "Contacto", paragraphs: ["Para cualquier consulta relacionada con esta Política de Cookies, el usuario puede contactar a través del correo electrónico: xogaapp@gmail.com"] }] }
      ]
    },
    footer: { contact: "Contacto", privacy: "Política de privacidad", legal: "Aviso legal", cookies: "Política de cookies", rights: "© 2026 XOGA. Todos los derechos de imagen reservados." }
  },
  en: {
    languageSwitcherLabel: "Language selector",
    menuLabel: "Open menu",
    navigation: [
      { label: "How it works", href: "/en#how-it-works" },
      { label: "About", href: "/en/about" },
      { label: "Contact", href: "/en/contact" },
      { label: "FAQ", href: "/en/faq" }
    ],
    meta: {
      home: { title: "XOGA | App to organize sports games and tournaments", description: "XOGA is the app to organize games, create tournaments and play sports near you. Bring friends together, pick a level and confirm spots in seconds.", canonical: "/en" },
      about: { title: "About XOGA | App to organize sports games", description: "Meet XOGA, the app to organize sports games and tournaments. Our mission is to help you play with people at your level, near you.", canonical: "/en/about" },
      contact: { title: "Contact XOGA | Support for the sports games app", description: "Contact XOGA: support for the app to organize games and tournaments. Write to us for questions, suggestions or collaborations.", canonical: "/en/contact" },
      faq: { title: "FAQ | XOGA", description: "Frequently asked questions about XOGA, the app for organizing sports games and tournaments. Answers about accounts, levels and availability.", canonical: "/en/faq" },
      legal: { title: "Legal | XOGA", description: "XOGA legal policies: privacy, legal notice and cookie policy for the app and website.", canonical: "/en/legal" }
    },
    home: {
      hero: {
        title: "Organize sports games and tournaments<br />with the XOGA app",
        description: "Create soccer, basketball, tennis or volleyball matches and find players at your level in your city.",
        downloadLabel: "Download the app",
        buttons: ["App Store", "Play Store"],
        images: [
          { src: "/imagenes/home-negro.webp", alt: "XOGA home screen", className: "iphone-left" },
          { src: "/imagenes/lista-partidos-negro.webp", alt: "XOGA access screen", className: "iphone-right" }
        ]
      },
      ticker: ["SOCCER", "BASKETBALL", "VOLLEYBALL", "TENNIS"],
      why: {
        kicker: "Why XOGA?",
        title: "Organizing games has never been this easy.",
        items: [
          { title: "No endless message threads", body: "Everyone sees time, level and available spots in real time.", icon: iconCheck },
          { title: "Play with people at your level", body: "Avoid unbalanced games and enjoy every match.", icon: iconTarget },
          { title: "Games near you", body: "Find players and courts nearby without wasting time.", icon: iconPin },
          { title: "More play, less organizing", body: "XOGA handles the logistics. You just play.", icon: iconClock }
        ]
      },
      showcase: {
        kicker: "This is XOGA",
        title: "All the control in your pocket",
        description: "Create, join and play. It is that simple.",
        images: [
          { src: "/imagenes/crear-partido-negro.webp", alt: "Screen to create games in XOGA", className: "iphone-a" },
          { src: "/imagenes/login-negro.webp", alt: "List of games and tournaments in XOGA", className: "iphone-b" },
          { src: "/imagenes/perfil-negro.webp", alt: "Profile and skill level in XOGA", className: "iphone-c" }
        ]
      },
      sports: {
        kicker: "Available sports",
        title: "Choose your sport",
        note: "And many more on the way...",
        items: [
          { title: "Soccer", emoji: "⚽️" },
          { title: "Basketball", emoji: "🏀" },
          { title: "Tennis", emoji: "🎾" },
          { title: "Volleyball", emoji: "🏐" }
        ]
      },
      cta: { title: "Start playing today with XOGA", cta: "Download the app" },
      steps: {
        kicker: "How XOGA works",
        title: "Playing has never been so easy. Just a few steps:",
        anchorId: "how-it-works",
        items: [
          { number: "1", title: "Sign up", body: "Create your profile in seconds and choose sports and level.", icon: iconUser },
          { number: "2", title: "Create or join", body: "Pick sport, time and place, or join nearby games.", icon: iconForm },
          { number: "3", title: "Confirm and play", body: "Track spots and confirm attendance without hassle.", icon: iconTick },
          { number: "4", title: "Improve and compete", body: "Track your progress and level up.", icon: iconTrophy }
        ]
      }
    },
    about: {
      kicker: "About XOGA",
      title: "We are the XOGA app",
      subtitle: "The app created so organizing games is no longer a problem.",
      intro: "XOGA comes from a simple idea: make it easy for people to meet up and play without hassle, without arguments, and without wasting time organizing.",
      story: { title: "Our story", paragraphs: ["XOGA was born from something we all experienced: endless WhatsApp groups, people who cancel at the last minute, and games that never fill up.", "We wanted a simple way to organize games, find people at our level, and focus only on playing. That is how XOGA started: an app made by and for players."] },
      drive: { title: "What drives us", missionTitle: "Mission", mission: "Make it easy for anyone to play their favorite sport, whenever and with whoever they want.", visionTitle: "Vision", vision: "Create an active, connected and accessible sports community for everyone." },
      valuesTitle: "Our values",
      values: [{ title: "Simplicity", body: "Less organizing, more playing." }, { title: "Community", body: "Playing is better when shared." }, { title: "Real sport", body: "Built for people, not for statistics." }, { title: "Commitment", body: "Respect for everyone's time and effort." }],
      forWhoTitle: "Who XOGA is for",
      forWho: ["For people who play after work.", "For those who want to compete without pressure.", "For anyone who just wants the game to happen."]
    },
    contact: {
      kicker: "Contact",
      title: "Contact XOGA",
      description: "Have questions, suggestions or want to collaborate? Write to us.",
      formTitle: "We love hearing from the community",
      formDescription: "If you have any question or idea about the XOGA sports app, we will be happy to read it.",
      sidebarTitle: "Or if you prefer...",
      socialLabel: "Social:",
      supportTitle: "Help us improve",
      supportBody: "XOGA is constantly evolving. Your feedback helps us build a better experience for everyone.",
      supportCta: "Send suggestion",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@email.com",
        subject: "Subject",
        subjectOptions: ["Question", "Suggestion", "Technical issue", "Collaboration", "Other"],
        company: "Company",
        message: "Message",
        messagePlaceholder: "Tell us",
        submit: "Send message",
        idleStatus: "We will reply as soon as possible.",
        sending: "Sending...",
        required: "Complete name, email and message.",
        success: "Message sent. We will reply soon.",
        error: "Error sending the message. Please try again."
      }
    },
    faq: {
      kicker: "FAQ",
      title: "Answers to the most common questions about XOGA",
      items: [
        { question: "What is XOGA?", answer: "XOGA is an app that lets you create and join sports games easily, organizing times, spots and locations without hassle." },
        { question: "Is XOGA free?", answer: "Yes, XOGA is free. Advanced features may be added in the future, but playing and organizing games is completely free." },
        { question: "Which sports can I find?", answer: "Right now you can create and join soccer, basketball, tennis and volleyball games. We are working to add more sports." },
        { question: "Do I need to create a game to play?", answer: "No. You can join games created by other users near your location and matching your level." },
        { question: "How does player level work?", answer: "Level is defined based on your profile information and feedback from other players to keep games balanced." },
        { question: "What happens if someone does not show up?", answer: "Players are responsible for attendance, and it can be managed through the players block." },
        { question: "Can I cancel my attendance?", answer: "Yes, by simply leaving the game, the spot is freed up for another player." },
        { question: "Is XOGA available across Spain?", answer: "Yes, you can use XOGA in any city. Game availability depends on activity in your area." },
        { question: "Do I need an account to use XOGA?", answer: "Yes, you need an account to participate in games and keep the experience safe for everyone." },
        { question: "Is my data protected?", answer: "Yes. Data security and privacy are a priority. We only use data to improve your experience in the app." }
      ],
      helpTitle: "Can't find what you are looking for?",
      helpBody: "Write to us and we will help you as soon as possible.",
      helpCta: "Contact support"
    },
    legal: {
      kicker: "Legal",
      title: "Privacy, legal notice and cookies",
      description: "All XOGA legal information grouped in a single page.",
      documents: [
        { id: "privacy-policy", title: "Privacy policy", intro: "This policy clearly explains how we handle personal data at XOGA.", sections: [{ title: "Controller identity", paragraphs: ["Controller: XOGA", "Contact email: xogaapp@gmail.com", "Location: Spain"] }, { title: "What data we collect", items: ["Name or alias", "Email", "Sports profile data (age, sex, sports)", "Approximate location", "Messages sent through forms"] }, { title: "How we use this data", items: ["Create and manage user accounts", "Organize sports games", "Improve the experience in the app", "Respond to inquiries or requests", "Ensure platform security"] }, { title: "Legal basis", paragraphs: ["Data processing is based on user consent and the execution of the requested service."] }, { title: "Data retention", paragraphs: ["Data will be kept while the user maintains an active account or for the time required to meet legal obligations."] }, { title: "Sharing data with third parties", paragraphs: ["XOGA does not sell personal data.", "Some technical services may access data only to provide the service (hosting, databases, or analytics)."] }, { title: "User rights", paragraphs: ["The user can exercise access, rectification, deletion, restriction, objection, and portability rights by sending an email to xogaapp@gmail.com."] }, { title: "Data security", paragraphs: ["We apply technical and organizational measures to protect personal data from unauthorized access."] }] },
        { id: "legal-notice", title: "Legal notice", intro: "In compliance with Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the following information is provided:", sections: [{ title: "Website owner", paragraphs: ["Owner: XOGA", "Contact email: xogaapp@gmail.com", "Location: Spain"] }, { title: "Purpose", paragraphs: ["This Legal Notice governs access to and use of the XOGA website and application, aimed at facilitating the organization of sports games between users."] }, { title: "Terms of use", paragraphs: ["Access to the platform grants user status and implies acceptance of these terms. The user agrees to use the platform responsibly and in accordance with applicable law."] }, { title: "Liability", paragraphs: ["XOGA is not responsible for improper use of the platform or for any damages arising from participation in sports activities organized by users. Each user is responsible for their own behavior and participation."] }, { title: "Intellectual property", paragraphs: ["All content on the website and app, including texts, designs, logos and images, is owned by the holder or used with the necessary rights, and may not be reproduced without express authorization."] }, { title: "External links", paragraphs: ["XOGA is not responsible for the content of links to third-party websites."] }, { title: "Modifications", paragraphs: ["XOGA reserves the right to modify this Legal Notice at any time."] }, { title: "Applicable law and jurisdiction", paragraphs: ["The relationship between XOGA and the user is governed by Spanish law, and the parties submit to the courts and tribunals of Spain."] }] },
        { id: "cookie-policy", title: "Cookie policy", intro: "This Cookie Policy applies to the use of the XOGA application, accessible from mobile devices.", sections: [{ title: "What are cookies?", paragraphs: ["Cookies are small text files stored on a user's device when they use an application or website. In a mobile app context, cookies and similar technologies enable proper service operation and session management."] }, { title: "Technologies used in the App", paragraphs: ["The XOGA App uses technologies equivalent to cookies, such as session identifiers, local storage, or tokens, necessary to:"], items: ["Allow the user to sign in and stay signed in", "Ensure account security", "Enable proper app operation", "Improve the user experience"] }, { title: "Types of cookies and technologies used", paragraphs: ["Technical and necessary technologies.", "The App uses strictly necessary technologies to authenticate the user, keep the session active, manage internal navigation and ensure service security.", "These technologies do not require prior consent because they are essential for the App to work.", "Some third-party technical services may use technical identifiers needed to provide the service.", "XOGA does not use advertising or tracking cookies for commercial purposes."] }, { title: "Managing cookies and similar technologies", paragraphs: ["Since the App uses only necessary technical technologies, it is not possible to disable them without affecting the service.", "The user can delete the App at any time from their mobile device, which will automatically remove associated browsing data."] }, { title: "Policy updates", paragraphs: ["XOGA reserves the right to modify this Cookie Policy to adapt it to technical or legal changes. Any changes will be published on the XOGA website."] }, { title: "Contact", paragraphs: ["For any questions related to this Cookie Policy, the user can contact via email: xogaapp@gmail.com"] }] }
      ]
    },
    footer: { contact: "Contact", privacy: "Privacy policy", legal: "Legal notice", cookies: "Cookie policy", rights: "© 2026 XOGA. All image rights reserved." }
  }
};

export function getLangContent(lang: Lang) {
  return content[lang] as LangContent;
}

export function buildMetadata(lang: Lang, page: PageKey): Metadata {
  const current = getLangContent(lang).meta[page];

  return {
    title: current.title,
    description: current.description,
    alternates: {
      canonical: current.canonical,
      languages: {
        es: getLangContent("es").meta[page].canonical,
        en: getLangContent("en").meta[page].canonical
      }
    },
    openGraph: {
      title: current.title,
      description: current.description,
      url: `${baseUrl}${current.canonical}`,
      type: "website",
      images: [{ url: "/imagenes/og-xoga.webp", width: 1200, height: 630, alt: "XOGA" }]
    },
    twitter: {
      card: "summary_large_image",
      title: current.title,
      description: current.description,
      images: ["/imagenes/og-xoga.webp"]
    }
  };
}
