import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Typography,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function ProductMaster() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h4" fontWeight="bold">
          Product Master
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpen(true)}
        >
          Add Product
        </Button>
      </Stack>

      <Typography color="text.secondary">
        No products added yet.
      </Typography>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Add Product</DialogTitle>

        <DialogContent>

          <TextField
            label="SKU"
            fullWidth
            margin="normal"
          />

          <TextField
            label="Barcode"
            fullWidth
            margin="normal"
          />

          <TextField
            label="Product Name"
            fullWidth
            margin="normal"
          />

          <TextField
            label="Category"
            fullWidth
            margin="normal"
          />

          <TextField
            label="Flavor"
            fullWidth
            margin="normal"
          />

          <TextField
            label="Size"
            fullWidth
            margin="normal"
          />

        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>
            Cancel
          </Button>

          <Button variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}