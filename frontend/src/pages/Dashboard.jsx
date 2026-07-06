import { Grid, Paper, Typography } from "@mui/material";

const Card = ({ title, value }) => (
  <Paper
    elevation={3}
    sx={{
      p: 3,
      borderRadius: 3,
    }}
  >
    <Typography color="gray">
      {title}
    </Typography>

    <Typography
      variant="h4"
      fontWeight="bold"
      mt={1}
    >
      {value}
    </Typography>
  </Paper>
);

export default function Dashboard() {
  return (
    <>
      <Typography
        variant="h4"
        mb={4}
        fontWeight="bold"
      >
        Dashboard
      </Typography>

      <Grid container spacing={3}>

        <Grid item xs={3}>
          <Card title="Products" value="0" />
        </Grid>

        <Grid item xs={3}>
          <Card title="Stock In Today" value="0" />
        </Grid>

        <Grid item xs={3}>
          <Card title="Stock Out Today" value="0" />
        </Grid>

        <Grid item xs={3}>
          <Card title="Low Stock" value="0" />
        </Grid>

      </Grid>
    </>
  );
}