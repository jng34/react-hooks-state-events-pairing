import React from 'react';

function Header({ title, views, date }) {
    return (
      <div>
        <h1>{title}</h1>
        <p>{views} | {date}</p>
      </div>
    )
}

export default Header;

