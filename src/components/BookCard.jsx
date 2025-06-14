function BookCard({data : {titel , author , image , language , pages}}) {
  return (
    <div>
        <img src={image} alt={titel}/>
        <div>
            <h3>{titel}</h3>
            <p>{author}</p>
            <div>
                <span>{language}</span>
                <span>{pages}</span>
            </div>
        </div>
        <button>like</button>
    </div>
  )
}

export default BookCard