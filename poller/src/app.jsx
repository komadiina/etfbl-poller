import { Router } from "@solidjs/router";
import "./app.css";
import Header from "./components/header";
import Oglasi from "./components/Oglasi";


export default function App() {
  return (
    <>
      <Header/>
      <Oglasi />
    </>
  );
}
