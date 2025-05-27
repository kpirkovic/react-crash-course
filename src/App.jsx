import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import { Jobs } from "./pages/Jobs";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import JobPageSingular, {jobLoader} from "./pages/JobPageSingular";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:id" element={<JobPageSingular />} loader={jobLoader} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider index router={router}/>
};

export default App;
