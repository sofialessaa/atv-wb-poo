// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import AppRoutes from './componentes/roteador';

export default function App(props){
    return (
        <div className="App">
            <AppRoutes />
        </div>
    ); 
}