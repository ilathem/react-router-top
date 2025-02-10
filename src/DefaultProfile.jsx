import { Link } from "react-router-dom";

const DefaultProfile = () => {
    return (
        <div>
            <p>This is a non-existant profile!</p>
            <p>Here are some propfiles to checkout, though...</p>
            <Link to="/profile/popeye">Popeye&apos;s Profile</Link>
            <br />
            <Link to="/profile/spinach">Spinach&apos;s Profile</Link>
        </div>
    )
}

export default DefaultProfile;
