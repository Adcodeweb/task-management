import { BsPlusLg } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

function Modal() {
  return (
    <div
      className="bg-white  w-96 p-5 rounded-md"
      onClick={(e) => e.stopPropagation()}
    >
      <h1 className="font-semibold mb-5 placeholder:">Add new task</h1>
      <form className="flex-1">
        <div className="mb-5">
          <p className="text-sm mb-2 font-medium ">Title</p>
          <input
            maxLength={50}
            type="text"
            placeholder="E.g Take coffe break"
            className="py-1 px-2 text-sm bg-transparent border border-gray-200 rounded-sm w-full focus:outline-none"
          />
        </div>
        <div className="mb-5">
          <p className="text-sm mb-2 font-medium ">Description</p>
          <textarea
            maxLength={160}
            type="text"
            placeholder="E.g It's always good to take a break"
            className="py-1 px-2 text-sm bg-transparent border border-gray-200 rounded-sm w-full focus:outline-none"
          />
        </div>

        <p className="text-sm mb-2 font-medium ">Substasks</p>
        <div className="mb-5 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input
              maxLength={50}
              type="text"
              placeholder="E.g Make coffe"
              className="py-1 px-2 text-sm bg-transparent border border-gray-200 rounded-sm w-full focus:outline-none"
            />
            <GrClose />
          </div>
          <div className="flex items-center gap-2">
            <textarea
              maxLength={160}
              type="text"
              placeholder="E.g Drink coffe"
              className="py-1 px-2 text-sm bg-transparent border border-gray-200 rounded-sm w-full focus:outline-none"
            />
            <GrClose />
          </div>
          <button className="text-sm font-medium flex gap-2 py-2 px-4 justify-center items-center border border-gray-300 hover:bg-purple-900 hover:text-white rounded-full cursor-pointer ease-in-out duration-300">
            <BsPlusLg size={10} className="" /> Add new Subtask
          </button>
        </div>

        <div className="mb-5">
          <p className="text-sm mb-2 font-medium ">Status</p>
          <select className="text-sm bg-transparent border border-gray-200 rounded-sm w-full focus:outline-none">
            <option>Todo</option>
            <option>Doing</option>
            <option>Done</option>
          </select>
        </div>
        <button className="text-sm font-medium flex w-full gap-2 py-2 px-4 justify-center items-center bg-purple-900 text-white hover:bg-purple-700 rounded-full cursor-pointer ease-in-out duration-300">
          Create Task
        </button>
      </form>
    </div>
  );
}

export default Modal;
