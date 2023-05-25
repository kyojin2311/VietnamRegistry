import { Modal } from "flowbite-react";

export default function Spinner() {
  return (
    <Modal show={true}>
      <div className="flex absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 bg-transparent">
        <div className="relative">
          <div className="w-12 h-12 rounded-full absolute border-4 border-solid border-gray-200"></div>
          <div className="w-12 h-12 rounded-full animate-spin absolute border-4 border-solid border-green-500 border-t-transparent shadow-md"></div>
        </div>
      </div>
    </Modal>
  );
}
