export type Lang = "es" | "en" | "de";

export const LANGUAGES: { code: Lang; label: string }[] = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
];

export const translations: Record<Lang, Record<string, string>> = {
  es: {
    "nav.inicio": "Inicio",
    "nav.nosotros": "Nosotros",
    "nav.mision": "Misión",
    "nav.programas": "Programas",
    "nav.equipo": "Equipo",
    "nav.testimonios": "Testimonios",
    "nav.contacto": "Contacto",

    "hero.title": "Transformando vidas con amor, inclusión y oportunidades",
    "hero.subtitle":
      "Trabajamos para brindar apoyo a quienes más lo necesitan, generando empleo digno y promoviendo el desarrollo social en Colombia.",
    "hero.cta1": "¿Cómo puedo ayudar?",
    "hero.cta2": "Trabaja con nosotros",

    "nosotros.title": "Nuestra Visión",
    "nosotros.desc":
      "Ser una fundación reconocida por transformar vidas a través de la solidaridad, la inclusión y la generación de oportunidades, impactando positivamente a miles de familias y convirtiéndonos en un referente de desarrollo social sostenible en Colombia.",

    "mision.title": "Nuestra Misión",
    "mision.desc":
      "Trabajar por el bienestar de las familias en situación de vulnerabilidad, brindando apoyo social, acompañamiento y oportunidades de desarrollo, mientras promovemos la inclusión de personas con discapacidad y la generación de empleo digno mediante proyectos productivos sostenibles.",
    "mision.item1": "Apoyo a familias de escasos recursos",
    "mision.item2": "Inclusión de personas con discapacidad",
    "mision.item3": "Apoyo a enfermedades huérfanas",
    "mision.item4": "Generación de empleo digno",

    "programas.title": "Nuestros Programas",
    "programas.desc":
      "A través de nuestras iniciativas, buscamos generar un impacto real y sostenible en las comunidades más vulnerables de Colombia.",
    "programas.card1.title": "Apoyo Familiar",
    "programas.card1.desc":
      "Entregamos ayudas alimentarias, kits escolares y acompañamiento psicosocial a familias en situación de pobreza.",
    "programas.card2.title": "Inclusión y Discapacidad",
    "programas.card2.desc":
      "Promovemos la inclusión social y laboral de personas con discapacidad, brindando formación y oportunidades de empleo.",
    "programas.card3.title": "Empleo Digno",
    "programas.card3.desc":
      "A través de la fabricación y distribución de productos de incienso, generamos empleo digno para comunidades vulnerables.",
    "programas.card4.title": "Enfermedades Huérfanas",
    "programas.card4.desc":
      "Acompañamos a pacientes con enfermedades huérfanas y sus familias, brindando apoyo emocional y gestionando recursos.",

    "equipo.title": "Nuestro Equipo",
    "equipo.desc":
      "Conoce a las personas apasionadas que hacen posible nuestra misión cada día.",

    "testimonios.title": "Testimonios",
    "testimonios.desc":
      "Conoce las historias de quienes han sido impactados por nuestra labor.",

    "contacto.title": "Contáctanos",
    "contacto.call": "Llámanos",
    "contacto.email": "Escríbenos",
    "contacto.address": "Dirección",
    "contacto.phone": "+57 xxx xxx xx xx",
    "contacto.mail": "info@fundacionalejandramejia.org",
    "contacto.addr": "Cali, Colombia",
    "contacto.form.title": "Escríbenos",
    "contacto.form.desc":
      "Déjanos tu mensaje y te responderemos a la brevedad posible.",
    "contacto.form.name": "Nombre",
    "contacto.form.email": "Correo electrónico",
    "contacto.form.message": "Mensaje",
    "contacto.form.submit": "Enviar mensaje",

    "footer.desc":
      "Trabajamos por el bienestar de las familias colombianas, promoviendo la inclusión, la solidaridad y el empleo digno.",
    "footer.nav.title": "Enlaces",
    "footer.contact.title": "Contacto",
    "footer.copyright": "Todos los derechos reservados.",

    "stats.familias": "Familias beneficiadas",
    "stats.empleos": "Empleos generados",
    "stats.voluntarios": "Voluntarios activos",
    "stats.anos": "Años de labor",
  },

  en: {
    "nav.inicio": "Home",
    "nav.nosotros": "About Us",
    "nav.mision": "Mission",
    "nav.programas": "Programs",
    "nav.equipo": "Team",
    "nav.testimonios": "Testimonials",
    "nav.contacto": "Contact",

    "hero.title": "Transforming lives with love, inclusion and opportunities",
    "hero.subtitle":
      "We work to support those who need it most, generating dignified employment and promoting social development in Colombia.",
    "hero.cta1": "How can I help?",
    "hero.cta2": "Work with us",

    "nosotros.title": "Our Vision",
    "nosotros.desc":
      "To be a foundation recognized for transforming lives through solidarity, inclusion and the generation of opportunities, positively impacting thousands of families and becoming a benchmark for sustainable social development in Colombia.",

    "mision.title": "Our Mission",
    "mision.desc":
      "To work for the well-being of families in vulnerable situations, providing social support, accompaniment and development opportunities, while promoting the inclusion of people with disabilities and the generation of dignified employment through sustainable productive projects.",
    "mision.item1": "Support for low-income families",
    "mision.item2": "Inclusion of people with disabilities",
    "mision.item3": "Support for rare diseases",
    "mision.item4": "Generation of dignified employment",

    "programas.title": "Our Programs",
    "programas.desc":
      "Through our initiatives, we seek to generate a real and sustainable impact in the most vulnerable communities of Colombia.",
    "programas.card1.title": "Family Support",
    "programas.card1.desc":
      "We deliver food aid, school kits and psychosocial support to families living in poverty.",
    "programas.card2.title": "Inclusion & Disability",
    "programas.card2.desc":
      "We promote social and labor inclusion of people with disabilities, providing training and employment opportunities.",
    "programas.card3.title": "Dignified Employment",
    "programas.card3.desc":
      "Through the manufacturing and distribution of incense products, we generate dignified employment for vulnerable communities.",
    "programas.card4.title": "Rare Diseases",
    "programas.card4.desc":
      "We accompany patients with rare diseases and their families, providing emotional support and managing resources.",

    "equipo.title": "Our Team",
    "equipo.desc":
      "Meet the passionate people who make our mission possible every day.",

    "testimonios.title": "Testimonials",
    "testimonios.desc":
      "Hear the stories of those who have been impacted by our work.",

    "contacto.title": "Contact Us",
    "contacto.call": "Call Us",
    "contacto.email": "Email Us",
    "contacto.address": "Address",
    "contacto.phone": "+57 xxx xxx xx xx",
    "contacto.mail": "info@fundacionalejandramejia.org",
    "contacto.addr": "Cali, Colombia",
    "contacto.form.title": "Get in Touch",
    "contacto.form.desc":
      "Leave us a message and we will get back to you as soon as possible.",
    "contacto.form.name": "Name",
    "contacto.form.email": "Email",
    "contacto.form.message": "Message",
    "contacto.form.submit": "Send message",

    "footer.desc":
      "We work for the well-being of Colombian families, promoting inclusion, solidarity and dignified employment.",
    "footer.nav.title": "Links",
    "footer.contact.title": "Contact",
    "footer.copyright": "All rights reserved.",

    "stats.familias": "Families Benefited",
    "stats.empleos": "Jobs Created",
    "stats.voluntarios": "Active Volunteers",
    "stats.anos": "Years of Service",
  },

  de: {
    "nav.inicio": "Startseite",
    "nav.nosotros": "Über uns",
    "nav.mision": "Mission",
    "nav.programas": "Programme",
    "nav.equipo": "Team",
    "nav.testimonios": "Testimonien",
    "nav.contacto": "Kontakt",

    "hero.title": "Leben verändern mit Liebe, Inklusion und Chancen",
    "hero.subtitle":
      "Wir arbeiten daran, diejenigen zu unterstützen, die es am meisten brauchen, schaffen würdige Arbeitsplätze und fördern die soziale Entwicklung in Kolumbien.",
    "hero.cta1": "Wie kann ich helfen?",
    "hero.cta2": "Arbeiten Sie mit uns",

    "nosotros.title": "Unsere Vision",
    "nosotros.desc":
      "Eine anerkannte Stiftung zu sein, die durch Solidarität, Inklusion und die Schaffung von Chancen Leben verändert, tausende Familien positiv beeinflusst und ein Maßstab für nachhaltige soziale Entwicklung in Kolumbien wird.",

    "mision.title": "Unsere Mission",
    "mision.desc":
      "Für das Wohlbefinden von Familien in verletzlichen Situationen zu arbeiten, soziale Unterstützung, Begleitung und Entwicklungsmöglichkeiten zu bieten, während wir die Inklusion von Menschen mit Behinderungen und die Schaffung würdiger Arbeitsplätze durch nachhaltige Produktionsprojekte fördern.",
    "mision.item1": "Unterstützung für einkommensschwache Familien",
    "mision.item2": "Inklusion von Menschen mit Behinderungen",
    "mision.item3": "Unterstützung bei seltenen Krankheiten",
    "mision.item4": "Schaffung würdiger Arbeitsplätze",

    "programas.title": "Unsere Programme",
    "programas.desc":
      "Durch unsere Initiativen wollen wir eine reale und nachhaltige Wirkung in den verletzlichsten Gemeinden Kolumbiens erzielen.",
    "programas.card1.title": "Familienunterstützung",
    "programas.card1.desc":
      "Wir liefern Lebensmittelhilfe, Schulkits und psychosoziale Unterstützung an Familien in Armut.",
    "programas.card2.title": "Inklusion & Behinderung",
    "programas.card2.desc":
      "Wir fördern die soziale und berufliche Inklusion von Menschen mit Behinderungen durch Ausbildung und Beschäftigungsmöglichkeiten.",
    "programas.card3.title": "Würdige Beschäftigung",
    "programas.card3.desc":
      "Durch die Herstellung und den Vertrieb von Räucherprodukten schaffen wir würdige Arbeitsplätze für gefährdete Gemeinschaften.",
    "programas.card4.title": "Seltene Krankheiten",
    "programas.card4.desc":
      "Wir begleiten Patienten mit seltenen Krankheiten und ihre Familien, bieten emotionale Unterstützung und verwalten Ressourcen.",

    "equipo.title": "Unser Team",
    "equipo.desc":
      "Lernen Sie die leidenschaftlichen Menschen kennen, die unsere Mission jeden Tag möglich machen.",

    "testimonios.title": "Testimonien",
    "testimonios.desc":
      "Hören Sie die Geschichten derer, die von unserer Arbeit betroffen sind.",

    "contacto.title": "Kontaktieren Sie uns",
    "contacto.call": "Rufen Sie uns an",
    "contacto.email": "Schreiben Sie uns",
    "contacto.address": "Adresse",
    "contacto.phone": "+57 xxx xxx xx xx",
    "contacto.mail": "info@fundacionalejandramejia.org",
    "contacto.addr": "Cali, Kolumbien",
    "contacto.form.title": "Schreiben Sie uns",
    "contacto.form.desc":
      "Hinterlassen Sie uns eine Nachricht und wir werden uns so schnell wie möglich bei Ihnen melden.",
    "contacto.form.name": "Name",
    "contacto.form.email": "E-Mail",
    "contacto.form.message": "Nachricht",
    "contacto.form.submit": "Nachricht senden",

    "footer.desc":
      "Wir arbeiten für das Wohl kolumbianischer Familien und fördern Inklusion, Solidarität und würdige Beschäftigung.",
    "footer.nav.title": "Links",
    "footer.contact.title": "Kontakt",
    "footer.copyright": "Alle Rechte vorbehalten.",

    "stats.familias": "Unterstützte Familien",
    "stats.empleos": "Geschaffene Arbeitsplätze",
    "stats.voluntarios": "Aktive Freiwillige",
    "stats.anos": "Jahre im Dienst",
  },
};
