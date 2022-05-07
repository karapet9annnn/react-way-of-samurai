import { connect } from "react-redux";
import UserPosts from './UserPosts'
import {addPost} from './../../../State/postsReducer'

let mapStateToProps = (state) => {
  return {
    postsData: state.postsPage.postsData,
  }
}


let Posts = connect(mapStateToProps,{addPost})(UserPosts)

export default Posts


