"use client";

import Card from "../reusable/Card";
import Avatar from "../reusable/Avatar";
import CardItem from "../reusable/CardItem";

import { iconMapper } from "@/app/utils/iconMapper";

const popularGroups = [
  { groupName: "Street Artists", members: 4, status: "public" },
  { groupName: "Cosplayers of the World", members: 3, status: "public" },
  { groupName: "Stream Designers", members: 3, status: "public" },
  { groupName: "Gaming Watchtower", members: 3, status: "private" },
  { groupName: "Living in Japan", members: 2, status: "public" },
];

const renderMemberItem = (groups) => (
  <CardItem
    avatar={<Avatar />}
    title={groups.groupName}
    subtitle={`${groups.members} members`}
    divider={false}
    rightIcon={iconMapper(groups.status)}
  />
);

function PopularGroups() {
  return (
    <Card
      title="Popular Groups"
      items={popularGroups}
      renderItem={renderMemberItem}
    />
  );
}

export default PopularGroups;
