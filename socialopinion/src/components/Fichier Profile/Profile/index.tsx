import styles from './profile.module.css';

import InfoUser from '../InfoUser'

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
          <InfoUser 
          titleInformation='Nom'
          userInformation= {userInformations?.name}
          />

        <InfoUser 
          titleInformation='Email'
          userInformation= {userInformations?.email}
          />

        <InfoUser 
          titleInformation='Site Web'
          userInformation= {userInformations?.website}
          />
          
        </div>
    </div>
  );


}

export default Profile;