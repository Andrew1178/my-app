// TODO: Dont use react to fetch data, leverage a framework (Next.js?) because otherwise the data will be fetched every time the component is rendered in Dev which will be twice...
// Kinda cant believe React doesnt natively handle this
// Or continue as is and then refactor later?
import { useState } from 'react';

export default function LoginRegister(){
    const [ showRegister, setShowRegister] = useState(false);

    if (showRegister)
        return <Register />
    else
        return <Login aOnRegisterClickFunc= {aValue => setShowRegister(aValue)}  />
}

function Login({aOnRegisterClickFunc}){
    return(
        <>
<form>
  /* Email input */
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" />
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  /* Password input */
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  /* 2 column grid layout for inline styling */
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
    /* Checkbox*/
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
    /* Simple link */
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  /* Submit button */
  <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">Sign in</button>

  /* Register buttons */
  <div class="text-center">
    <p>Not a member? <a href="#!" onClick={(e) => { e.preventDefault(); aOnRegisterClickFunc(true); }}>Register</a></p>
  </div>
</form>
</>
    );
}


function Register(){
    return(
        <>
        /* Section: Design Block */
<section class="">
  /* Jumbotron */
  <div class="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundcolor: "hsl(0, 0%, 96%)"}}>
    <div class="container">
      <div class="row gx-lg-5 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <h1 class="my-5 display-3 fw-bold ls-tight">
            The best offer <br />
            <span class="text-primary">for your business</span>
          </h1>
          <p style={{color: "hsl(217, 10%, 50.8%)"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="card">
            <div class="card-body py-5 px-md-5">
              <form>
                /* 2 column grid layout with text inputs for the first and last names */
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div data-mdb-input-init class="form-outline">
                      <input type="text" id="form3Example1" class="form-control" />
                      <label class="form-label" for="form3Example1">First name</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div data-mdb-input-init class="form-outline">
                      <input type="text" id="form3Example2" class="form-control" />
                      <label class="form-label" for="form3Example2">Last name</label>
                    </div>
                  </div>
                </div>

                /* Email input */
                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="email" id="form3Example3" class="form-control" />
                  <label class="form-label" for="form3Example3">Email address</label>
                </div>

                /* Password input */
                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="password" id="form3Example4" class="form-control" />
                  <label class="form-label" for="form3Example4">Password</label>
                </div>

                /* Submit button */
                <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  /* Jumbotron */
</section>
/* Section: Design Block */
        </>
    );
}