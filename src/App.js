import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import RepetitionExercise from "./components/RepetitionExercise/index.js";
import DurationExercise from "./components/DurationExercise/index.js";
import Home from "./extra/home"
import Layout from "./extra/layout"
import './App.css'; 

const workouts = [
  {
    name: "pushups",
    type: "repetitions"
  },
  {
    name: "running",
    type: "duration"
  }
]


const mainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element = {<Home workouts ={workouts}/>}/>
      <Route path="/repetition/:name" element={<RepetitionExercise workouts={workouts}/>}/>
      <Route path="/duration/:name" element={<DurationExercise workouts={workouts}/>}/>
    </Route>
  )
);

function App() {
  return(
    <RouterProvider router ={mainRouter} />
  );
}
export default App;

// used this video to learn react router to setup pages: https://www.youtube.com/watch?v=OMQ2QARHPo0