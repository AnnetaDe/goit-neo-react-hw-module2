import s from './Profile.module.css';

export const Profile = ({ users }) => {
  const { username, tag, location, avatar, stats } = users;
  return (
    <div className={s.wrapper}>
      <div className={s.picture_container}>
        <img className={s.picture} src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={s.stats}>
        <li>
          <span>Followers</span> <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span> <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span> <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
