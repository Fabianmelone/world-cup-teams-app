import { useEffect, useState } from 'react';
import axios from 'axios';
import './Players.scss';
import { Link, useParams } from 'react-router-dom';

function Players() {
    const { groupSlug, teamSlug } = useParams();
    const [team, setTeam] = useState(null);

    useEffect(() => {
        const fetchGroup = async () => {
        const { data } = await axios.get(`/api/groups/${groupSlug}`);
        const selectedTeam = data.teams.find((team) => team.slug === teamSlug);
        setTeam(selectedTeam);
        };

        fetchGroup();
    }, [groupSlug, teamSlug]);

    if (!team) {
        return <p>Loading...</p>
    }

    return (
        <section>
            <Link to={`/groups/${groupSlug}`} className="back-link">Back to {groupSlug.toUpperCase()}</Link>
            <h2>{team.countryName}'s World Cup Team:</h2>
            <ul className="team-list">
                {team.players.map((player) => (
                <li key={player._id}>
                    <div className="player-card">
                    <h3>{player.playerName}</h3>
                    <p className="player-position">{player.playerNumber}</p>
                    </div>
                </li>
                ))}
            </ul>
        </section>
    );
}

export default Players