import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mohan</td>
            <td>Analyst A4</td>
          </tr>
          <tr>
            <td>Nandha Kumar</td>
            <td>Devops Engineer</td>
          </tr>
          <tr>
            <td>Saravana Prasath</td>
            <td>Network Engineer</td>
          </tr>
          <tr>
            <td>Mohan Raman</td>
            <td>Senior Analyst</td>
          </tr>
          <tr>
            <td>Amerthavanan</td>
            <td>Production Engineer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
