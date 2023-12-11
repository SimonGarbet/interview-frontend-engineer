import styles from './profile.module.css';

import { userObject } from '../../../types/Type';

  type profileProps = {
    usersList: userObject[] | undefined;
    userScope: undefined | number;
  }

function Profile({ usersList, userScope }: profileProps) {

  const userInformations = usersList?.find((user) => user.id === userScope)

  return (
    <div className={styles.profile}>
        <h5>{userInformations?.username}</h5>
        <div>
        <h6><span>Nom :</span> {userInformations?.name}</h6>
        <h6><span>Email :</span> {userInformations?.email}</h6>
        <h6><span>Site Web :</span> {userInformations?.website}</h6>
        </div>
    </div>
  );


}

export default Profile;