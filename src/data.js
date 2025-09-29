// Mock dataset - 12 experiencias
export const EXPERIENCES = [
  {
    id: 'jet-coast',
    title: 'Jet Privado sobre la Costa',
    location: 'Saint-Tropez, FR',
    duration: '3h',
    price: 1290,
    category: 'Viajes',
    images: ['/media/jet1.jpg','/media/jet2.jpg'],
    highlight: true,
    description: 'Vive la emoción de volar en un jet privado recorriendo la icónica costa de Saint-Tropez. Disfruta de champagne francés servido en copas de cristal, un catering gourmet diseñado por chefs con estrellas Michelin y un servicio de tripulación dedicado exclusivamente a ti. Una experiencia aérea incomparable que combina vistas infinitas del Mediterráneo con un lujo sin concesiones.'
  },
  {
    id: 'spa-sunset',
    title: 'Spa Privado al Atardecer',
    location: 'Ibiza, ES',
    duration: '2h',
    price: 420,
    category: 'Bienestar',
    images: ['/media/spa1.jpg','/media/spa2.jpg'],
    highlight: true,
    description: 'Sumérgete en un santuario de calma frente al mar mientras el sol se esconde en el horizonte ibicenco. Un spa privado con masajistas expertos a tu disposición, jacuzzi de aromaterapia y amenities de alta gama. Todo ello acompañado de infusiones artesanales y música en vivo de instrumentos suaves. Un ritual diseñado para restaurar cuerpo, mente y espíritu.'
  },
  {
    id: 'rooftop-dinner',
    title: 'Cena Secreta en Rooftop',
    location: 'Madrid, ES',
    duration: '3.5h',
    price: 220,
    category: 'Gastronomía',
    images: ['/media/dinner1.jpg','/media/dinner2.jpg'],
    highlight: true,
    description: 'Un rooftop escondido en el corazón de Madrid se convierte en el escenario de una cena irrepetible. Un chef privado prepara un menú degustación de autor maridado con vinos boutique, mientras las luces de la ciudad brillan a tus pies. El ambiente íntimo, la decoración sofisticada y el servicio discreto completan una velada de ensueño.'
  },
  {
    id: 'yacht-day',
    title: 'Yate de Día con Capitán',
    location: 'Costa Brava, ES',
    duration: '6h',
    price: 2400,
    category: 'Viajes',
    images: ['/media/yacht1.jpg'],
    highlight: false,
    description: 'Navega a bordo de un yate privado acompañado de tu capitán y tripulación. Disfruta de un bar premium, zonas de solárium y la posibilidad de practicar snorkel en calas vírgenes de aguas cristalinas. Todo ello mientras un chef a bordo prepara tapas mediterráneas frescas y vinos selectos. Una jornada en el mar digna de la élite.'
  },
  {
    id: 'heli-adventure',
    title: 'Helicóptero & Picnic',
    location: 'Mallorca, ES',
    duration: '4h',
    price: 1800,
    category: 'Aventura',
    images: ['/media/heli1.jpg'],
    highlight: false,
    description: 'Eleva tu día con un traslado en helicóptero hacia una cala secreta de Mallorca. Al aterrizar, encontrarás un picnic gourmet montado con mantelería de lino, champagne Dom Pérignon y platos diseñados por chefs locales. El Mediterráneo como telón de fondo y la exclusividad absoluta como protagonista.'
  },
  {
    id: 'supercar-drive',
    title: 'Conduce un Superdeportivo',
    location: 'Monaco, MC',
    duration: '2h',
    price: 990,
    category: 'Aventura',
    images: ['/media/car1.jpg'],
    highlight: false,
    description: 'Siente la potencia de un superdeportivo de última generación mientras recorres las curvas del mítico circuito de Mónaco. Recibe una breve formación con pilotos profesionales antes de tomar el volante. Una experiencia llena de adrenalina, lujo automovilístico y glamour monegasco.'
  },
  {
    id: 'museum-private',
    title: 'Visita Privada al Museo',
    location: 'Paris, FR',
    duration: '2h',
    price: 680,
    category: 'Cultura',
    images: ['/media/museum1.jpg'],
    highlight: false,
    description: 'Explora uno de los museos más prestigiosos de París acompañado de un curador experto que abrirá para ti salas normalmente cerradas al público. Con copa de champagne en mano, disfruta de una narrativa personalizada y acceso exclusivo a piezas maestras del arte mundial.'
  },
  {
    id: 'retreat-wellness',
    title: 'Retiro Wellness de Fin de Semana',
    location: 'Tuscany, IT',
    duration: '3 días',
    price: 3200,
    category: 'Bienestar',
    images: ['/media/retreat1.jpg'],
    highlight: false,
    description: 'Un retiro boutique en una villa histórica de la Toscana, rodeada de viñedos y olivares centenarios. Clases de yoga al amanecer, menús de alimentación consciente preparados por chefs especializados en slow food, tratamientos de spa con productos orgánicos y paseos guiados por la naturaleza. Un fin de semana transformador y sofisticado.'
  },
  {
    id: 'private-workshop',
    title: 'Workshop Creativo Privado',
    location: 'Barcelona, ES',
    duration: '4h',
    price: 490,
    category: 'Cultura',
    images: ['/media/workshop1.jpg'],
    highlight: false,
    description: 'Descubre el arte desde dentro en un taller privado con artistas locales de renombre. Aprende técnicas exclusivas, recibe un kit de materiales de lujo y lleva contigo una obra personalizada. Incluye cata de vinos artesanales y un ambiente elegante diseñado para inspirar tu creatividad.'
  },
  {
    id: 'signature-escapade',
    title: 'Signature Escapade',
    location: 'Santorini, GR',
    duration: '1 día',
    price: 1500,
    category: 'Viajes',
    images: ['/media/signature2.jpg'],
    highlight: true,
    description: 'Un itinerario diseñado a medida que incluye traslados privados en vehículos de alta gama, almuerzo preparado por un chef griego en un acantilado con vistas a la caldera, y acceso a experiencias secretas fuera del circuito turístico. Un día en Santorini que redefine el lujo.'
  },
  {
    id: 'private-tasting',
    title: 'Cata Privada de Vinos',
    location: 'La Rioja, ES',
    duration: '3h',
    price: 260,
    category: 'Gastronomía',
    images: ['/media/dinner2.jpg'],
    highlight: false,
    description: 'Adéntrate en una bodega histórica de La Rioja para disfrutar de una cata privada dirigida por un sommelier de prestigio. Degusta vinos de autor maridados con quesos artesanales y embutidos ibéricos. Un viaje sensorial a través de la tradición vinícola española con un toque exclusivo.'
  },
  {
    id: 'city-nightlights',
    title: 'City Night Lights Tour',
    location: 'New York, US',
    duration: '2h',
    price: 350,
    category: 'Viajes',
    images: ['/media/signature1.jpg'],
    highlight: false,
    description: 'Explora Nueva York desde una perspectiva privilegiada en un recorrido nocturno privado. Desde rooftops ocultos hasta calles iluminadas por neones, descubre la ciudad que nunca duerme acompañado de un guía exclusivo. Incluye parada en un lounge secreto con cócteles de autor.'
  }
];
