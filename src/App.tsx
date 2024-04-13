import type { FC } from "react";
import { Layout } from "./common/layout/Layout";
import TopPage from "./pages/TopPage";

const App: FC = () => {
  return (
    <Layout>
      <TopPage />
    </Layout>
  );
};

export default App;
