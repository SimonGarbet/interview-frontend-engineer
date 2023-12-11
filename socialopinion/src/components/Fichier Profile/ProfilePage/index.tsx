import styles from './profilePage.module.css';

import PostList from '../../Fichier Post/PostList';
import Profile from '../Profile';
import BackButton from '../BackButton';

import { postObject, userObject} from '../../../types/Type';

  type profileProps = {
    postsList: postObject[]
    usersList: userObject[] | undefined;
    userVisibility : boolean;
    switchPostsUser : Function;
    userScope: number | undefined;
  }

function ProfilePage({ postsList, usersList, userVisibility, switchPostsUser, userScope}: profileProps) {


  return (

    <section style={{display : userVisibility ? 'block' : 'none'}}>

    <BackButton 
    postsList={postsList}
    switchPostsUser={switchPostsUser}
    />

    <Profile informations={usersList?.find((user) => user.id === userScope)}/>


    <PostList 
            postsList = {postsList}
            usersList = {usersList}
            switchPostsUser = {switchPostsUser}
            userScope = {userScope}
      />

  </section>
    
  );


}

export default ProfilePage;