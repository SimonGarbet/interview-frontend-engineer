/*Arboressence de la page :

Home -> PostPage      -> PostList -> Post
                                    -> Searchbar 
            -> ProfilePage -> Profile -> InfoUser
                                    -> PostList -> Post
                                    -> BackButton
*/



import React, {useEffect, useState} from 'react';

import PostPage from '../components/Fichier Post/PostPage';
import ProfilePage from '../components/Fichier Profile/ProfilePage';

import styles from './home.module.css';

import { postObject, userObject } from '../types/Type';

function App() {

  //Valeur de Loading et d'erreur
  const [isDataLoading, setDataLoading] = useState(true);
  const [error, setError] = useState(false);

  //Valeurs qui stockent les valeurs fetch Post et User
  const [postsList, setPostsList] = useState<postObject[]>([{userId:1, id:0, title:'', body:''}]);
  const [usersList, setUsersList] = useState<userObject[]>();

  // Valeurs permettant le switch entre visibilité des Posts ou de la page Utilisateur
  const [postsVisibility, setPostsVisibility] = useState(true);
  const [userVisibility, setUserVisibility] = useState(false);

  // Valeurs permettant le scope de l'utilisateur lié au post cliqué
  const [userScope, setUserScope] = useState<undefined | number>(undefined);



  useEffect(() => {

    // Fonction de fetch des Posts avec randomisation intégrée et des Utilisateurs
    async function fetchData() {
      try {
        const responsePost = await fetch('https://jsonplaceholder.typicode.com/posts')
        const postsList = await responsePost.json();
        const shuffledPosts = postsList.sort(() => Math.random() - 0.5);
        setPostsList(shuffledPosts);

        const responseUser = await fetch('https://jsonplaceholder.typicode.com/users')
        const usersList = await responseUser.json();
        setUsersList(usersList);

      } catch (err) {
        console.log('===== error =====', err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    
    fetchData()
  }, []);
  
  if (error) {
    return <p>Error</p>
  } 

  // Fonction permettant de switcher entre page utilisateur et post.
  // La valeur param prend l'action à faire, le newUserScope la valeur de l'utilisateur ciblé.
  function switchPostsUser (param: string, newUserScope: number, postsList: postObject[]) {

    if (param === 'userON'){
      setPostsVisibility(false)
      setUserVisibility(true)
      setUserScope(newUserScope)

      window.scrollTo(0, 0)
    }

    if (param === 'postsON'){
      setPostsVisibility(true)
      setUserVisibility(false)
      setUserScope(undefined)
    }
  }
  


  return (
    <div className={styles.global}>

      <h1>Social<br/>Opinion</h1>

      { isDataLoading ? (

      <div> Chargement </div>

      ) : (
        <div>

          <PostPage 
          postsList = {postsList}
          usersList = {usersList}
          postsVisibility = {postsVisibility}
          switchPostsUser = {switchPostsUser}
          />


          <ProfilePage
            postsList={postsList}
            usersList = {usersList}
            userVisibility={userVisibility}
            switchPostsUser = {switchPostsUser}
            userScope={userScope}
          />


        </div>
      )}
        
    </div>
  );
}



export default App;
