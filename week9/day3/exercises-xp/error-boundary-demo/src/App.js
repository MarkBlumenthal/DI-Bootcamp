import React, { Component } from 'react';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';
import Color from './Color';
import Child from './Child';
import './App.css';

class App extends Component {

  state = { show: true };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <section>
          <h2>Exercise 1 : React Error Boundary Simulation</h2>
          <h4>
            Click on the numbers to increase the counters.<br />
            The counter is programmed to throw an error when it reaches 5. This simulates a JavaScript error in a component.
          </h4>
          <hr />
          <p>
            These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.
          </p>
          <ErrorBoundary>
            <BuggyCounter />
            <BuggyCounter />
          </ErrorBoundary>
          <hr />

          <p>
            These two counters are each inside their own error boundary. So if one crashes, the other is not affected.
          </p>
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
          <hr />

          <p>
            This counter is not inside a boundary. So if it crashes, all other components are deleted.
          </p>
          <BuggyCounter />
        </section>

        <hr />

        
        <section>
          <h2>Exercise 2: Lifecycle</h2>
          <h4>Color Component Demonstration</h4>
          <Color />
        </section>

        <hr />

      
        <section>
          <h2>Exercise 3 : Lifecycle #2</h2>
          {this.state.show ? <Child /> : null}
          <button onClick={this.toggleShow}>Delete Header</button>
        </section>
      </div>
    );
  }
}

export default App;








