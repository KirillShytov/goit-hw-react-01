// export const Product = ({ name, imgUrl, price }) => {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <img src={imgUrl} alt={name} width="480" />
//       <p>Price: {price} credits</p>
//     </div>
//   );
// };

// import css from './Profile.module.css';
// const Profile = ({ name, tag, location, image, stats }) => {
//   return (
//     <div className={css.profileContainer}>
//       {' '}
//       <div>
//         <img src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" alt="User avatar" />
//         <p>Petra Marica</p>
//         <p>@pmarica</p> <p>Salvador, Brasil</p>{' '}
//       </div>{' '}
//       <ul>
//         {' '}
//         <li>
//           <span>Followers</span>
//           <span>1000</span>{' '}
//         </li>{' '}
//         <li>
//           <span>Views</span> <span>2000</span>{' '}
//         </li>{' '}
//         <li>
//           <span>Likes</span> <span>3000</span>{' '}
//         </li>{' '}
//       </ul>
//     </div>
//   );
// };

import PropTypes from 'prop-types';
import css from './Profile.module.css';
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profilContainer}>
      <div className={css.profileData}>
        <img className={css.profileImg} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>{tag}</p>
        <p className={css.profileLoc}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileItem}>
          <span className={css.profileItemText}>Followers</span>
          <span className={css.profileItemTextInt}>{stats.followers}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileItemText}>Views</span>
          <span className={css.profileItemTextInt}>{stats.views}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileItemText}>Likes</span>
          <span className={css.profileItemTextInt}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
export default Profile;
