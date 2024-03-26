import React from 'react';

const relatives = ["John", "Alice", "Bob", "Emily", "David"];

const App = () => {
  return (
    <div id="main">
      <ol key="relativeList">
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
      {/* Do not remove the main div */}
    </div>
  );
};

export default App;
