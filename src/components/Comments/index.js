import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  getName = e => {
    this.setState({name: e.target.value})
  }

  getComment = e => {
    this.setState({comment: e.target.value})
  }

  addNewComment = e => {
    e.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      date: new Date(),
      isLiked: false,
      name,
      comment,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  changeLikeStatus = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(each => each.id !== id),
    }))
    console.log(id)
    console.log(commentsList)
  }

  render() {
    const {name, comment, commentsList} = this.state
    // console.log(name)
    // console.log(comment)
    // console.log(commentsList)

    return (
      <div>
        <h1>Comments</h1>
        <div className="container">
          <div className="inputContainer">
            <p>Say something about 4.0 Technologies</p>
            <form>
              <input
                onChange={this.getName}
                type="text"
                placeholder="Your Name"
                value={name}
              />
              <br />
              <textarea
                onChange={this.getComment}
                rows="10"
                cols="50"
                placeholder="Your Comment"
                value={comment}
              />
              <br />
              <button onClick={this.addNewComment}>Add Comment</button>
            </form>
          </div>
          <img
            className="sideImage"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr />
        <div className="commentsCount">
          <button>{commentsList.length}</button>
          <p>Comments</p>
        </div>
        <ul>
          {commentsList.map(each => (
            <CommentItem
              changeLikeStatus={this.changeLikeStatus}
              commentDetails={each}
              deleteComment={this.deleteComment}
              key={each.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
