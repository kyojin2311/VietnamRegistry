import province from "../../util/province.json";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Modal } from "flowbite-react";
import { Form } from "@remix-run/react";

export default function ProvinceBox() {
  const name = province.map((a) => a.name);
  return (
    <Modal show={true}>
      <Modal.Header>
        <div>Choose a province</div>
      </Modal.Header>
      <Modal.Body>
        <Form method="post" className = "bg-transparent dark:text-white">
          <Autocomplete
            disablePortal
            
            options={name}
            renderInput={(params) => <TextField {...params} label="Province" name="province"/>}
          />
        </Form>
      </Modal.Body>
    </Modal>
  );
}
