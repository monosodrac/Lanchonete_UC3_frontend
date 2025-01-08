import { Link } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import { TbCircleArrowUp } from "react-icons/tb";

import Header from '../../Components/Header/Main/Header';
import Hero from "../../Components/Inicio/Hero";
import Destaques from "../../Components/Inicio/Destaques";
import Contato from "../../Components/Footer/Main/Contato";

import "../../Styles/main.scss";

export default function App() {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <Destaques />
            </main>
            <Link to='/perfil' className='btn__login'><CgProfile /></Link>
            <a href='#head' className='btn__up'><TbCircleArrowUp /></a>
            <Contato />
        </div>
    );
};