import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { Login } from './components/login/login';
import { Nav } from './components/navbar/navbar';
import { AdminNav } from './components/admin/adminnav';
import { Book } from './components/admin/book/book';
import { User } from './components/admin/user/user';
import { AddBook } from './components/admin/book/addbook/addbook';
import { EditBook } from './components/admin/book/editbook/editbook';
import { AdminHome } from './components/admin/home/adminhome';
import { BookDetails } from './components/admin/book/bookdetail/bookdetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={[<Nav/>,<Login/>]}></Route>
        <Route path='/admin' element={[<Nav/>,<AdminHome/>]}></Route>
        <Route path='/admin/book' element={[<Nav/>,<AdminNav/>,<Book/>]}></Route>
        <Route path='/admin/book/detail/:s_no' element={[<Nav/>,<AdminNav/>,<BookDetails/>]}></Route>
        <Route path='/admin/book/addbook' element={[<Nav/>,<AdminNav/>,<AddBook/>]}></Route>
        <Route path='/admin/book/:s_no' element={[<Nav/>,<AdminNav/>,<EditBook/>]}></Route>
        <Route path='/admin/user' element={[<Nav/>,<AdminNav/>,<User/>]}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
library.add(fab, fas, far)