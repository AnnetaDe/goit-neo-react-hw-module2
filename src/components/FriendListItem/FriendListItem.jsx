import s from './FriendListItem.module.css';
const FriendListItem = ({ friend }) => {
  return (
    <div className={s.friend}>
      <img src={friend.avatar} alt="Avatar" width="48" />
      <p>{friend.name}</p>

      {friend.isOnline ? (
        <p className={s.online}>Online</p>
      ) : (
        <p className={s.offline}>Offline</p>
      )}
    </div>
  );
};
export default FriendListItem;
