import { useState } from "react";

import "./App.css";
import { AppShell, Button } from "@mantine/core";

function App() {
  return (
    <>
      <AppShell>
        <AppShell.Main>
          <Button>Hello World</Button>
        </AppShell.Main>
      </AppShell>
    </>
  );
}

export default App;
