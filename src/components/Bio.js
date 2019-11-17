import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'
import { Link } from 'react-navi'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "simon.xmfan@gmail.com",
    size: 60,
  })

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <Link to={props.blogRoot}>
        <img src={photoURL} alt="Me" />
      </Link>
      <p>
        <b>Simon Fan (樊昕明)</b>
        <br />
        Mind-wandering
        <br />
        <small><Link href="/about" className={styles.nostyle}>About</Link></small>
        <br />
      </p>
    </div>
  )
}

export default Bio
