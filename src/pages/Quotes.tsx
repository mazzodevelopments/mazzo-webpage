import Quote from '@/components/Quote';
import MatteozziPic from '../../public/static/matteozzi.jpg';
import MarzoratiPic from '../../public/static/marzorati.jpg';

const quotes = [
  {
    chipText: 'Backend',
    quote:
      'La vida no se mide por las veces que respiras, sino por los momentos que te dejan sin aliento.',
    name: 'Matías Marzorati',
    role: 'Co-Founder',
    image: MarzoratiPic.src
  },
  {
    chipText: 'Frontend',
    quote: 'El éxito es la suma de pequeños esfuerzos repetidos día tras día.',
    name: 'Tomás Matteozzi',
    role: 'Co-Founder',
    image: MatteozziPic.src
  }
];

export default function Quotes() {
  return (
    <section
      id="quotes"
      className="py-10 bg-gradient-to-r from-slate-950 to-emerald-950"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {quotes.map(({ chipText, quote, name, role, image }, index) => (
          <Quote
            key={index}
            chipText={chipText}
            quote={quote}
            name={name}
            role={role}
            image={image}
          />
        ))}
      </div>
    </section>
  );
}
