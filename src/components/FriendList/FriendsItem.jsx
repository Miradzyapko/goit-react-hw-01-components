import PropTypes from "prop-types";
export const FriendItem = ({ avatar, name, isOnline }) => {
    return (

        <li class="item">
  <span class="status"></span>
  <img  src={avatar} alt="User avatar" width="48" />
  <p class="name">{name}</p>
</li>
    )
}
FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired, 
    name: PropTypes.string.isRequired,
}