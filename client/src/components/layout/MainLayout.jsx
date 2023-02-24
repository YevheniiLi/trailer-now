import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import GlobalLoading from "../common/GlobalLoading";

const MainLayout = () => {
  return (
    <>
      {/* global  */}
      <GlobalLoading />
      {/* global  */}

      {/* login modal */}
      {/* login modal */}

      <Box display="flex" minHeight="100vh">
        {/* header */}
        {/* header */}

        {/* main */}
        <Box component="main" flexGrow={1} overflow="hidden" minHeight="100vh">
          <Outlet />
        </Box>
        {/* main */}
      </Box>

      {/* footer */}
      {/* footer */}
    </>
  );
};

export default MainLayout;
