import React from 'react';

import Modal from '../_general/modal';
import churchesClient from '../../client/churchesClient';

import '../../styles/_general/forms.scss';

class CreateChruch extends React.Component {

    state = {
        name: '',
        address: '',
        city: '',
        state: 'MG',
        showModal: false,
        disabledButtom: true,
        data: {}
    }

    states = [
        {
            name: 'Espírito Santo',
            option: 'ES'
        },
        {
            name: 'Minas Gerais',
            option: 'MG'
        },
        {
            name: 'Rio de Janeiro',
            option: 'RJ'
        },
        {
            name: 'São Paulo',
            option: 'SP'
        }
    ]

    disabledButtom = () => {
        if (
            this.state.name !== '' &&
            this.state.address !== '' &&
            this.state.city !== ''
        ) {
            this.setState({ disabledButtom: false });
        } else {
            this.setState({ disabledButtom: true });
        }
    }

    classButtom = () => {
        if (this.state.disabledButtom) {
            return 'buttom -submit -disabled';
        } else {
            return 'buttom -submit';
        }
    }

    handleName = event => {
        this.setState({ name: event.target.value });
        this.disabledButtom();
    }

    handleAddress = event => {
        this.setState({ address: event.target.value });
        this.disabledButtom();
    }

    handleCity = event => {
        this.setState({ city: event.target.value });
        this.disabledButtom();
    }

    handleState = event => {
        this.setState({ state: event.target.value });
        this.disabledButtom();
    }

    clearState = () => {
        this.setState({
            name: '',
            address: '',
            city: '',
            state: 'MG'
        });
    }

    clearInput = () => {
        this.inputName.value = '';
        this.inputAddress.value = '';
        this.inputCity.value = '';
    }

    onSubmit = () => {
        churchesClient.create(
            this.state.name,
            this.state.address,
            this.state.city,
            this.state.state
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
            showModal, type, data, disabledButtom
        } = this.state;

        return (
            <div className="form">
                
                {
                    showModal &&
                    <Modal
                        showModal={showModal}
                        type={type}
                        data={data}
                        alterModalState={this.showModal}
                    />
                }

                <h3>NOVA IGREJA</h3>
                <label>
                    <div className="titleinput">Nome</div>
                    <input
                        className="inputtext"
                        type="text"
                        name="name"
                        placeholder="Nome da igreja"
                        ref={el => this.inputName = el}
                        onKeyUp={this.handleName}
                    />
                </label>
                <label>
                    <div className="titleinput">Endereço</div>
                    <input
                        className="inputtext"
                        type="text"
                        name="address"
                        placeholder="Informe o endereço"
                        ref={el => this.inputAddress = el}
                        onKeyUp={this.handleAddress}
                    />
                </label>
                <label>
                    <div className="titleinput">Cidade</div>
                    <input
                        className="inputtext"
                        type="text"
                        name="city"
                        placeholder="Informe a cidade"
                        ref={el => this.inputCity = el}
                        onKeyUp={this.handleCity}
                    />
                </label>
                <label>
                    <div className="titleinput">Estado</div>
                    <select
                        className="inputtext"
                        name="state"
                        onChange={this.handleState}
                    >
                        {
                            this.states.map((item, key) => (
                                <option key={ key } value={ item.option }>{ item.name }</option>
                            ))
                        }
                    </select>
                </label>
                <input
                    type="submit"
                    className={this.classButtom()}
                    name="save"
                    value="SALVAR"
                    disabled={disabledButtom}
                    onClick={this.onSubmit}
                />
                <input
                    type="submit"
                    className="buttom -clear"
                    name="clear"
                    value="LIMPAR FORMULÁRIO"
                    onClick={this.onClear}
                />
            </div>
        )
    }
}

export default CreateChruch;