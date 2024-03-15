import * as React from "react";

import { TextField, Button, FormControl } from "@mui/material";

export default function SearchAppBar({ id, label, onClick, title }) {
  return (
    <FormControl fullWidth>
      <TextField id={id} label={label} variant="outlined" />

      <Button
        variant="contained"
        color="primary"
        onClick={onClick}
        style={{ marginTop: "10px" }}
      >
        {title}
      </Button>
    </FormControl>
  );
}
