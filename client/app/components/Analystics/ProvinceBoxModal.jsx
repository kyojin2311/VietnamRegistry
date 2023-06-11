import province from "../../util/province.json";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import PageModal from "../../util/PageModal";
import { Form } from "@remix-run/react";

export default function ProvinceBox() {
  const name = province.map((a) => a.name);
  return (
    <PageModal title="Choose a Province">
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
