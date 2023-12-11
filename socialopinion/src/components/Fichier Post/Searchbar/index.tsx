import styles from './searchbar.module.css';

  type searchbarProps = {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
  }

function Searchbar({ inputValue, setInputValue }: searchbarProps) {

  return (
    <div className={styles.searchbar}>
            {inputValue ? (<h2>Recherche de "{inputValue}"</h2>) : (<h2>Tous les Posts</h2>)}
            <input onChange= {(event) => setInputValue(event.target.value)} value={inputValue} type="text" id="searchbar" name="searchbar" placeholder='Rechercher un post'/>
    </div>
  );


}

export default Searchbar;