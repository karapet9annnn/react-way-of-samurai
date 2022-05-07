import React from "react";
import css from './Post.module.css'

const Post = ({post,likes}) => {
  return (
    <div className={css.post_item}>
      <div className={css.avatar}>
        <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" alt="" />
        <div className={css.message}>
          {post}
        </div>
      </div>
      <div className={css.likecount}>
        <p>{likes}</p>
      </div>
    </div>
  );
}

export default Post;