"use client";

import Card from "../reusable/Card";
import CardItem from "../reusable/CardItem";
import { iconMapper } from "@/app/utils/iconMapper";

const badges = [
  {
    badgeName: "Globe Trotter",
    badgeDetail: "Has joined at least 10 different groups",
    iconName: "globe-trotter",
  },
  {
    badgeName: "Social Butterfly",
    badgeDetail: "Has made 50 or more friends on the platform",
    iconName: "social-butterfly",
  },
];

const renderMemberItem = (badge) => (
  <CardItem
    avatar={iconMapper(badge.iconName)}
    title={badge.badgeName}
    subtitle={badge.badgeDetail}
    divider={true}
  />
);

function Badges() {
  return <Card title="Badges" items={badges} renderItem={renderMemberItem} />;
}

export default Badges;
