import Image from 'next/image'

const menuItems = [
  {
    id: 1,
    name: 'Signature Delicacy',
    image: '/Item #1.jpg',
  },
  {
    id: 2,
    name: 'Premium Selection',
    image: '/Item #2.avif',
  },
  {
    id: 3,
    name: 'Chef&apos;s Special',
    image: '/Item #3.avif',
  },
]

export default function Menu() {
  return (
    <section id="menu" className="py-20 px-4 md:px-8 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-white text-balance">
          Our Menu
        </h2>
        <p className="text-center text-gold text-lg mb-16 text-pretty">
          Curated dishes prepared with the finest ingredients
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div 
              key={item.id}
              className="group overflow-hidden rounded-lg bg-background/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                <p className="text-gold mt-2">Premium Selection</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
