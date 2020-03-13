import React from 'react';

const profile = ({user})=>(
    <div class="row">
        <div class="col-md-4">
            <div class="card" style={{width:"100rem"}}>
                <img class="card-img-top" src={user.avatar_url}/>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        Repositorios:
                        <span class="Badge badge-success">{user.public_repos}</span>
                    </li>
                    <li class="list-group-item">
                        Seguidores:
                        <span class="Badge badge-primary">{user.followers}</span>
                    </li>
                    <li class="list-group-item">
                        Seguindo:
                        <span class="Badge badge-info">{user.following}</span>
                    </li>
                </ul>
                <div class="card-body">
                    <a href="user.html_url" class="btn btn-success btn-block">Ver perfil</a>
                </div>
            </div>
        </div>
    </div>
)

export default profile;