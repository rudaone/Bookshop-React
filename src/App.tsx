
import React from 'react';
import './App.css';
import {
  Header,
  SignIn,
  SignUp,
  Books,
  ContentPage,
} from './components'
import { BooksBasket } from './components/BooksBasket';
import { RegistrationConfirm } from './components/RegistrationConfirm';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { SearchResults } from './components';
import { LikesBooks } from './components/LikesBooks';
import { Order } from './components/Order';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/books' />} />
        <Route path='sign-up'
          element={<SignUp />} />
        <Route path='sign-in'
          element={<SignIn />} />
        <Route path='activate/:uid/:token'
          element={<RegistrationConfirm />} />
        <Route path='/basket'
          element={localStorage.getItem('access') ? <BooksBasket /> : <Navigate to={'/sign-in'} />} />
        <Route path='/books'>
          <Route index element={<Books />} />
          <Route path=":isbn13"
            element={<ContentPage />} />
          <Route path='search-results' element={<SearchResults />} />
        </Route>

        <Route path='/like'
          element={localStorage.getItem('access') ? <LikesBooks /> : <Navigate to={'/sign-in'} />} />
        <Route path='/order'
          element={<Order />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;




// function App() {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path='/' element={<Navigate to='/books' />} />
//         <Route path='/sign-up'
//           element={<SignUp />} />
//         <Route path='/sign-in'
//           element={<SignIn />} />
//         <Route path='activate/:uid/:token'
//           element={<RegistrationConfirm />} />
//         <Route path='/basket'
//           element={localStorage.getItem('access') ? <BooksBasket /> : <Navigate to={'/sign-in'} />} />
//         <Route path='/new'
//           element={<Books />} />
//         <Route path='/books' >
//           <Route path=":isbn13"
//             element={<ContentPage />} />
//         </Route>
//         <Route path='/search-results'
//           element={<SearchResults />} />
//         <Route path='/favorites'
//           element={localStorage.getItem('access') ? <FavouriteBooks /> : <Navigate to={'/sign-in'} />} />
//         <Route path='/order'
//           element={<Order />} />
//       </Routes>
//       <Footer />
//     </>
//   )
// }