import { useEffect, useState } from 'react';
import axios from 'axios';
import './Teams.scss';
import { Link } from 'react-router-dom';

function Teams() {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const fetchGroups = async () => {
        const { data } = await axios.get('/api/teams');
        setGroups(data);
        };

        fetchGroups();
    }, []);
    return (
        <section>
            <h2>Teams:</h2>
            <ul className="team-list">
                {groups.map((team) => (
                <li key={team._id}>
                    <Link to={`/teams/${team.slug}`}>
                        <div className="group">
                        <h3>{team.countryName}</h3>
                        </div>
                    </Link>
                </li>
                ))}
            </ul>
        </section>
    )
}

export default Teams