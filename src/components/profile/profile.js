import React from "react";
import axios from "axios";

class profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }
  getUser = async (e) => {
    const user = e.target.value;
    console.log(user);
    await axios
      .get(`https://api.github.com/users/${user}`)
      .then((res) => {
        console.log(res.data);
        const usuario = res.data;
        this.setState({ user: [usuario] });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <div className="container" id="app">
          <div className="card card-body">
            <h1>Search users from github</h1>
            <p className="lead">insert username</p>
            <input
              onChange={this.getUser}
              id="search"
              type="text"
              className="form-control"
              required
            />
          </div>
        </div>
        {this.state.user.map((user) => (
          <div key={user.id} className="container border" id="ListUser">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <img className="card-img-top" src={user.avatar_url} alt="image_user" />
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Repositorios:
                      <span className="Badge badge-success">
                        {user.public_repos}
                      </span>
                    </li>
                    <li className="list-group-item">
                      Seguidores:
                      <span className="Badge badge-primary">
                        {user.followers}
                      </span>
                    </li>
                    <li className="list-group-item">
                      Seguindo:
                      <span className="Badge badge-info">{user.following}</span>
                    </li>
                  </ul>
                  <div className="card-body">
                    <a
                      href={user.html_url}
                      className="btn btn-success btn-block"
                    >
                      Ver perfil
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}
export default profile;
