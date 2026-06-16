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
            <h2>Players {team.countryName}:</h2>
            <ul className="team-list">
                {team.players.map((player) => (
                <li key={player._id}>
                    <Link to={`/players/${player.slug}`}>
                        <div className="team">
                        <h3>{player.playerName}</h3>
                        </div>
                    </Link>
                </li>
                ))}
            </ul>
        </section>
    );
}

export default Players