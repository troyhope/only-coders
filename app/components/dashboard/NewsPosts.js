"use client";

import Avatar from "../reusable/Avatar";
import styles from "./NewsPosts.module.css";

const NewsPost = ({ post }) => {
  return (
    <div className={styles.newsPostCard}>
      <div className={styles.header}>
        <Avatar
          imageUrl={
            "http://gravatar.com/avatar/e20a1eb8fedf2831348ab4adfbe2989d?s=512Peter"
          }
        />
        <div className={styles.userInfo}>
          <div className={styles.nameAndStatus}>
            <span className={styles.name}>{post.userName}</span>
            <span className={styles.blueTick}>✔</span>
            <span className={styles.proMemberLabel}>Pro Member</span>
            <span className={styles.blurb}>
              &nbsp;replied to the topic&nbsp;<strong>{post.topic}</strong>
              &nbsp;in the forum&nbsp;<strong>{post.forum}</strong>
            </span>
          </div>
          <div className={styles.timestamp}>{post.timestamp}</div>
        </div>
      </div>
      <div className={styles.messageContent}>{post.message}</div>
      <hr className={styles.divider} />
      <div className={styles.footer}>
        <div className={styles.reactions}>😆</div>
        <div className={styles.commentAndShareCounts}>
          {post.commentCount} comments&nbsp;&nbsp;&nbsp;{post.shareCount} shares
        </div>
      </div>
    </div>
  );
};

export default NewsPost;
