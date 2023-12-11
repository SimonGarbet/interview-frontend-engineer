import styles from './backButton.module.css';

import { postObject } from '../../../types/Type';

  type profileProps = {
    postsList: postObject[];
    switchPostsUser : Function;
  }

function BackButton({ postsList, switchPostsUser }: profileProps) {


  return (
    <div className={styles.backbutton}>
        <button className={styles.switchButton} onClick={() => switchPostsUser('postsON', 1, postsList)}>Revenir sur les posts</button>
    </div>
  );


}

export default BackButton;