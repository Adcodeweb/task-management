import { useState } from "react";
import Modal from "./Modal";

function Todo() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        className="bg-gray-100 rounded-lg p-4 my-5 cursor-pointer hover:bg-purple-900 hover:text-white ease-in-out duration-300"
        onClick={() => setShowModal(true)}
      >
        <h4 className="font-medium">Build UI for onboarding flow</h4>
        <p className="text-xs">3 out of 4 substasks</p>
      </div>
      {showModal && (
        <div
          className="bg-black/50 backdrop-blur-sm fixed inset-0 text-black p-5 flex align-middle items-center justify-center overflow-auto "
          onClick={() => setShowModal(false)}
        >
          <Modal />
        </div>
      )}
    </>
  );
}

export default Todo;
