import styles from './infoUser.module.css';

  type profileProps = {
    titleInformation: string;
    userInformation: string | undefined;
  }

function InfoUser({ titleInformation, userInformation }: profileProps) {

  return (
    <h6 className={styles.h6}><span>{titleInformation} :</span> {userInformation}</h6>
  );


}

export default InfoUser;