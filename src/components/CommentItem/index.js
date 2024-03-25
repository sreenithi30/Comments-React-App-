// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, changeLikeStatus, deleteComment} = props
  const {name, comment, id, date, isLiked} = commentDetails

  const likeUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likedClass = isLiked ? 'Liked' : 'notLiked'

  const handleLike = () => {
    changeLikeStatus(id)
  }

  const handleDelete = () => {
    deleteComment(id)
  }

  return (
    <li>
      <div className="commentCard">
        <p className="nameCard">R</p>
        <div>
          <p>{name}</p>
          <p>{comment}</p>
          <p>{formatDistanceToNow(new Date())}</p>
        </div>
      </div>
      <div className="likeBtn">
        <div className="likeCard">
          <img src={likeUrl} alt="like" />
          <button type="button" onClick={handleLike} className={likedClass}>
            Like
          </button>
        </div>
        <button
          type="button"
          onClick={handleDelete}
          className="deleteButton"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
