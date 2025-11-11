import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineHistory } from "react-icons/ai";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navlinks = () => {
  return (
    <div className="flex gap-[75px] items-center ">
      <Link to="/">
        <AiOutlineHome size={32} color="#ffffff" />
      </Link>
      <Link to="/about">
        <AiOutlineHeart size={32} color="#ffffff" />
      </Link>
      <Link to="/contact">
        <AiOutlineHistory size={32} color="#ffffff" />
      </Link>
      <Link to="/dashboard">
        <AiOutlineVideoCamera size={32} color="#ffffff" />
      </Link>
    </div>
  );
};

export default Navlinks;
