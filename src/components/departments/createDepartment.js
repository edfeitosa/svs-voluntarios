import React from 'react';

import Modal from '../_general/modal';
import departmentsClient from '../../client/departmentsClient';

import '../../styles/_general/forms.scss';

class CreateDepartment extends React.Component {

    state = {
        name: '',
        modal: false,
        showModal: false,
        disabledButtom: true,
        data: {}
    }

    disabledButtom = () => {
        if (
            this.state.name !== ''
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

    clearState = () => this.setState({ name: '' });

    clearInput = () => this.inputName.value = '';

    onSubmit = () => {
        departmentsClient.create(
            this.state.name
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

                <h3>NOVO DEPARTAMENTO</h3>
                <label>
                    <div className="titleinput">Nome</div>
                    <input
                        className="inputtext"
                        type="text"
                        name="name"
                        placeholder="Nome do departamento"
                        ref={el => this.inputName = el}
                        onKeyUp={this.handleName}
                    />
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

export default CreateDepartment;