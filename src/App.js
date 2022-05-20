import { Header } from "./components/shared";
import { PlayList } from "./components/playlist";

import { songs } from './models';

const App = () => {

  return (
    <>
      <Header />
      <PlayList songs={songs} />
    </>
  );
}

export default App;

