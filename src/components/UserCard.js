import {Link} from "react-router-dom"

export default function UserCard({user}) {
  return (
    <article>
        <h2>{user.name}</h2>
        <p>
        <Link to="/profile">View Profile</Link>
        </p>
    </article>
  );
};