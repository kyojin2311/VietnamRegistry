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
        <Alert color="failure" className="mb-5">
          <span>
            <span className="font-medium mb-5"></span> {action.message}
          </span>
        </Alert>
      ) : (
        ""
      )}
      <Form method="post" className="bg-transparent dark:text-white mb-10">
        <Autocomplete
          disablePortal
          options={name}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Province"
              name="province"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
        {/* <button className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Search
        </button> */}
      </Form>
    </PageModal>
  );
}
