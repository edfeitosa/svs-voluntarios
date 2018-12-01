import React from 'react';
import { NavLink } from 'react-router-dom';

import search from '../../images/icons/search.png';
import addUser from '../../images/icons/new-user.png';
import addList from '../../images/icons/add-user-group.png';
import exit from '../../images/icons/exit.png';

import ModalUser from './../../components/_general/modalUser';

import '../../styles/components/indexPage/buttons.scss';

class Buttons extends React.Component {

    state = {
        showModal: false
    }

    buttons = [
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
            link: ''
        },
        {
            title: 'Sair',
            img: exit,
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
                                item.title === "Cadastrar" &&
                                <div className={this.classDiv(i)} onClick={this.showModal}>
                                    <div className="icon">
                                        <img src={item.img} alt={item.title} title={item.title} />
                                    </div>
                                    {item.title}
                                </div>
                            }
                            {
                                item.title !== "Cadastrar" &&
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