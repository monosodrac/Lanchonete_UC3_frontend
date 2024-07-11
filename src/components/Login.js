import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import '../Dashboard/Cliente';

export default function Login() {
    const navegacao = useNavigate();

    const [usuario, setUsuario] = useState();
    const [senha, setSenha] = useState();

    function logarUsuarios(e) {
        e.preventDefault();

        if (!usuario || !senha) {
            alert('Campos em Branco');
            return;
        }

        if (usuario === 'lu@gm' && senha === '123456') {
            toast.success('Login Efetuado com Sucesso');
            navegacao('/');
        } else {
            alert('Usuario/Senha incorretos');
            return;
        };
    };

    // function atualizaTabela() {
    //     const USIncor = document.querySelector('#login__incor');
    //     USIncor.innerHTML = 'Usuario/Senha incorretos';
    //     return;
    // }

    return (
        <div className="login">
            <div class="hsection">
                <h2>Login</h2>
            </div>
            <div class="container">
                <form onSubmit={logarUsuarios}>
                    <input type="email" placeholder="E-mail" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                    <input type="password" placeholder="Password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    <a href='/'>Esqueci minha senha</a>
                    {/* <p id="login_incor"></p> */}
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
};