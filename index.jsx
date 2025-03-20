import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <div>
            {/* Navbar */}
            <nav style={{ background: "#333", padding: "10px" }}>
                <ul style={{ display: "flex", listStyle: "none", padding: 0, margin: 0 }}>
                    <li style={{ marginRight: "15px" }}><a href="#" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
                    <li style={{ marginRight: "15px" }}><a href="#" style={{ color: "white", textDecoration: "none" }}>Sobre</a></li>
                    <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Contato</a></li>
                </ul>
            </nav>

            {/* Conteúdo */}
            <main style={{ padding: "20px" }}>
                <h1>Bem-vindo ao meu site!</h1>
                <p>Esta é uma página simples com uma navbar básica para testes.</p>
            </main>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);