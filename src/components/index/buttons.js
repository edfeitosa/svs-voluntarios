import React from 'react';
import { NavLink } from 'react-router-dom';

import search from '../../images/icons/search.png';
import user from '../../images/icons/user.png';
import plaining from '../../images/icons/plaining.png';
import training from '../../images/icons/training.png';
import church from '../../images/icons/church.png';
import gc from '../../images/icons/user-group.png';
import departaments from '../../images/icons/departaments.png';
import edit from '../../images/icons/edit.png';
import reports from '../../images/icons/reports.png';
import exit from '../../images/icons/exit.png';

import ModalUser from './../../components/_general/modalUser';

import '../../styles/components/indexPage/buttons.scss';

class Buttons extends React.Component {

    state = {
        showModal: false
    }

    buttons = [
        {
            title: 'Buscar informações',
            img: search,
            link: '/user?page=searchuser'
        },
        {
            title: 'Departamentos',
            img: departaments,
            link: '/'
        },
        {
            title: 'Editar meus dados',
            img: edit,
            link: '/'
        },
        {
            title: 'Escalas de serviço',
            img: plaining,
            link: '/'
        },
        {
            title: 'GC\'s (Células)',
            img: gc,
            link: '/'
        },
        {
            title: 'Igreja e congregações',
            img: church,
            link: '/'
        },
        {
            title: 'Relatórios',
            img: reports,
            link: '/'
        },
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

    showModal = (show) => this.setState({ showModal: show });

    render() {

        const { showModal } = this.state;

        return (
            <div className="content-buttom">
                {
                    showModal &&
                    <ModalUser
                        showModal={showModal}
                        alterModalState={this.showModal}
                    />
                }
                <div className="sub-title">
                    Toque em um dos itens para iniciar
                </div>
                {
                    this.buttons.map((item, i) =>
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
}

export default Buttons;