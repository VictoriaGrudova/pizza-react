import React from 'react';
import styles from './NotFoundBlock.module.scss';
import notFound from '../../assets/img/no-results.png'

const NotFoundBlock:React.FC = () => {
  window.scrollTo(700, 700)
  return (
    <div className={styles.root}>
      <h2>Nothing was found</h2>
      <img src={notFound} className='move-anim'/>
    </div>
  )
}

export default NotFoundBlock