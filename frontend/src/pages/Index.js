import React from 'react';
import './Index.css';

import Header from './header';

export default function Login({ history }) {
    async function handleLogin(e) {
        e.preventDefault();
        history.push(`/login`);
    }
    async function handleAccount(e) {
        e.preventDefault();
        history.push(`/add-user`);
    }
    async function handleProdutos(e) {
        e.preventDefault();
        history.push(`/user/:_id`);
    }

    return (
        <div>
            <Header />
            <div className="login-container">
                <form onSubmit={handleLogin}>
                    <button type="submit">Login</button>
                </form>
            </div>
            <div className="login-container">
                <form onSubmit={handleAccount}>
                    <button type="submit">Criar conta</button>
                </form>
            </div>
            <div className="login-container">
                <form onSubmit={handleProdutos}>
                    <button type="submit">Produtos</button>
                </form>
            </div>
        </div>
    );
}
