import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListPage from './components/ListPage';
import AddPage from './components/AddPage';
import EditPage from './components/EditPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ListPage />} />
                <Route path="/add" element={<AddPage />} />
                <Route path="/edit/:id" element={<EditPage />} />
            </Routes>
        </Router>
    );
}

export default App;

