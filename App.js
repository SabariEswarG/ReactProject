import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Login';
import './App.css';
import Header from './components/header';

function App() {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<Home />} />
                <Route path="/header" element={<Header />} />

            </Routes>
        </Router>
    );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <Webpage />
//     </React.StrictMode>
// );

export default App;