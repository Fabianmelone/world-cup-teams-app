import { useEffect, useState } from 'react';
import axios from 'axios';
import './Groups.scss';

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
                    <div className="group" style={{backgroundColor: group.groupColor}}>
                    <h3>{group.groupName}</h3>
                    </div>
                </li>
                ))}
            </ul>
        </section>
    )
}

export default Groups