import styles from './backButton.module.css';

import { postObject } from '../../../types/Type';

  type profileProps = {
    postsList: postObject[];
    switchPostsUser : Function;
  }

function BackButton({ postsList, switchPostsUser }: profileProps) {


  return (
        <button className={styles.switchButton} onClick={() => switchPostsUser('postsON', 1, postsList)}>Revenir sur les posts</button>
  );


}

export default BackButton;