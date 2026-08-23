import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import AiEngine from './components/AiEngine'
import Economics from './components/Economics'
import Proof from './components/Proof'
import NationalBenefits from './components/NationalBenefits'
import Invitation from './components/Invitation'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="bg-glow"></div>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <AiEngine />
        <Economics />
        <Proof />
        <NationalBenefits />
        <Invitation />
      </main>
      <Footer />
    </>
  )
}
