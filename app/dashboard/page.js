import DashboardContainer from "../components/dashboard/DashboardContainer";

import NewestMembers from "../components/dashboard/NewestMembers";
import Quests from "../components/dashboard/Quests";
import PopularGroups from "../components/dashboard/PopularGroups";
import Badges from "../components/dashboard/Badges";
import MiniNav from "../components/reusable/MiniNav";
import NewsPost from "../components/dashboard/NewsPosts";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import styles from "./page.module.css";

const DashboardPage = () => {
  const posts = [
    {
      userName: "John Doe",
      timestamp: "1 year ago",
      forum: "Cosplayers Group Forum",
      topic: "Welcome to the Cosplayers Group Forum",
      message: "Hello everyone!",
      commentCount: 5,
      shareCount: 2,
    },
    {
      userName: "Jane Doe",
      timestamp: "6 months ago",
      forum: "Anime Lovers Forum",
      topic: "Favorite Anime of 2023",
      message: "What's everyone's favorite anime so far this year?",
      commentCount: 10,
      shareCount: 4,
    },
  ];

  return (
    <DashboardContainer
      bannerTitle="Newsfeed"
      bannerBlurb="Check what your friends have been up to!"
      bannerImage="/newsfeed-bg.png"
    >
      <Row className="gx-0">
        <Col md={0} lg={3} className="order-3 order-lg-1 mb-3 mb-lg-0">
          <div className={styles.col1}>
            <NewestMembers />
            <Quests />
          </div>
        </Col>
        <Col md={12} lg={6} className="order-1 order-lg-2 mb-3 mb-lg-0">
          <div className={styles.col2}>
            <MiniNav />
            {posts.map((post, index) => (
              <NewsPost key={index} post={post} />
            ))}
          </div>
        </Col>
        <Col md={0} lg={3} className="order-2 order-lg-3 mb-3 mb-lg-0">
          <div className={styles.col3}>
            <PopularGroups />
            <Badges />
          </div>
        </Col>
      </Row>
    </DashboardContainer>
  );
};

export default DashboardPage;
