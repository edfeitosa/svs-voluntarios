import React from 'react';
import { NavLink } from 'react-router-dom';

// import search from '../../images/icons/search.png';
import user from '../../images/icons/user.png';
import plaining from '../../images/icons/plaining.png';
import training from '../../images/icons/training.png';
import church from '../../images/icons/church.png';
// import gc from '../../images/icons/user-group.png';
import departaments from '../../images/icons/departaments.png';
// import edit from '../../images/icons/edit.png';
// import reports from '../../images/icons/reports.png';
import exit from '../../images/icons/exit.png';

import '../../styles/components/indexPage/buttons.scss';

const buttons = [
    /*{
        title: 'Buscar informações',
        img: search,
        link: '/user?page=searchuser'
    },*/
    {
        title: 'Departamentos',
        img: departaments,
        link: '/departaments'
    },
    /*{
        title: 'Editar meus dados',
        img: edit,
        link: '/'
    },*/
    {
        title: 'Escalas de serviço',
        img: plaining,
        link: '/'
    },
    /*{
        title: 'GC\'s (Células)',
        img: gc,
        link: '/'
    },*/
    {
        title: 'Igreja e congregações',
        img: church,
        link: '/churches'
    },
    /*{
        title: 'Relatórios',
        img: reports,
        link: '/'
    },*/
    {
        title: 'Usuários',
        img: user,
        link: '/user'
    },
    {
        title: 'Treinamentos',
        img: training,
        link: '/'
    },
    {
        title: 'Sair do sistema',
        img: exit,
        link: '/'
    }
]

const Buttons = () => {
    return (
        <div className="content-buttom">
            <div className="sub-title">
                Toque em um dos itens para iniciar
                </div>
            {
                buttons.map((item, i) =>
                    <div key={i} className="buttom">
                        <NavLink to={item.link}>
                            <div className="icon-buttom">
                                <img src={item.img} alt={item.title} title={item.title} />
                            </div>
                            <div className="title-buttom">
                                {item.title}
                                <span className="arrow">></span>
                            </div>
                        </NavLink>
                    </div>
                )
            }
        </div>
    )
}

export default Buttons;