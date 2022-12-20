import PropTypes from "prop-types";
import { FriendItem } from "./FriendsItem";
export const FriendList = ({ friends }) => {
    return  (
        <ul class="friend-list">
            {friends.map(({ id, avatar,name, isOnline }) =>
     
    <FriendItem key={id}
avatar={avatar}
name={name}
isOnline={isOnline} />)}
</ul>
    );
    }
    FriendList.propTypes = {
        friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired, 
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    })),
};