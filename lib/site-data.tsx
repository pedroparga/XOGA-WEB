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
          { number: "4", title: "Mejora y compite", body: "Guarda tus partidos y vuelve a jugar con tu grupo cuando quieras.", icon: iconTrophy }
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
        {
          id: "privacy-policy",
          title: "Política de privacidad",
          intro: "Esta política explica de forma clara cómo tratamos los datos personales en la web y la app XOGA.",
          sections: [
            { title: "Identidad del responsable", paragraphs: ["Responsable: XOGA", "Email de contacto: xogaapp@gmail.com", "Ubicación: España"] },
            { title: "Datos que tratamos", items: ["Datos de cuenta y autenticación: email, contraseña cifrada o identificadores de inicio de sesión con Google o Apple.", "Datos de perfil: nombre, apellidos, alias, fecha de nacimiento, género, foto de perfil, descripción, deportes, preferencias y fecha de registro.", "Datos de uso deportivo: partidos creados o unidos, horarios, plazas, equipos, resultados, historial, valoraciones y participación en torneos o encuentros.", "Datos de ubicación: ubicación aproximada o precisa cuando el usuario la activa para mostrar mapas, encontrar partidos cercanos, proponer campos o abrir indicaciones.", "Comunicaciones y moderación: mensajes de chat, formularios de contacto, reportes, bloqueos, incidencias y comunicaciones con soporte.", "Datos técnicos: identificadores de sesión, tokens de autenticación, identificadores de dispositivo para notificaciones push, idioma, preferencias de la app y datos necesarios para seguridad y funcionamiento."] },
            { title: "Finalidades", items: ["Crear y gestionar cuentas de usuario.", "Organizar partidos, equipos, plazas, invitaciones, enlaces compartidos y chats asociados.", "Mostrar mapas, campos deportivos y partidos cercanos.", "Enviar notificaciones operativas sobre partidos, chats, cambios, cancelaciones, expulsiones o recordatorios.", "Gestionar fotos de perfil, preferencias, historial, valoraciones, reportes, bloqueos y herramientas de moderación.", "Responder consultas enviadas desde la web o la app.", "Prevenir abuso, fraude, accesos no autorizados y usos contrarios a la comunidad."] },
            { title: "Base legal", paragraphs: ["Tratamos los datos necesarios para prestar el servicio sobre la base de la ejecución de la relación con el usuario. Determinados tratamientos, como comunicaciones comerciales o permisos opcionales de ubicación, fotos o notificaciones, se basan en el consentimiento. También podemos tratar datos por interés legítimo para mantener la seguridad, prevenir abuso y moderar la comunidad, y por obligación legal cuando corresponda."] },
            { title: "Proveedores y destinatarios", paragraphs: ["XOGA no vende datos personales.", "Para prestar el servicio usamos proveedores técnicos que pueden tratar datos por cuenta de XOGA, entre ellos Supabase para autenticación, base de datos, almacenamiento y funciones backend; Firebase Cloud Messaging para notificaciones push; Google Maps, Google Places y Apple Maps para mapas, búsqueda de lugares e indicaciones; Google y Apple para inicio de sesión; Resend para el envío de emails de contacto; y Cloudflare para alojamiento y seguridad de la web."] },
            { title: "Transferencias internacionales", paragraphs: ["Algunos proveedores pueden tratar datos fuera del Espacio Económico Europeo. Cuando sea necesario, se utilizarán garantías previstas por la normativa de protección de datos, como decisiones de adecuación o cláusulas contractuales tipo."] },
            { title: "Conservación", paragraphs: ["Los datos se conservan mientras la cuenta esté activa o sean necesarios para prestar el servicio. El usuario puede solicitar la eliminación de su cuenta; en ese caso se eliminarán o anonimizarán los datos asociados salvo aquellos que deban conservarse por seguridad, prevención de abuso, defensa de reclamaciones u obligaciones legales. Los mensajes, reportes, bloqueos, eventos de notificación y registros técnicos se conservan durante el tiempo necesario para operar y proteger la plataforma."] },
            { title: "Derechos del usuario", paragraphs: ["El usuario puede solicitar acceso, rectificación, supresión, oposición, limitación, portabilidad y retirada del consentimiento escribiendo a xogaapp@gmail.com. También puede reclamar ante la Agencia Española de Protección de Datos si considera que el tratamiento no se ajusta a la normativa."] },
            { title: "Seguridad", paragraphs: ["Aplicamos medidas técnicas y organizativas para proteger los datos, incluyendo autenticación, control de acceso, reglas de seguridad en base de datos, almacenamiento seguro de tokens y limitación de permisos. Ningún sistema es infalible, por lo que recomendamos proteger las credenciales de acceso y mantener actualizado el dispositivo."] }
          ]
        },
        {
          id: "legal-notice",
          title: "Aviso legal",
          intro: "En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:",
          sections: [
            { title: "Titular del servicio", paragraphs: ["Titular: XOGA", "Email de contacto: xogaapp@gmail.com", "Ubicación: España"] },
            { title: "Objeto", paragraphs: ["Este Aviso Legal regula el acceso y uso del sitio web y la aplicación XOGA, cuyo objetivo es facilitar la organización de partidos deportivos, equipos, chats, campos, invitaciones y actividades relacionadas entre usuarios."] },
            { title: "Condiciones de uso", paragraphs: ["El usuario se compromete a utilizar XOGA de forma lícita, respetuosa y conforme a estas condiciones. No está permitido publicar contenido ofensivo, falso, ilegal, discriminatorio, que vulnere derechos de terceros o que interfiera con la seguridad del servicio."] },
            { title: "Cuenta y responsabilidad del usuario", paragraphs: ["El usuario es responsable de la veracidad de los datos que facilite, de mantener la confidencialidad de sus credenciales y de la actividad realizada desde su cuenta. XOGA puede limitar, suspender o cancelar cuentas cuando detecte incumplimientos, abuso, reportes graves o riesgos para otros usuarios."] },
            { title: "Actividad deportiva", paragraphs: ["XOGA facilita la organización y comunicación entre usuarios, pero no organiza directamente los partidos ni supervisa las instalaciones deportivas. Cada usuario participa bajo su propia responsabilidad y debe valorar su estado físico, cumplir las normas del lugar y actuar con prudencia."] },
            { title: "Contenidos de usuarios y moderación", paragraphs: ["Los usuarios pueden crear partidos, mensajes, reportes, fotos de perfil y otros contenidos. XOGA podrá revisar, retirar o bloquear contenidos o cuentas cuando sea necesario para proteger la comunidad, cumplir la ley o mantener el funcionamiento del servicio."] },
            { title: "Propiedad intelectual", paragraphs: ["Los contenidos propios de XOGA, incluyendo textos, diseños, logotipos, imágenes, software y elementos visuales, pertenecen a XOGA o cuentan con los derechos necesarios para su uso. Queda prohibida su reproducción o explotación no autorizada."] },
            { title: "Servicios de terceros", paragraphs: ["El servicio puede integrar proveedores externos como Supabase, Google, Apple, Firebase, Cloudflare, Resend y servicios de mapas. XOGA no controla los sitios o servicios de terceros a los que el usuario acceda fuera de la plataforma."] },
            { title: "Modificaciones", paragraphs: ["XOGA puede modificar la web, la app, sus funcionalidades y estos textos legales para adaptarlos a cambios técnicos, operativos o normativos. La versión vigente será la publicada en este sitio web."] },
            { title: "Legislación aplicable y jurisdicción", paragraphs: ["La relación entre XOGA y el usuario se regirá por la normativa española. Cuando la normativa lo permita, las partes se someterán a los juzgados y tribunales de España."] }
          ]
        },
        {
          id: "cookie-policy",
          title: "Política de cookies",
          intro: "Esta política explica el uso de cookies y tecnologías similares en la web y la app XOGA.",
          sections: [
            { title: "Qué son", paragraphs: ["Las cookies son pequeños archivos o identificadores que se almacenan en el navegador. En una app móvil existen tecnologías similares, como almacenamiento local, almacenamiento seguro, identificadores de sesión, tokens o preferencias del dispositivo."] },
            { title: "Tecnologías necesarias", paragraphs: ["XOGA utiliza cookies y tecnologías similares necesarias para prestar el servicio y mantenerlo seguro."], items: ["Mantener la sesión iniciada y autenticar al usuario.", "Guardar preferencias como idioma, tema, ajustes de ubicación y notificaciones.", "Proteger la cuenta y prevenir accesos no autorizados.", "Permitir enlaces compartidos, recuperación de contraseña, navegación y funcionamiento básico de la web y la app."] },
            { title: "Tecnologías de terceros", paragraphs: ["Al usar funciones concretas pueden intervenir terceros técnicos: Supabase para autenticación, base de datos y almacenamiento; Firebase para notificaciones push; Google Maps, Google Places y Apple Maps para mapas e indicaciones; Google y Apple para inicio de sesión; Cloudflare para alojamiento y seguridad; y Resend para emails de contacto. Estos servicios pueden usar identificadores técnicos necesarios para prestar su función."] },
            { title: "Analítica y publicidad", paragraphs: ["XOGA no utiliza cookies publicitarias ni cookies de seguimiento comercial en la web. Si en el futuro se incorporan cookies analíticas o publicitarias no necesarias, se solicitará el consentimiento correspondiente antes de utilizarlas."] },
            { title: "Cómo gestionarlas", paragraphs: ["En la web, el usuario puede bloquear o eliminar cookies desde la configuración del navegador. En la app, puede gestionar permisos como ubicación, fotos y notificaciones desde los ajustes del dispositivo, y puede cerrar sesión o eliminar la app para borrar datos locales. Desactivar tecnologías necesarias puede impedir que XOGA funcione correctamente."] },
            { title: "Actualizaciones y contacto", paragraphs: ["XOGA puede actualizar esta política para reflejar cambios técnicos o normativos. Para cualquier consulta, el usuario puede escribir a xogaapp@gmail.com."] }
          ]
        }
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
          { number: "4", title: "Improve and compete", body: "Save your games and play again with your group whenever you want.", icon: iconTrophy }
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
        {
          id: "privacy-policy",
          title: "Privacy policy",
          intro: "This policy explains clearly how we process personal data on the XOGA website and app.",
          sections: [
            { title: "Controller identity", paragraphs: ["Controller: XOGA", "Contact email: xogaapp@gmail.com", "Location: Spain"] },
            { title: "Data we process", items: ["Account and authentication data: email, encrypted password or Google/Apple sign-in identifiers.", "Profile data: name, surname, nickname, birth date, gender, profile photo, description, sports, preferences and registration date.", "Sports activity data: games created or joined, schedules, spots, teams, scores, history, ratings and participation in tournaments or matches.", "Location data: approximate or precise location when enabled by the user to show maps, find nearby matches, suggest fields or open directions.", "Communications and moderation: chat messages, contact forms, reports, blocks, incidents and support communications.", "Technical data: session identifiers, authentication tokens, device identifiers for push notifications, language, app preferences and data needed for security and operation."] },
            { title: "Purposes", items: ["Create and manage user accounts.", "Organize matches, teams, spots, invitations, shared links and related chats.", "Display maps, sports fields and nearby matches.", "Send operational notifications about matches, chats, changes, cancellations, removals or reminders.", "Manage profile photos, preferences, history, ratings, reports, blocks and moderation tools.", "Reply to enquiries sent from the website or app.", "Prevent abuse, fraud, unauthorized access and uses that are harmful to the community."] },
            { title: "Legal basis", paragraphs: ["We process data needed to provide the service on the basis of performance of the user relationship. Certain processing, such as commercial communications or optional permissions for location, photos or notifications, is based on consent. We may also process data under legitimate interest to maintain security, prevent abuse and moderate the community, and under legal obligation where applicable."] },
            { title: "Providers and recipients", paragraphs: ["XOGA does not sell personal data.", "To provide the service we use technical providers that may process data on behalf of XOGA, including Supabase for authentication, database, storage and backend functions; Firebase Cloud Messaging for push notifications; Google Maps, Google Places and Apple Maps for maps, place search and directions; Google and Apple for sign-in; Resend for contact emails; and Cloudflare for website hosting and security."] },
            { title: "International transfers", paragraphs: ["Some providers may process data outside the European Economic Area. Where required, safeguards under data protection law will be used, such as adequacy decisions or standard contractual clauses."] },
            { title: "Retention", paragraphs: ["Data is kept while the account remains active or while it is needed to provide the service. The user may request account deletion; in that case related data will be deleted or anonymized except data that must be kept for security, abuse prevention, legal claims or legal obligations. Messages, reports, blocks, notification events and technical logs are kept for the time needed to operate and protect the platform."] },
            { title: "User rights", paragraphs: ["The user may request access, rectification, erasure, objection, restriction, portability and withdrawal of consent by writing to xogaapp@gmail.com. The user may also lodge a complaint with the Spanish Data Protection Agency if they believe processing does not comply with applicable law."] },
            { title: "Security", paragraphs: ["We apply technical and organizational measures to protect data, including authentication, access control, database security rules, secure token storage and permission minimization. No system is infallible, so we recommend protecting login credentials and keeping the device updated."] }
          ]
        },
        {
          id: "legal-notice",
          title: "Legal notice",
          intro: "In compliance with Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the following information is provided:",
          sections: [
            { title: "Service owner", paragraphs: ["Owner: XOGA", "Contact email: xogaapp@gmail.com", "Location: Spain"] },
            { title: "Purpose", paragraphs: ["This Legal Notice governs access to and use of the XOGA website and app, whose purpose is to help users organize sports games, teams, chats, fields, invitations and related activities."] },
            { title: "Terms of use", paragraphs: ["The user agrees to use XOGA lawfully, respectfully and in accordance with these terms. It is not permitted to publish offensive, false, illegal or discriminatory content, content that infringes third-party rights, or content that interferes with service security."] },
            { title: "Account and user responsibility", paragraphs: ["The user is responsible for the accuracy of the data provided, for keeping credentials confidential and for activity carried out from their account. XOGA may limit, suspend or cancel accounts where breaches, abuse, serious reports or risks to other users are detected."] },
            { title: "Sports activity", paragraphs: ["XOGA facilitates organization and communication between users, but does not directly organize matches or supervise sports facilities. Each user participates under their own responsibility and must assess their physical condition, follow venue rules and act prudently."] },
            { title: "User content and moderation", paragraphs: ["Users may create matches, messages, reports, profile photos and other content. XOGA may review, remove or block content or accounts where needed to protect the community, comply with the law or maintain the service."] },
            { title: "Intellectual property", paragraphs: ["XOGA's own content, including texts, designs, logos, images, software and visual elements, belongs to XOGA or is used with the necessary rights. Unauthorized reproduction or exploitation is prohibited."] },
            { title: "Third-party services", paragraphs: ["The service may integrate external providers such as Supabase, Google, Apple, Firebase, Cloudflare, Resend and map services. XOGA does not control third-party websites or services accessed by the user outside the platform."] },
            { title: "Changes", paragraphs: ["XOGA may change the website, app, features and these legal texts to adapt them to technical, operational or legal changes. The current version will be the one published on this website."] },
            { title: "Applicable law and jurisdiction", paragraphs: ["The relationship between XOGA and the user is governed by Spanish law. Where legally permitted, the parties submit to the courts and tribunals of Spain."] }
          ]
        },
        {
          id: "cookie-policy",
          title: "Cookie policy",
          intro: "This policy explains the use of cookies and similar technologies on the XOGA website and app.",
          sections: [
            { title: "What they are", paragraphs: ["Cookies are small files or identifiers stored in the browser. In a mobile app there are similar technologies, such as local storage, secure storage, session identifiers, tokens or device preferences."] },
            { title: "Necessary technologies", paragraphs: ["XOGA uses cookies and similar technologies that are necessary to provide the service and keep it secure."], items: ["Keep the user signed in and authenticate the account.", "Save preferences such as language, theme, location settings and notification settings.", "Protect the account and prevent unauthorized access.", "Enable shared links, password recovery, navigation and basic operation of the website and app."] },
            { title: "Third-party technologies", paragraphs: ["When using specific features, technical third parties may be involved: Supabase for authentication, database and storage; Firebase for push notifications; Google Maps, Google Places and Apple Maps for maps and directions; Google and Apple for sign-in; Cloudflare for hosting and security; and Resend for contact emails. These services may use technical identifiers needed to provide their function."] },
            { title: "Analytics and advertising", paragraphs: ["XOGA does not use advertising cookies or commercial tracking cookies on the website. If non-essential analytics or advertising cookies are added in the future, the corresponding consent will be requested before using them."] },
            { title: "How to manage them", paragraphs: ["On the website, the user may block or delete cookies from browser settings. In the app, permissions such as location, photos and notifications can be managed from device settings, and the user may sign out or delete the app to remove local data. Disabling necessary technologies may prevent XOGA from working correctly."] },
            { title: "Updates and contact", paragraphs: ["XOGA may update this policy to reflect technical or legal changes. For any questions, the user may write to xogaapp@gmail.com."] }
          ]
        }
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
