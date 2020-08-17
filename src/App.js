import React from "react";
import "./App.css";
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box borderWidth="1px" width="50%" alignItems="center" rounded="lg">
          <Header/>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
