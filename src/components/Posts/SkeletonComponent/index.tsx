import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Box } from "@material-ui/core";


const SkeletonComponent: React.FC = () => {
  return (
    <Box marginBottom={2} marginTop={2}>
      <Skeleton height={30} />
      <Skeleton height={30} />
      <Skeleton width={100} height={40} />
    </Box>
  );
}

export default SkeletonComponent;
