import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground text-balance">
          About Krigo
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-pretty">
              Krigo Fine Dining is a premier family restaurant dedicated to delivering an exceptional culinary experience. With our passion for excellence and commitment to quality, we bring together traditional flavors with modern techniques.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-pretty">
              Our expert chefs craft each dish with precision and care, using only the finest ingredients. We&apos;re not just serving food; we&apos;re creating memories that last a lifetime.
            </p>
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-primary text-2xl font-bold">100+</p>
                <p className="text-muted-foreground">Premium Dishes</p>
              </div>
              <div>
                <p className="text-primary text-2xl font-bold">5★</p>
                <p className="text-muted-foreground">Excellence</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/rd8b-interior-Krigo-fine-dining-family-restaurant-2024-04.jpg"
                alt="Krigo Interior"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/we-are-the-best.jpg"
                alt="Premium Dining"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden md:col-span-2 shadow-lg">
              <Image
                src="/we-are-famous.jpg"
                alt="Restaurant Interior"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary/40 backdrop-blur p-8 rounded-lg text-center hover:shadow-xl transition border border-primary/20">
            <Image
              src="/Entry.jpg"
              alt="Excellence"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-lg mb-4"
              unoptimized
            />
            <h3 className="text-primary text-xl font-bold">Excellence</h3>
            <p className="text-muted-foreground mt-2">Committed to serving the finest dining experience</p>
          </div>
          
          <div className="bg-secondary/40 backdrop-blur p-8 rounded-lg text-center hover:shadow-xl transition border border-primary/20">
            <Image
              src="/we-are-famous.jpg"
              alt="Renowned"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-lg mb-4"
              unoptimized
            />
            <h3 className="text-primary text-xl font-bold">Renowned</h3>
            <p className="text-muted-foreground mt-2">A beloved destination for food enthusiasts</p>
          </div>
          
          <div className="bg-secondary/40 backdrop-blur p-8 rounded-lg text-center hover:shadow-xl transition border border-primary/20">
            <Image
              src="/we-are-the-best.jpg"
              alt="Elegant"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-lg mb-4"
              unoptimized
            />
            <h3 className="text-primary text-xl font-bold">Elegant</h3>
            <p className="text-muted-foreground mt-2">Experience sophistication in every detail</p>
          </div>
        </div>
      </div>
    </section>
  )
}
