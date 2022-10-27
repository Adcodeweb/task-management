import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { AiFillSignal } from "react-icons/ai";
import { SlOptionsVertical } from "react-icons/sl";
import ListItem from "../common/ListItem";

function Layout({ children }) {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div className="flex fixed inset-0">
      {showSideBar && (
        <aside className="bg-gray-100 h-screen relative pr-8 border-r border-gray-200 ">
          <h1 className="text-3xl mb-5 font-semibold p-4 flex gap-1">
            <AiFillSignal className="text-purple-900" />
            Mgment
          </h1>
          <div className="flex flex-col justify-between gap-3 ">
            <h3 className="text-xs tracking-wider px-4 ">ALL BOARDS ( 3 )</h3>
            <ul className="grid gap-2  ">
              <ListItem />
              <ListItem />
              <ListItem />
              <button className="text-sm font-medium flex gap-2 p-2 items-center mt-4 px-5 text-purple-800 hover:bg-purple-800 hover:text-white rounded-r-full ease-in-out duration-300">
                <BsPlusLg size={10} className="" />
                Create new board
              </button>
            </ul>
          </div>
          <button
            className="flex gap-1 items-center justify-center absolute bottom-0 left-0 right-0 p-2 hover:scale-105 hover:text-purple-900 ease-in-out duration-200 "
            onClick={() => setShowSideBar(false)}
          >
            <AiFillEyeInvisible />
            <p className="text-xs">Hide Sidebar</p>
          </button>
        </aside>
      )}
      {!showSideBar && (
        <aside className="h-screen bg-gray-100 p-3 flex flex-col justify-end border-r border-gray-200">
          <button
            className="flex items-center "
            onClick={() => setShowSideBar(true)}
          >
            <AiFillEye className="hover:scale-125 hover:text-purple-900 ease-in-out duration-200" />
          </button>
        </aside>
      )}

      <div className="w-full">
        <header className="bg-gray-100 h-fit flex-grow p-4 flex justify-between gap-2 ">
          <h2 className="sm:text-xl font-medium">Platform launch</h2>
          <div className="flex gap-4">
            <button className="text-sm font-medium flex gap-2 py-2 px-4 items-center bg-purple-900 text-white rounded-full cursor-pointer hover:bg-purple-700 ease-in-out duration-300">
              <BsPlusLg size={10} className="" />{" "}
              <p className="hidden sm:inline-block">Add new task</p>
            </button>
            <button>
              <SlOptionsVertical />
            </button>
          </div>
        </header>
        <main className="pl-5 pt-5 pr-10 pb-20 overflow-auto h-full w-full bg-slate-200">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
