import React from 'react'

export default function Card({ repo }) {
    const createAt = new Date(repo.created_at);
    return (
        <div className="card page">
            <a className="link darker-grey" href={repo.html_url }> <h3>{repo.full_name.split('/')[1]}</h3></a>
            <p className="text-justify description">{repo.description}</p>
            <time className="text-small" dateTime={repo.created_at}>Created at: {createAt.toDateString()}</time>
            <p className="text-small">language: {repo.language}</p>
        </div>
    )
}
