import { NextApiRequest, NextApiResponse } from 'next';

// Lista de palabras clave para búsqueda
const keywords = {
  greetings: ['hi', 'hello', 'hola', 'hey'],
  web: ['web', 'site', 'page', 'website', 'develop', 'create', 'build'],
  app: ['app', 'mobile', 'application'],
  ai: ['ai', 'artificial intelligence', 'machine learning', 'automation'],
  cloud: ['cloud', 'nube', 'cloud computing'],
  services: [
    'services',
    'service',
    'what do you offer',
    'what services',
    'our services'
  ],
  popular: [
    'most popular',
    'popular service',
    'best service',
    'favorite service'
  ],
  support: ['support', 'contact'],
  project: [
    'project',
    'how to start',
    'want to develop',
    'develop a project',
    'i want to build a website',
    'i want to develop my web',
    'how'
  ]
};

// Función para buscar coincidencias exactas en el mensaje
function matchKeyword(message: string, category: string[]): boolean {
  return category.some((keyword) => message.includes(keyword));
}

// Diccionario de respuestas posibles
const responses: { [key: string]: string[] } = {
  greetings: [
    'Hello! How can I help you today?',
    'Hi there! What can I do for you?',
    'Hey! How can I assist you?'
  ],
  web: [
    'Web Development: We create responsive, high-performance websites that are tailored specifically to meet your business needs.',
    'Looking to build a website? We specialize in developing websites that are not only fast but also scalable and secure.',
    'Our Web Development services are designed to give your business a strong online presence with a website that stands out.'
  ],
  app: [
    'Mobile App Development: Our team designs and develops mobile apps that provide a seamless user experience, helping you engage with your audience effectively.',
    "We create mobile applications that are intuitive, fast, and tailored to your users' needs.",
    "If you're thinking about a mobile app, we can help you design and develop an app that your users will love."
  ],
  ai: [
    'AI Implementation: We can transform your business with customized artificial intelligence solutions that optimize processes and enhance your decision-making capabilities.',
    'Our AI services can help you automate tasks, gain insights, and improve decision-making processes.',
    'Leverage the power of AI with our tailored solutions, designed to meet your specific business challenges.'
  ],
  cloud: [
    'Cloud Solutions: We implement scalable cloud solutions that can significantly enhance your business operations and efficiency.',
    'Our Cloud Solutions ensure that your business can grow and adapt to new challenges with a robust and flexible infrastructure.',
    'Looking to move to the cloud? We offer solutions that are secure, scalable, and customized for your business.'
  ],
  popular: [
    'Our most popular services are Web Development and AI Implementation. These services are highly valued because they help businesses create high-performance websites and implement customized AI solutions.',
    'Clients love our Web Development and AI Implementation services because they deliver strong results and help drive growth.',
    'Web Development and AI Integration are our top services, providing the tools and infrastructure businesses need to succeed.'
  ],
  services: [
    'We offer a variety of services including Web Development, Mobile App Development, AI Implementation, and Cloud Solutions. Which one are you interested in?',
    'Our services range from building websites and apps to implementing AI and cloud solutions. Let us know how we can help!',
    'We provide Web Development, Mobile App Development, AI Implementation, and Cloud Solutions. Need details on any of these?'
  ],
  support: [
    'It seems like you need support. You can reach out to us using the button below, and we’ll be happy to assist you!',
    "For support inquiries, please click the contact button below, and we'll get back to you shortly.",
    "If you need help, we're here for you! Just hit the contact button below."
  ],
  project: [
    'It sounds like you want to start a project or develop a website! Please click the contact button below and send us a message with details about your project. We’ll get in touch to help bring your idea to life.',
    'Interested in developing a website or a project? Let us know what you have in mind by clicking the contact button below, and we’ll help you get started.',
    'If you’re looking to develop a website or work on a project, just send us a message through the contact button, and we’ll assist you in making it a reality.'
  ],
  default: [
    'I’m not sure I understood that. Could you please explain it again or provide more details?',
    "I didn't quite catch that. Can you clarify or give me more information?",
    "Sorry, I didn't get that. Could you please explain it in a different way?"
  ]
};

// Función para seleccionar una respuesta aleatoria
function getRandomResponse(category: string): string {
  const responseArray = responses[category] || responses['default'];
  const randomIndex = Math.floor(Math.random() * responseArray.length);
  return responseArray[randomIndex];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { message } = req.body;
    const lowercasedMessage = message.toLowerCase();

    // Verificar saludos
    if (matchKeyword(lowercasedMessage, keywords.greetings)) {
      res.status(200).json({ response: getRandomResponse('greetings') });
      return;
    }

    // Verificar servicio más popular
    if (matchKeyword(lowercasedMessage, keywords.popular)) {
      res.status(200).json({ response: getRandomResponse('popular') });
      return;
    }

    // Verificar servicios generales
    if (matchKeyword(lowercasedMessage, keywords.services)) {
      res.status(200).json({ response: getRandomResponse('services') });
      return;
    }

    // Verificar servicios web
    if (matchKeyword(lowercasedMessage, keywords.web)) {
      res.status(200).json({ response: getRandomResponse('web') });
      return;
    }

    // Verificar servicios de aplicaciones
    if (matchKeyword(lowercasedMessage, keywords.app)) {
      res.status(200).json({ response: getRandomResponse('app') });
      return;
    }

    // Verificar servicios de IA
    if (matchKeyword(lowercasedMessage, keywords.ai)) {
      res.status(200).json({ response: getRandomResponse('ai') });
      return;
    }

    // Verificar servicios en la nube
    if (matchKeyword(lowercasedMessage, keywords.cloud)) {
      res.status(200).json({ response: getRandomResponse('cloud') });
      return;
    }

    // Verificar soporte
    if (matchKeyword(lowercasedMessage, keywords.support)) {
      res.status(200).json({
        response: getRandomResponse('support'),
        contactButton: {
          text: 'Contact',
          url: 'contact'
        }
      });
      return;
    }

    // Verificar consulta sobre proyectos
    if (matchKeyword(lowercasedMessage, keywords.project)) {
      res.status(200).json({
        response: getRandomResponse('project'),
        contactButton: {
          text: 'Contact',
          url: 'contact'
        }
      });
      return;
    }

    // Respuesta predeterminada si no hay coincidencia
    res.status(200).json({
      response: getRandomResponse('default')
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
