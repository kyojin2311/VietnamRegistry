import { useNavigate } from "@remix-run/react";
import { Modal } from "flowbite-react";

export default function PageModal({ children, title }) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("..");
  };
  return (
    <Modal show={true} size="6xl" dismissible>
      <Modal.Header onClick={clickHandler}>
        <div>{title}</div>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
