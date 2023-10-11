"use client";

import Card from "../reusable/Card";
import CardItem from "../reusable/CardItem";
import { iconMapper } from "@/app/utils/iconMapper";

const quests = [
  {
    quest: "Posting Machine",
    questDetail: "Posted more than 20 profile activities in one day",
    iconName: "posting-machine",
  },
  {
    quest: "Update Profile",
    questDetail: "Updated your profile so that it is 100% completed",
    iconName: "update-profile",
  },
];

const renderMemberItem = (quests) => (
  <CardItem
    avatar={iconMapper(quests.iconName)}
    title={quests.quest}
    subtitle={quests.questDetail}
    divider={true}
  />
);

function Quests() {
  return <Card title="Quests" items={quests} renderItem={renderMemberItem} />;
}

export default Quests;
