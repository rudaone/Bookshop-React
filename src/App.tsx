import './App.css';
import { 
  Header, 
  SignIn, 
  SignUp, 
  Books, 
  ContentPage,
  
} from './components'
import {
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route path="/" >
            <Route path='/sign-up'
                    element={<SignUp />} />
              <Route path='/sign-in' 
                    element={<SignIn />} />
              <Route path='/new' 
                    element={<Books />} />
              <Route path="books" >
                  <Route path=":isbn13" 
                        element={<ContentPage />} />
              </Route>
            </Route>
      </Routes>
    </>
  );
}

export default App;
