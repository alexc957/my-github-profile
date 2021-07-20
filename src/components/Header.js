import React from 'react'

export default function Header({user}) {
    return (
        <header className="app-header">
            <img className="avatar" src={user.avatar_url} alt="alexc957" />
            <h3>{user.name}</h3>
            <a className="link" href={user.html_url}>{`@${user.login}`}</a>
            <p className="about">
                {user.bio}
            </p>
            <div className="row-space-between">
                <span>followers: {user.followers}</span>
                <span>following: {user.following}</span>
            </div>

        </header>
    )
}
