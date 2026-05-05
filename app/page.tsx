import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import About from '@/components/About'
import Directions from '@/components/Directions'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <Menu />
      <About />
      <Directions />
      <Footer />
    </main>
  )
}
