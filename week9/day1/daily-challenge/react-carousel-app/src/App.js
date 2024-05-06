import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
    return (
        <div className="App" style={{ width: '50%', margin: 'auto' }}> 
            <Carousel>
                <div>
                    <img src="/c1cklkyp6ms02tougufx.webp" alt="Hong Kong" />
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src="/e8fnw35p6zgusq218foj.webp" alt="Macao" />
                    <p className="legend">Macao</p>
                </div>
                <div>
                    <img src="/jrfyzvgzvhs1iylduuhj.jpg" alt="Japan" />
                    <p className="legend">Japan</p>
                </div>
                <div>
                    <img src="/liw377az16sxmp9a6ylg.webp" alt="Las Vegas" />
                    <p className="legend">Las Vegas</p>
                </div>
            </Carousel>
        </div>
    );
}

export default App;
