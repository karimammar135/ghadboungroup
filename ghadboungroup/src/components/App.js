import React from "react";
import { createRoot } from 'react-dom/client';

export default function App(){
    return (
        <h1>Testing ghadboungroup architect site</h1>
    )
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);