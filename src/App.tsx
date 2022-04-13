import React from 'react';
import { ToastContainer } from 'react-toastify';
import ColorSelect from './components/ColorSelect';

function App() {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={5000} pauseOnHover draggable />
      <ColorSelect />
    </div>
  );
}

export default App;
