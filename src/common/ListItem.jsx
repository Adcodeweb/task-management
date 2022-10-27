import { MdOutlineSpaceDashboard } from "react-icons/md";

function ListItem() {
  return (
    <li className="text-sm font-medium flex gap-2 py-2 px-4 items-center hover:bg-purple-800 hover:text-white rounded-r-full cursor-pointer ease-in-out duration-300">
      <MdOutlineSpaceDashboard /> Project Name
    </li>
  );
}

export default ListItem;
