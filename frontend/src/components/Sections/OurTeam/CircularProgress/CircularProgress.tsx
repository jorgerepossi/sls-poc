import React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export function CircularProgressWithLabel(
  props: CircularProgressProps & {
    value: number;
    text?: string;
    className?: string;
  }
) {
  return (
    <Box className="circular-content_wrapper">
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" {...props} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
          className=""
        >
          <Typography
            variant="caption"
            component="div"
            className="caption_text"
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
      <Box className="caption_team">{props.text}</Box>
    </Box>
  );
}

export default function CircularStatic() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
