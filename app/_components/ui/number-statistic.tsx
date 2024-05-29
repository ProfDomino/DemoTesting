import { Box, Stack, Typography } from "@mui/joy";
import { ContentBox } from "./content-box";

interface NumberStatisticProps {
  number: string;
  statistic: string;
  color?: "primary" | "danger" | "neutral" | "success" | "warning";
  variant?: string;
}

function NumberStatistic(props: NumberStatisticProps): JSX.Element {
  const { number = 0, statistic = "", color = "primary" } = props;
  return (
    <Box
      borderRadius="20px"
      padding={1}
      mb={2}
      sx={(theme) => ({
        backgroundColor: "#FFF",
        boxShadow: theme.vars.shadow.lg,
      })}
      width="100%"
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="center"
        spacing={1}
      >
        <Typography level="h1">{number}</Typography>
        <Typography level="body-lg">{statistic}</Typography>
      </Stack>
    </Box>
  );
}

export default NumberStatistic;
