import React ,{Component}from 'react';

export default class Navbar extends Component {
    render () {
        return (
            <nav className="navbar navbar-dark bg-info mb-3">
                <div className="container" >
                    <a className= "navbar-brand" href="https://github.com/thomasr-02">
                        Github
                    </a>
                </div>
            </nav>

        );
    }
}
