import './App.css';
// website pages:
import Menu_page from './pages/menu_page/Menu_page';
import About from "./pages/about_me_page/About";
import { SpeedInsights } from '@vercel/speed-insights/react';
// scroll to top button:

// functionalites to perform routing: switch through pages:
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// routing: you move from one page to the other.

// the context data Provider component,  for Card rendering:
import { CardContextProvider } from "./context/CardContext";
import { ScreenContextProvider } from "./context/ScreenSizeContext";

function App() {
  return (
    <Router>
      <Routes>

        {/* when the website is accessed, the main page is the Body component.
        url of landing page is: http://localhost:3000/(on local) */}

          {/* in order to go to the menu, url has to switch to: http://localhost:3000/menu_page */}
            <Route path="/" element={
              <ScreenContextProvider>
                <CardContextProvider>
		<SpeedInsights />

                  <Menu_page/>
              </CardContextProvider>
              </ScreenContextProvider>
             }
            />
               <   Route path="/about"  element={<About/>} />
       
      </Routes>
    </Router>
  );
}

export default App;
