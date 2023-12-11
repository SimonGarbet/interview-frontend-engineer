import React, {useState} from 'react';

import styles from './postPage.module.css';

import Post from '../Post';
import Searchbar from '../Searchbar';

import { postObject, userObject } from '../../types/Type';

type postPageProps = {
    postsList: postObject[];
    usersList: userObject[] | undefined;
   postsVisibility: boolean;
   switchPostsUser : Function;
}

function PostPage({postsList, usersList, postsVisibility, switchPostsUser}: postPageProps) {

      // Valeur dynamique de la searchbar
  const [inputValue, setInputValue] = useState('');

    const filteredPosts = postsList?.filter((post) =>
  inputValue ? post.title.toLowerCase().includes(inputValue.toLowerCase()) : true
);

  return (
    <section style={{display : postsVisibility ? 'block' : 'none'}}>

            <Searchbar 
            inputValue={inputValue} 
            setInputValue={setInputValue}
            />

            <div>
              {filteredPosts?.length === 0 ? (
                <p className={styles.noResult}>Aucun résultat, changez votre recherche.</p>
                ) : (
                filteredPosts?.map((post) => (
                  <Post
                    onClick={() => switchPostsUser('userON', post.userId, postsList)}
                    key={post.id}
                    title={post.title}
                    author={usersList?.find((user) => user.id === post.userId)?.username || ''}
                    body={post.body}
                  />
                ))
              )}
            </div>

          </section>
  );
}

export default PostPage;