import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask'

import usersClient from '../../client/usersClient';
import Modal from '../../components/_general/modal';
import { FooterCreateUser } from '../_layout/footer';

import '../../styles/_general/forms.scss';

class CreateUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            cel: '',
            showModal: false,
            data: {}
        }
    }

    userLevels = {
        voluntario: ['4', 'NOVO VOLUNTÁRIO'],
        lider: ['3', 'NOVO LÍDER'],
        pastor: ['2', 'NOVO PASTOR'],
        central: ['1', 'CENTRAL DE VOLUNTÁRIOS']
    }

    handleName = event => this.setState({ name: event.target.value });
    handleEmail = event => this.setState({ email: event.target.value });
    handleCel = event => this.setState({ cel: event.target.value });

    clearState = () => {
        this.setState({
            name: '',
            email: '',
            cel: '',
        });
    }

    clearInput = () => {
        this.inputName.value = '';
        this.inputEmail.value = '';
    }

    onSubmit = () => {
        usersClient.create(
            this.state.name,
            this.state.cel,
            this.state.email,
            this.userLevels[this.props.level][0]
        )
            .then((response) => {
                this.setState({
                    showModal: !this.state.showModal,
                    data: response
                });
                if (response.type === 'success') {
                    this.clearState();
                    this.clearInput();
                }
            });
    }

    onClear = () => {
        this.clearState();
        this.clearInput();
    }

    showModal = (show) => this.setState({ showModal: show });

    render() {

        const {
            cel, showModal, type, data
        } = this.state;

        const { level } = this.props;

        return (
            <div className="form">

                {
                    showModal &&
                    <Modal
                        type={type}
                        data={data}
                        alterModalState={this.showModal}
                    />
                }

                <h2>{this.userLevels[level][1]}</h2>
                <label>
                    <div className="titleinput">Nome</div>
                    <input
                        className="inputtext"
                        type="text"
                        name="name"
                        placeholder="Nome do voluntário"
                        ref={el => this.inputName = el}
                        onKeyUp={this.handleName}
                    />
                </label>
                <label>
                    <div className="titleinput">E-mail</div>
                    <input
                        className="inputtext"
                        type="text"
                        name="email"
                        placeholder="E-mail do voluntário"
                        ref={el => this.inputEmail = el}
                        onKeyUp={this.handleEmail}
                    />
                </label>
                <label>
                    <div className="titleinput">Celular</div>
                    <MaskedInput
                        mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        className="inputtext"
                        name="cel"
                        placeholder="(31) 99999-9999"
                        value={ cel }
                        onKeyUp={this.handleCel}
                    />
                </label>
                <input
                    type="submit"
                    className="buttom -submit"
                    name="save"
                    value="SALVAR"
                    onClick={this.onSubmit}
                />
                <input
                    type="submit"
                    className="buttom -clear"
                    name="clear"
                    value="LIMPAR FORMULÁRIO"
                    onClick={this.onClear}
                />
                <FooterCreateUser />
            </div>
        )
    }
}

CreateUser.propTypes = {
    level: PropTypes.string.isRequired
}

export default CreateUser;