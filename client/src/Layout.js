import Header from "./Header";
import {Outlet} from "react-router-dom";
import img from '../src/blog.jpg'

export default function Layout() {
  return (
    <main >
      <Header />
      <Outlet />
      <img src ={img} style={{width:"100%"}}/>
    </main>
  );
}