import React, { useState } from 'react';

const Program = ({ app }) => {
    const [apps] = useState([
        {
            name: 'Bloodgate',
            github: 'Bloodgate',
            link: 'andymcalpin.github.io/Bloodgate/',
            description: 'HTML, CSS, JS'
        },
        {
            name: 'Horiseon',
            github: 'urban-octo-telegram',
            link: 'andymcalpin.github.io/urban-octo-telegram/',
            description: 'HTML, CSS'
        },
    ]); 

    return (
        <div>
            <div className="flex-row">
                {apps.map((image) => (
                    <>
                    <a href= {`https://${image.link}/`}>
                    <img
                    src={require(`../assets/images/${image.name}.jpg`)}
                    alt={image.name}
                    className="img-thumbnail mx-1"
                    key={image.name}
                    />
                    </a> 
                    <a href= {`https://github.com/AndyMcAlpin/${image.github}/`}>
                    <p>{image.description}</p>
                    </a>
                    </>               
                ))}
            </div>
        </div>
    )
}

export default Program;