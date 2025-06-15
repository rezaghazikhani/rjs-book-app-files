import { useState } from "react"
import { AiFillHeart } from "react-icons/ai"

import styles from './BookCard.module.css'

function BookCard({ data: { titel, author, image, language, pages } }) {

    const [like, setLike] = useState(false);


    const likeHandeler = () => {
        setLike((like) => !like)
    }

    return (
        <div className={styles.card}>
            <img src={image} alt={titel} />
            <div className={styles.info}>
                <h3>{titel}</h3>
                <p>{author}</p>
                <div>
                    <span>{language}</span>
                    <span>{pages}</span>
                </div>
            </div>
            <button onClick={likeHandeler}><AiFillHeart color={like ? "red" : "#e0e0e0"} fontSize="1.8rem" /></button>
        </div>
    )
}

export default BookCard