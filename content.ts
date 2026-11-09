/**
 * Gegevens van Roode Schilderwerk voor deze conceptsite.
 * Alleen feiten die op hun eigen pagina's staan. Geen KvK, btw, openingstijden,
 * recensies, projecten, prijzen of kortingspercentages.
 */
export const content = {
  slug: "roode-demo",

  company: {
    name: "Roode Schilderwerk",
    legalLine: "Roode dienstverlening",
    person: "Jeroen Roode",
    tagline: "Eenmans schildersbedrijf sinds november 2006",
    description:
      "Roode schilderwerk is een betrouwbaar eenmans schilderbedrijf. Jeroen Roode werkt sinds november 2006 voor bedrijven en particulieren in Ruurlo en omgeving.",
    logo: "/img/roode-logo-transparent.png",
    city: "Ruurlo",
  },

  colors: {
    primary: "#4A2340",
    primaryForeground: "#FFFFFF",
    accent: "#C17A12",
    background: "#F3F2EE",
    foreground: "#2F3033",
    muted: "#5A5B5E",
    paper: "#FFFFFF",
    amberInk: "#8A5208",
    lood: "#2F6B3A",
  },

  seo: {
    title: "Schilderwerk in en rond Ruurlo | Roode Schilderwerk",
    description:
      "Jeroen Roode schildert binnen en buiten en zet glas, voor bedrijven en particulieren in Ruurlo en omgeving. Sinds november 2006. Vrijblijvende prijsopgave.",
    lang: "nl",
  },

  about: [
    "Roode schilderwerk is een betrouwbaar eenmans schilderbedrijf.",
    "Na 20 jaar ervaring als schilder te hebben opgedaan is Jeroen zijn eigen bedrijf begonnen.",
    "Sinds november 2006 is Jeroen Roode werkzaam als schilder voor verschillende bedrijven en particulieren in Ruurlo en omgeving.",
  ],

  contact: {
    phoneDisplay: "0573 – 451484",
    phoneHref: "tel:+31573451484",
    mobileDisplay: "06-11 44 52 84",
    mobileHref: "tel:+31611445284",
    email: "roode@schilder-ruurlo.nl",
    mailHref: "mailto:roode@schilder-ruurlo.nl?subject=Vrijblijvende%20prijsopgave",
    street: "Wilhelminalaan 35",
    postalCode: "7261 BP",
    city: "Ruurlo",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=Wilhelminalaan%2035%2C%207261%20BP%20Ruurlo",
  },

  areas: ["Ruurlo", "Lochem", "Groenlo", "Zelhem", "Barchem", "Neede", "Eibergen", "Borculo"],

  schilderNav: [
    { href: "/schilderwerk", label: "Overzicht" },
    { href: "/binnenschilderwerk", label: "Binnenschilderwerk" },
    { href: "/buitenschilderwerk", label: "Buitenschilderwerk" },
    { href: "/uw-huis-schilderen", label: "Uw huis schilderen" },
  ],

  mainNav: [
    { href: "/wanneer-schilderen", label: "Wanneer schilderen" },
    { href: "/glaszetten", label: "Glaszetten" },
    { href: "/over-jeroen", label: "Over Jeroen" },
    { href: "/contact", label: "Contact" },
  ],

  services: [
    {
      href: "/binnenschilderwerk",
      title: "Binnenschilderwerk",
      text: "Muren, plafonds, kozijnen, trappen, vloeren en de badkamer. Meestal acrylverf op waterbasis.",
    },
    {
      href: "/buitenschilderwerk",
      title: "Buitenschilderwerk",
      text: "Kozijnen, deuren, gevelbetimmering, buitenmuren en schutting of erfafscheiding. Ongeveer eens per vijf jaar.",
    },
    {
      href: "/glaszetten",
      title: "Glaszetten",
      text: "Isolatieglas en dubbelglas, enkelglas, glas in lood, en glas in lood in dubbel glas.",
    },
  ],

  facades: [
    {
      id: "N" as const,
      label: "Noord",
      sooner: false,
      text: "Schilderwerk op het noorden heeft minder vaak aandacht nodig.",
    },
    {
      id: "O" as const,
      label: "Oost",
      sooner: false,
      text: "Schilderwerk op het oosten heeft minder vaak aandacht nodig.",
    },
    {
      id: "Z" as const,
      label: "Zuid",
      sooner: true,
      text: "Schilderwerk op het zuiden is eerder aan onderhoud toe, door de invloed van zon en regen.",
    },
    {
      id: "W" as const,
      label: "West",
      sooner: true,
      text: "Schilderwerk op het westen is eerder aan onderhoud toe, door de invloed van zon en regen.",
    },
  ],

  faq: [
    {
      q: "Hoe vaak is schilderwerk aan de beurt?",
      a: "Buitenschilderwerk is ongeveer eens per vijf jaar toe aan een nieuwe laag. Op het zuiden en westen eerder, door zon en regen; op het noorden en oosten minder vaak. Binnenschilderwerk, zoals kozijnen en deuren, is ongeveer eens per zeven jaar aan de beurt. Trappen en andere delen die harder slijten, eerder. Bij lak of beits kan onderhoud vaker nodig zijn.",
    },
    {
      q: "Wat is de beste periode om buiten te schilderen?",
      a: "Tussen april en oktober. De temperatuur ligt dan bij voorkeur tussen 10 en 25 °C en de luchtvochtigheid op maximaal 75%. Jeroen werkt „achter de zon aan”: beginnen waar de zon die dag al geweest is. In de volle zon warmt de verf op en verdampt het oplosmiddel te snel. Is de luchtvochtigheid te hoog, dan kan er condens tussen de verflagen ontstaan.",
    },
    {
      q: "Welke verf wordt binnen en buiten gebruikt?",
      a: "Voor binnenschilderwerk meestal acrylverf: een verf op waterbasis, zonder oplosmiddelen, met nauwelijks geur, die snel droogt. Die is er dekkend, als transparante lak of als beits. Badkamer en kelder vragen om vocht- en schimmelwerende verf. Aan de binnenzijde van kozijnen en deuren in de buitengevel komt dampwerende verf, zodat vocht van binnen niet in het hout trekt. Buiten is een sterke hoogglanslak, ook wel alkydverf genoemd, verstandig.",
    },
    {
      q: "Gelden er kleurafspraken met de gemeente?",
      a: "Voor een straat of een deel van de wijk kunnen kleurafspraken gelden. Woont u in een monumentaal huis, dan kunt u verplicht zijn bepaalde kleuren te gebruiken. Vraag dat vooraf bij de gemeente, dan staat u achteraf niet voor verrassingen.",
    },
    {
      q: "Kan dubbel glas samen met ventilatieroosters?",
      a: "Ja. Dubbel glas kan ook in combinatie met ventilatieroosters. Daarnaast plaatst Roode Schilderwerk isolatieglas en dubbelglas, enkelglas, glas in lood, en glas in lood in dubbel glas.",
    },
  ],
};

export type Content = typeof content;
export type FacadeId = (typeof content.facades)[number]["id"];
