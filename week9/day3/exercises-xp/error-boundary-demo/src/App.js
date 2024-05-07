import React from 'react';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';
import Color from './Color';
import './App.css';

function App() {
  return (
    <div>
      <div>
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
      </div>
<hr></hr>
      <div>
        <h1>Color Component Demonstration</h1>
        <Color />
      </div>
    </div>
  );
}

export default App;





