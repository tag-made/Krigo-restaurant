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
    <section id="menu" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-foreground text-balance">
          Our Menu
        </h2>
        <p className="text-center text-primary text-lg mb-16 text-pretty">
          Curated dishes prepared with the finest ingredients
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {specialties.map((specialty, index) => (
            <div 
              key={index}
              className="group bg-secondary/40 backdrop-blur rounded-lg p-8 hover:bg-secondary/60 transition-all duration-300 border border-primary/20 hover:border-primary/50"
            >
              <h3 className="text-2xl font-bold text-primary mb-3">{specialty.name}</h3>
              <p className="text-muted-foreground leading-relaxed">{specialty.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/Item #1.jpg"
              alt="Signature Delicacy"
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
              unoptimized
            />
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/Item #2.avif"
              alt="Premium Selection"
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
              unoptimized
            />
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/Item #3.avif"
              alt="Chef's Special"
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  )
}
