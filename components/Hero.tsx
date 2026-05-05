import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/Hero section.jpg"
        alt="Krigo Restaurant Hero"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 text-balance">
          Krigo Fine Dining
        </h1>
        <p className="text-xl md:text-2xl text-gold mb-8 text-pretty">
          Experience Culinary Excellence
        </p>
        <button className="bg-gold text-black px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition">
          Reserve a Table
        </button>
      </div>
    </section>
  )
}
