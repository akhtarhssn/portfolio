import { HiMiniBars2 } from "react-icons/hi2";

const MobileMenuIcon = ({ toggleMenu }) => {
  return (
    <>
      <div className="fixed lg:static" onClick={toggleMenu}>
        <button className="border-2 bg-[#212121] z-50 border-gray-600 rounded-full hover:border-[#28E98C] hover:text-[#28E98C] transition p-3 text-white">
          <HiMiniBars2 size={25} />
        </button>
      </div>
    </>
  );
};

export default MobileMenuIcon;
