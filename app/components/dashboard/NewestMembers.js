"use client";

import Card from "../reusable/Card";
import Avatar from "../reusable/Avatar";
import CardItem from "../reusable/CardItem";

const newestMembers = [
  { name: "Sandra Strange", socialTag: "@sanstrange" },
  { name: "Rosie Sakura", socialTag: "@sakuraro" },
  { name: "Damian Greyson", socialTag: "@dgreyson" },
  { name: "The Green Goo", socialTag: "@greengoo" },
  { name: "Bearded Wonder", socialTag: "@brdwonder" },
];

const renderMemberItem = (member) => (
  <CardItem
    avatar={<Avatar />}
    title={member.name}
    subtitle={member.socialTag}
    divider={false}
  />
);

function NewestMembers() {
  return (
    <Card
      title="Newest Members"
      items={newestMembers}
      renderItem={renderMemberItem}
    />
  );
}

export default NewestMembers;
