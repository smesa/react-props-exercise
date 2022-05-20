import React from 'react'
import PropTypes from 'prop-types'

import { PlayListItemAvatar } from './PlayListItemAvatar'

export const PlayListItem = ({ song: { img, name, artist, album, date }, index, time }) => {
    return (
        <>
            <tr>
                <td style={{ textAlign: 'center' }}>{index + 1}</td>
                <td>
                    <PlayListItemAvatar img={img} name={name} artist={artist} />
                </td>
                <td>{album}</td>
                <td>{date}</td>
                <td style={{ textAlign: 'center' }}>{time} min</td>
            </tr>
        </>
    )
}


PlayListItem.propTypes = {
    song: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

PlayListItem.defaultProps = {
    time: '00:00'
}