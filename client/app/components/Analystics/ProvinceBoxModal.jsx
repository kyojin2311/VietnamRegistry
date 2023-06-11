import province from "../../util/province.json";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import PageModal from "../../util/PageModal";
import { Form, useActionData } from "@remix-run/react";
import { Alert } from "flowbite-react";

export default function ProvinceBox() {
  const name = province.map((a) => a.name);
  const action = useActionData();
  return (
    <PageModal title="Choose a Province">
      {action ? (
        <Alert color="failure">
          <span>
            <span className="font-medium"></span> {data.message}
          </span>
        </Alert>
      ) : (
        ""
      )}{" "}
      <Form method="post" className="bg-transparent dark:text-white">
        <Autocomplete
          disablePortal
          options={name}
          renderInput={(params) => (
            <TextField {...params} label="Province" name="province" />
          )}
        />
      </Form>
    </PageModal>
  );
}
