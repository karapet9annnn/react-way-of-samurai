import React from "react";
import css from './UserPosts.module.css'
import Post from './Post/Post'
import { reduxForm, Field } from 'redux-form'
import { maxLengthCreator,required } from "../../../utilities/validators/validator";
import { renderField } from "../../../Common/FormsControls/FormsControls";


let UserPosts = (props) => {
  let postData = props.postsData.map((item, index) => <Post post={item.post} key={index} likes={item.likes} />)

  let add = (newPost) => {
    props.addPost(newPost.post)
  }

  let maxLength10 = maxLengthCreator(10)

  let postForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit} className={css.posts}>
        <h2>My Posts</h2>
        <Field name='post'
          type='text'
          component={renderField}
          validate={[required,maxLength10]}
          label='Write Post...'
        />

        <div className={css.btn}>
          <button >Add Post</button>
        </div>
      </form>
    )
  }

  let PostFormRedux = reduxForm({ form: 'postsPage' })(postForm)


  return (
    <div>
      <PostFormRedux onSubmit={add} />
      <div className={css.user_posts}>
        {postData}
      </div>
    </div>
  )
}


export default UserPosts