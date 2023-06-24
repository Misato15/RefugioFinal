// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage'
import LoginPage from './pages/LoginPage/LoginPage'
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage'
import SignupPage from './pages/SignupPage/SignupPage'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="Animals" titleTo="animals" buttonLabel="New Animal" buttonTo="newAnimal">
        <Route path="/animals/new" page={AnimalNewAnimalPage} name="newAnimal" />
        <Route path="/animals/{id}/edit" page={AnimalEditAnimalPage} name="editAnimal" />
        <Route path="/animals/{id}" page={AnimalAnimalPage} name="animal" />
        <Route path="/animals" page={AnimalAnimalsPage} name="animals" />
      </Set>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
     
     <Private unauthenticated='login'>
      <Route path="/" page={HomePage} name="home" />
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
