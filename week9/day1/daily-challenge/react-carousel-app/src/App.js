import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS

function App() {
    return (
        <div className="App">
            <Carousel>
                <div>
                    <img src="https://via.placeholder.com/600x400.png?text=Hong+Kong" alt="Hong Kong" />
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src="https://via.placeholder.com/600x400.png?text=Macao" alt="Macao" />
                    <p className="legend">Macao</p>
                </div>
                <div>
                    <img src="https://via.placeholder.com/600x400.png?text=Japan" alt="Japan" />
                    <p className="legend">Japan</p>
                </div>
                <div>
                    <img src="https://via.placeholder.com/600x400.png?text=Las+Vegas" alt="Las Vegas" />
                    <p className="legend">Las Vegas</p>
                </div>
            </Carousel>
        </div>
    );
}

export default App;

