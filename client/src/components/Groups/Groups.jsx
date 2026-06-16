import { useEffect, useState } from 'react';
import axios from 'axios';
import './Groups.scss';
import { Link } from 'react-router-dom';


function Groups() {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const fetchGroups = async () => {
        const { data } = await axios.get('/api/groups');
        setGroups(data);
        };

        fetchGroups();
    }, []);
    return (
        <section>
            <h2>Groups:</h2>
            <ul className="group-list">
                {groups.map((group) => (
                <li key={group._id}>
                    <Link to={`/groups/${group.slug}`}>
                        <div className="group" style={{backgroundColor: group.groupColor}}>
                        <h3>{group.groupName}</h3>
                        </div>
                    </Link>
                </li>
                ))}
            </ul>
        </section>
    )
}

export default Groups