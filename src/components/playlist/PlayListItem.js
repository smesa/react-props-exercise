import React from 'react'
import { PlayListItemAvatar } from './PlayListItemAvatar'

export const PlayListItem = ({ song: { img, name, artist, album, date }, index }) => {
    return (
        <>
            <tr>
                <td style={{ textAlign: 'center' }}>{index + 1}</td>
                <td>
                    <PlayListItemAvatar img={img} name={name} artist={artist} />
                </td>
                <td>{album}</td>
                <td>{date}</td>
            </tr>
        </>
    )
}
