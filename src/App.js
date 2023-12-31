import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Students from "./components/Students";
import Teacher from "./components/Teacher";
import Marks from "./components/Marks";
import Addstudents from "./components/Addstudents";
import Editstudents from "./components/Editstudents";
import Editteachers from "./components/Editteachers";
import Addteachers from "./components/Addteachers";
function App(){
  return(
    <main>
      <Router>
        <Nav />
        <section className="container">
          <Routes>
             <Route path='' element={<Home />}/>
             <Route path='students' element={<Students />}/>
             <Route path='teacher' element={<Teacher />}/>
             <Route path='marks/:id' element={<Marks />}/>
             <Route path='addstudents' element={<Addstudents />}/>
             <Route path='editstudents/:id' element={<Editstudents />}/>
             <Route path='editteacher/:id' element={<Editteachers />}/>
             <Route path='addteacher' element={<Addteachers />}/>
          </Routes>
        </section>
      </Router>
    </main>
  )
}
export default App;