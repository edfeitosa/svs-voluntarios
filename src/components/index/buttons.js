import React from 'react';
import { NavLink } from 'react-router-dom';

import search from '../../images/icons/search.png';
import addUser from '../../images/icons/new-user.png';
import plaining from '../../images/icons/plaining.png';
import training from '../../images/icons/training.png';
import church from '../../images/icons/church.png';
import departaments from '../../images/icons/departaments.png';

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
            title: 'Cadastrar igreja',
            img: church,
            titleLink: '',
            link: '/'
        },
        {
            title: 'Cadastrar departamentos',
            img: departaments,
            titleLink: '',
            link: '/'
        },
        {
            title: 'Cadastrar usuário',
            img: addUser,
            titleLink: '',
            link: ''
        },
        {
            title: 'Calendário',
            img: plaining,
            titleLink: '',
            link: '/'
        },
        {
            title: 'Treinamentos',
            img: training,
            titleLink: '',
            link: '/'
        }
    ]

    classDiv = (position) => {
        if (position % 2) {
            return 'button-right';
        }
        return 'button-left';
    }

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
                <div className="title">
                    EDUARDO FEITOSA
                </div>
                <div className="sub-title">
                    O QUE DESEJA FAZER?
                </div>
                {
                    this.buttons.map((item, i) =>
                        <div key={i}>
                            {
                                item.title === "Cadastrar usuário" &&
                                <div className={this.classDiv(i)} onClick={this.showModal}>
                                    <div className="icon">
                                        <img src={item.img} alt={item.title} title={item.title} />
                                    </div>
                                    {item.title}
                                </div>
                            }
                            {
                                item.title !== "Cadastrar usuário" &&
                                <NavLink to={item.link} className={this.classDiv(i)}>
                                    <div className="icon">
                                        <img src={item.img} alt={item.title} title={item.title} />
                                    </div>
                                    {item.title}
                                </NavLink>
                            }
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Buttons;