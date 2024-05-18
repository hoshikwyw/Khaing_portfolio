import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Path from './redux/Paths';
import Loading from './pages/Loading';
import Footer from './components/Footer';

const App = () => {
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    // Start with content not ready
    setContentReady(false);

    // Simulating window loading
    const loadWindow = async () => {
      await new Promise(resolve => {
        // Simulating window loading
        setTimeout(() => {
          resolve();
        }, 2000); // Increase this delay if you want a longer loading time
      });
    };

    // Simulating content loading
    const loadContent = async () => {
      await new Promise(resolve => {
        // Simulating content loading
        setTimeout(() => {
          resolve();
        }, 2000); // Increase this delay if you want a longer loading time
      });
    };

    const loadData = async () => {
      await loadWindow(); // Wait for window loading
      await loadContent(); // Then load content
      setContentReady(true); // Set contentReady to true when everything is loaded
    };

    loadData();
  }, []);

  return (
    <div>
      {!contentReady && <Loading />}

      {contentReady && (
        <div>
          <div className=' shadow-md fixed top-0 w-full z-10'>
            <Navbar />
          </div>
          <div className=' w-full'>
            <Path />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
