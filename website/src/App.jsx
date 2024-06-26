import { useState } from "react";

import "./App.css";
import { AppShell, Button, Center, Group, Text } from "@mantine/core";

function App() {
  return (
    <>
      <AppShell header={{ height: 60 }} padding={"md"}>
        <AppShell.Header
          p="sm"
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <Text>About</Text>
          <Text>Projects</Text>
          <Text>Skills</Text>
        </AppShell.Header>
        <AppShell.Main>
          <Button>Hello World</Button>
        </AppShell.Main>
      </AppShell>
    </>
  );
}

export default App;
