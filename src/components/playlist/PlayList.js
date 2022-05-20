import { PlayListItem } from './PlayListItem';

export const PlayList = ({ songs }) => {


    return (
        <>
            <section className='content'>
                <table className="playlist-table" cellSpacing="0" cellPadding="0">
                    <thead>
                        <tr>
                            <th style={{ width: '5%', textAlign: 'center' }} >#</th>
                            <th style={{ width: '40%' }}>TITULO</th>
                            <th style={{ width: '30%' }}>ALBUM</th>
                            <th style={{ width: '25%' }}>FECHA DE INCORPORACION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            songs.map((song, index) => {
                                return (
                                    <PlayListItem song={song} index={index} key={song.name} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
        </>
    )
}
