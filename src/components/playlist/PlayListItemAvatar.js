import React from 'react'

export const PlayListItemAvatar = ({ img, name, artist }) => {
    return (
        <>
            <img width={64} src={img} alt={name} />
            <div>
                <p>{name}</p>
                <p>{artist}</p>
            </div>
        </>
    )
}
