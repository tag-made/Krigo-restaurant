import Image from 'next/image'

export default function Menu() {
  const specialties = [
    {
      name: 'Signature Delicacy',
      description: 'Our most acclaimed dish, perfected over years of culinary mastery. A harmonious blend of spices and premium ingredients.'
    },
    {
      name: 'Premium Selection',
      description: 'Handpicked offerings from our executive chefs. Each dish represents the pinnacle of fine dining craftsmanship.'
    },
    {
      name: 'Chef\'s Special',
      description: 'Seasonal creations by our head chef. Limited availability dishes that showcase innovation and tradition.'
    }
  ]

  return (
    <section id="menu" className="py-20 px-4 md:px-8 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-white text-balance">
          Our Menu
        </h2>
        <p className="text-center text-gold text-lg mb-16 text-pretty">
          Curated dishes prepared with the finest ingredients
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {specialties.map((specialty, index) => (
            <div 
              key={index}
              className="bg-background/80 rounded-lg p-8 hover:shadow-xl transition-all duration-300 border border-gold/20"
            >
              <h3 className="text-2xl font-bold text-gold mb-3">{specialty.name}</h3>
              <p className="text-gray-300 leading-relaxed">{specialty.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-background to-muted rounded-lg overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
            <div className="relative h-80 md:h-96 order-2 md:order-1">
              <Image
                src="/Item #1.jpg"
                alt="Featured Dish"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-12 order-1 md:order-2">
              <p className="text-gold text-sm font-semibold mb-2">FEATURED DISH</p>
              <h3 className="text-4xl font-bold text-white mb-4 text-balance">
                Culinary Excellence
              </h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed text-pretty">
                Discover our most celebrated creations, crafted with passion and precision. Every dish tells a story of tradition, innovation, and dedication to culinary perfection.
              </p>
              <button className="bg-gold text-black px-6 py-3 rounded font-semibold hover:bg-opacity-90 transition">
                Explore Full Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
