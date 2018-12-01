import React from 'react';
import { NavLink } from 'react-router-dom';

import search from '../../images/icons/search.png';
import addUser from '../../images/icons/new-user.png';
import addList from '../../images/icons/add-user-group.png';
import exit from '../../images/icons/exit.png';

import '../../styles/components/indexPage/buttons.scss';

const buttons = [
    {
        title: 'Adicionar lista',
        img: addList,
        titleLink: '',
        link: '/user?page=addlistuser'
    },
    {
        title: 'Buscar',
        img: search,
        link: '/user?page=searchuser'
    },
    {
        title: 'Cadastrar',
        img: addUser,
        titleLink: '',
        link: '/user?page=createuser&level=voluntario'
    },
    {
        title: 'Sair',
        img: exit,
        titleLink: '',
        link: '/'
    }
]

const classDiv = (position) => {
    if (position % 2) {
        return 'button-right';
    }
    return 'button-left';
}

const Buttons = () => {
    return (
        <div className="content-buttom">
            <div className="title">
                EDUARDO FEITOSA
            </div>
            <div className="sub-title">
                O QUE DESEJA FAZER?
            </div>
            {
                buttons.map((item, i) =>
                    <NavLink key={i} to={item.link}>
                        <div className={classDiv(i)}>
                            <div className="icon">
                                <img src={item.img} alt={item.title} title={item.title} />
                            </div>
                            {item.title}
                        </div>
                    </NavLink>
                )
            }
        </div>
    )
}

export default Buttons;