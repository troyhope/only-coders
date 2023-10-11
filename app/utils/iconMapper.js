import { GiHillConquest } from "react-icons/gi";
import { FaPersonCircleQuestion, FaClipboardQuestion } from "react-icons/fa6";
import { HiOutlineGlobe, HiOutlineLockClosed } from "react-icons/hi";

export const iconMapper = (iconName) => {
  switch (iconName) {
    case "public":
      return <HiOutlineGlobe color="#d3d3d3" size={"1.2em"} />;
    case "private":
      return <HiOutlineLockClosed color="#d3d3d3" size={"1.2em"} />;
    case "posting-machine":
      return <GiHillConquest color="#d3d3d3" size={"1.2em"} />;
    case "update-profile":
      return <FaPersonCircleQuestion color="#d3d3d3" size={"1.2em"} />;
    default:
      return <FaClipboardQuestion color="#d3d3d3" size={"1.2em"} />;
  }
};
