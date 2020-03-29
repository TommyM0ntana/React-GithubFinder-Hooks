import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  render() {
    const {
      name,
      company,
      email,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      created_at,
      updated_at,
      hireable
    } = this.props.user;
    const { repos } = this.props;

    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          {" "}
          Turn Back
        </Link>
        Hireable: {""}
        {hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle text-danger' />
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              alt=''
              className='round-img'
              style={{ width: "150px" }}
            />
            <h2>{name}</h2>
            <h3>Location: {location}</h3>
          </div>
          <div>
            {bio && <p>{bio}</p>}

            <ul>
              <li>{email && <Fragment>{email}</Fragment>}</li>
              <li>{location && <Fragment>{location}</Fragment>}</li>
              <li>
                {created_at && <Fragment>Created: {created_at}</Fragment>}
              </li>
              <li>
                {updated_at && <Fragment>Updated: {updated_at}</Fragment>}
              </li>
            </ul>

            <a href={html_url} className='btn btn-dark my-1'>
              Go to Github Profile
            </a>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers:{followers}</div>
          <div className='badge badge-success'>Following:{following}</div>
          <div className='badge badge-light'>Public repos:{public_repos}</div>
          <div className='badge badge-dark'>Public Gists:{public_gists}</div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
}

export default User;
