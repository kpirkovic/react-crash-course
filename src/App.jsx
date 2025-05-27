import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Jobs from "./pages/Jobs";
import AddJob from "./pages/AddJob";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import JobPageSingular, {jobLoader} from "./pages/JobPageSingular";

const App = () => {
  /* Add New Job */
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });

    return;
  };

  /* Delete Job */
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });

    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/add-job" element={<AddJob addJobSubmit={addJob} />} />
        <Route
          path="/jobs/:id"
          element={<JobPageSingular deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider index router={router} />;
};

export default App;
