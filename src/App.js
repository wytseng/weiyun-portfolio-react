import { ThemeProvider  } from 'react-bootstrap';
import NavHeader from './components/NavHeader';
import About from './components/Aboutme';
import Portfolio from './components/Porfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const pages = [
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" }
  ]  

  const [ currentPage, setCurrentPage ] = useState(pages[0]);

  const renderPage = () => {
    switch (currentPage.name) {
      case "About Me":
        return <About />
      case "Portfolio":
        return <Portfolio />
      case "Contact": 
        return <Contact />
      case 'Resume':
        return <Resume />
      default:
        return <About /> 
    }
  }

  return (
    <ThemeProvider
      breakpoints={['xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
    > 
      <div>
        <NavHeader 
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <main>
          {renderPage()}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
