import "./contact.css";

export default function Contact({user}) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src='/images/profile.png' alt={user._id} />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user?.name} {user?.lastName}</span>
    </li>
  );
}