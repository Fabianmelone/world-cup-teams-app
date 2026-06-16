import { useEffect, useState } from 'react';
import axios from 'axios';
import './Teams.scss';
import { Link, useParams } from 'react-router-dom';

function Teams() {
    const { slug } = useParams();
    const [group, setGroup] = useState(null);

    useEffect(() => {
        const fetchGroup = async () => {
        const { data } = await axios.get(`/api/groups/${slug}`);
        setGroup(data);
        };

        fetchGroup();
    }, [slug]);

    if (!group) {
        return <p>Loading...</p>
    }

    return (
        <section>
            <Link to={'/'} className="back-link">Back to all Groups</Link>
            <h2>Teams:</h2>
            <ul className="team-list">
                {group.teams.map((team) => (
                <li key={team._id}>
                    <Link to={`/groups/${group.slug}/teams/${team.slug}`}>
                        <div className="team" style={{ background: `url(${team.countryFlag}) no-repeat center center`, backgroundSize: 'cover' }}>
                        <h3>{team.countryName}</h3>
                        </div>
                    </Link>
                </li>
                ))}
            </ul>
        </section>
    );
}

export default Teams