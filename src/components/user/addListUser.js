import React from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';

class AddListUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            preview: null,
            accepted: [],
            rejected: []
        }
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleDrop([{file}]) {
        this.setState({file})
    }

    handleClickButton = () => {
      const bodyFormData = new FormData();
      bodyFormData.set('name', 'arquivo');
      bodyFormData.append('file', this.state.accepted[0]); 
      axios({
        method: 'POST',
        config: {
          headers: {'Content-Type': 'multipart/form-data'}
        },
        url: 'http://localhost/svs/api/users/create.php',
        data: bodyFormData,
      })
      .then((response) => { console.log(response.data) })
      //.catch((error) => { console.log(error.config) });
    }

    async componentDidMount() {
      const res = await axios.get('http://api.football-data.org/v1/competitions/426/leagueTable');
      console.log(res);
    }

    style = {
        left: {
          width: '45%',
          float: 'left',
          marginBottom: '20px'
        },
        right: {
          width: '45%',
          float: 'right',
          marginBottom: '20px'
        },
        full: {
          width: '100%',
          float: 'left',
          marginBottom: '20px'
        },
        dropzone: {
          float:'left',
          border:'2px dashed #666',
          color: '#666',
          backgroundColor: '#f1f1f1',
          width:'90%',
          height:'150px',
          textAlign: 'center',
          padding: '20px'
        },
        stepTitle: {
          position: 'relative',
          margin: '0px auto',
          borderRadius: '2px',
          padding: '20px',
          width: '300px',
          height: '20px',
          marginBottom: '20px',
          backgroundColor: '#f1f1f1'
        },
        step: {
          position: 'relative',
          margin: '0px auto',
          border: '1px solid #ccc',
          borderRadius: '2px',
          padding: '30px',
          width: '400px'
        },
        button: {
          float: 'left',
          width: '200px',
          left: '50%',
          margin: '30px 0px 20px -100px'
        },
        information: {
          color: '#666',
          fontSize: '12px',
          margin: '10px 0px 0px 0px'
        },
        error: {
          width: '100%',
          float: 'left',
          marginBottom: '20px',
          color: '#f00',
          fontSize: '12px',
          textAlign: 'center'
        }
    }

    render() {
        console.log(this.state.accepted);
        return(
            <div>
              <p>Selecione um arquivo</p>
              <Dropzone
                accept=".txt"
                onDrop={(accepted, rejected) => { this.setState({accepted, rejected}); }}
                style={this.style.dropzone}>
                {
                  ({isDragAccept, isDragReject, acceptedFiles, rejectedFiles}) => {
                    if (acceptedFiles.length || rejectedFiles.length) {
                      return `Accepted ${acceptedFiles.length}, rejected ${rejectedFiles.length} files`;
                    }
                    if (isDragAccept) {
                      return "O arquivo está correto";
                    }
                    if (isDragReject) {
                      return "Este arquivo não é permitido";
                    }
                    return "Arraste e solte o arquivo aqui ou clique para escolher";
                  }
                }
              </Dropzone>
              <p style={this.style.information}>Apenas arquivos .txt são permitidos</p>
              <ul>
                    {
                        this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                    }
              </ul>
              <div className="clear" />
              <button style={{marginTop:'50px'}} onClick={this.handleClickButton}>Teste</button>
              <div className="clear" />
            </div>
        )
    }
}

export default AddListUser;