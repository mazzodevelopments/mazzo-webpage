import Item from '@/components/FeaturedItem';

export default function Featured() {
  return (
    <section
      id="featured"
      className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-slate-950 to-emerald-950 gap-20 md:gap-36 px-4 py-16 md:py-24 xl:px-16 2xl:px-40"
    >
      <Item
        chipText="AI"
        title="AI-powered software integration"
        description="Customers appreciate having support with their daily tasks, which is why we incorporate AI solutions into key areas of our software. After all, a satisfied customer makes for a loyal client."
        videoSrc="/static/ai.mp4"
      />
      <Item
        reversed
        chipText="Web Development"
        title="Innovative Web Solutions"
        description="We specialize in creating dynamic and responsive websites tailored to your needs. Our team employs cutting-edge technologies to ensure that your online presence is both functional and visually appealing."
        videoSrc="/static/web.mp4"
      />
    </section>
  );
}
