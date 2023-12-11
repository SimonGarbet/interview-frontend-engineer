import styles from './profilePage.module.css';
import Post from '../Post';
import Profile from '../Profile';

import { postObject, userObject} from '../../types/Type';

  type profileProps = {
    postsList: postObject[]
    usersList: userObject[] | undefined;
    userPosts : postObject[];
    userVisibility : boolean;
    switchPostsUser : Function;
    userScope: number;
  }

function ProfilePage({ postsList, usersList, userPosts, userVisibility, switchPostsUser, userScope}: profileProps) {


  return (

    <section style={{display : userVisibility ? 'block' : 'none'}}>

    <button className={styles.switchButton} onClick={() => switchPostsUser('postsON', 1, postsList)}>Revenir sur les posts</button>

      <Profile informations={usersList?.find((user) => user.id === userScope)}/>

    <div>
    {userPosts?.map((post) => (
      <Post
      key={post.id} 
      title={post.title} 
      author={usersList?.filter((user) => user.id === post.userId)[0].username} 
      body={post.body}/>
    ))}
    </div>

</section>
    
  );


}

export default ProfilePage;