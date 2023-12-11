import React, {useState} from 'react';

import PostList from '../PostList';
import Searchbar from '../Searchbar';

import { postObject, userObject } from '../../../types/Type';

type postPageProps = {
    postsList: postObject[];
    usersList: userObject[] | undefined;
   postsVisibility: boolean;
   switchPostsUser : Function;
}

function PostPage({postsList, usersList, postsVisibility, switchPostsUser}: postPageProps) {

      // Valeur dynamique de la searchbar
  const [inputValue, setInputValue] = useState('');

  return (
    <section style={{display : postsVisibility ? 'block' : 'none'}}>

            <Searchbar 
            inputValue={inputValue} 
            setInputValue={setInputValue}
            />

            <PostList 
            postsList = {postsList}
            usersList = {usersList}
            switchPostsUser = {switchPostsUser}
            inputValue ={inputValue}
            />

          </section>
  );
}

export default PostPage;