import styles from './postList.module.css';

import Post from '../Post';

import { postObject, userObject } from '../../../types/Type';

type postPageProps = {
    postsList: postObject[];
    usersList: userObject[] | undefined;
   switchPostsUser : Function;
   inputValue?: string;
   userScope?: number | undefined;
}

function PostList({postsList, usersList, switchPostsUser, inputValue, userScope}: postPageProps) {


  // FilteredPosts permet d'avoir une valeur filtrée des post en fonction de la valeur de la searchbar ou de l'utilisateur cliqué
    const filteredPosts = postsList?.filter((post) =>
  (inputValue ? post.title.toLowerCase().includes(inputValue.toLowerCase()) : true) &&
  (userScope !== undefined ? post.userId === userScope : true)
);


  return (
            <section>
              {filteredPosts?.length === 0 ? (
                <p className={styles.noResult}>Aucun résultat, modifiez votre recherche.</p>
                ) : (
                filteredPosts?.map((post) => (
                  <Post
                    onClick={userScope === undefined ? () => switchPostsUser('userON', post.userId, postsList) : undefined}
                    key={post.id}
                    title={post.title}
                    author={usersList?.find((user) => user.id === post.userId)?.username || ''}
                    body={post.body}
                  />
                ))
              )
              }
            </section>
  );
}

export default PostList;