import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();

  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch(`https://skids-health-server-samimhossainsujon.vercel.app/users/${id}`)
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        console.log(data);
      });
  }, [id]);

  if (users === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card w-96 bg-base-300 shadow-xl">
        <div className="card-body">
          <h2>{users.name}</h2>
          <p>{users.email}</p>
          <p>{users.phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
