import React from 'react';
import API from '../../api/index';

class Header extends React.Component  {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.props.onTokenChange(value);
  }

  refresh() {
    API.refreshToken().then((res) => {;
      console.log(res)
      this.handleChange(res.data.data.accessToken)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">WeShip Api test</h1>
            <p className="lead text-muted">Implementa las diferences opciones de la API de wix</p>
            <p>
              <button onClick={() => this.refresh()} className="btn btn-primary my-2" >Refresh Token</button>
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default Header;