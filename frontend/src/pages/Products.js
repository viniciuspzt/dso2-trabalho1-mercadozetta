import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Index.css';

import api from '../services/api';

import logo from '../assets/logo.svg'

export default function Products({ match, history }) {
    const [products, setProducts] = useState([]);

    async function handleProdutos(e) {
        e.preventDefault();
        history.push(`/register-product`);
    }
    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('/register', {
                headers: {
                    product: match.params.id,
                }
            })
            setProducts(response.data);
        }
        loadProducts();
    }, [match.params.id]);


    return (
        <div className="main-container">
            <div className="login-container">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <ul>
                {products.map(user => (
                    <li>
                        <img src="https://www.gsuplementos.com.br/upload/produto/imagem/creatina-250g-creapure-growth-supplements.jpg" alt="produto" />
                        <footer>
                            <strong>{user.product}</strong>
                            <p>GROWTH SUPPLEMENTS</p>
                        </footer>
                    </li>

                ))}
            </ul>
            <div className="login-container">
                <form onSubmit={handleProdutos}>
                    <button type="submit">Inserir Produtos</button>
                </form>
            </div>
        </div>

    );
}