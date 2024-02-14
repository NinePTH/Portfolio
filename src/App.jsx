import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-zinc-200">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <div className="bg-hero-pattern3 bg-cover bg-no-repeat bg-center">
        <Experience />
      </div>
      <div className="bg-hero-pattern2 bg-cover bg-no-repeat bg-center">
        <Tech />
      </div>
      <Works />
      {/* <Feedbacks /> */}
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
