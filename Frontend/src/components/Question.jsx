import {Link } from "react-router-dom";
import {
  RiGalleryUploadFill,
  RiMessage3Fill,
  RiMenuFoldFill,
} from "react-icons/ri";

function Question() {
  return (
    <>
      <div className="p-4 bg-white border border-solid-1 border-[#e5e7eb] mb-4 rounded">
        <div className="flex justify-between">
          <div className="flex items-center">
            <img src={person} alt="" className="w-9 h-9 rounded-full " />
            <div>
              <h1 className="ml-2">Mohammed Ali</h1>
              <p className="text-gray-400 ml-2">1 Hour ago</p>
            </div>
          </div>
          <RiMenuFoldFill />
        </div>
        <Link to="/PostItem"> Transfer</Link>
        <p className="text-gray-400 mt-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi!
        </p>
        <img src={post} alt="" className="mt-2" />
        <div className="flex justify-evenly items-center mt-3">
          <FaRegComment />
          <FcLike />
        </div>
      </div>
    </>
  );
}

export default Question;
