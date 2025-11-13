import { Link, useNavigate, useLocation } from "react-router";
import {useAuth} from '../hooks/useAuth';
import {registerOrLoginUser} from '../api/backend';
import Swal from 'sweetalert2';


function Login() {


   const {signInWithGmail, loggingInVerifiedUser, isError} = useAuth();
   const navigate = useNavigate();
   const location = useLocation();

   // login with gmail
    function loginWithGmail(){
        signInWithGmail()
        .then((result) => {
        const user = result.user;
        registerOrLoginUser(user);
        navigate(location.state || '/');

        Swal.fire({
          title: "Success !!",
          text: "Welcome Abort.",
          icon: "success",
          theme: 'auto'
        });

    })
  }                                            



   // login with email and password
    function handleLoginWithEmailAndPassword(event){
        event.preventDefault();

        const form = event.target;
        const email = event.target.email.value;
        const password = event.target.password.value;

        loggingInVerifiedUser(email, password)
        .then(() => {
        form.reset();
        navigate(location.state || '/');

        Swal.fire({
          title: "Success !!",
          text: "Welcome Abort.",
          icon: "success",
          theme: 'auto'
        });

      })

    }



  return (
        <>
        <title>Login</title>
        
        <div className="bg-base-200 min-h-[calc(100vh-4rem)] flex items-center justify-center py-10 px-4">
          <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl">
            <div className="card bg-base-100 shadow-2xl p-6 sm:p-10 md:p-16 lg:p-20">
              
              <h3 className="poppins-semibold text-2xl sm:text-3xl text-center pb-6">
                Login Your Account
              </h3>
              <span className="block w-full h-px bg-gray-300 mb-6"></span>

              <div className="card-body p-0">
                <form onSubmit={handleLoginWithEmailAndPassword}>
                  <fieldset className="fieldset space-y-4">
                    {/* Email */}
                    <label className="label">Email</label>
                    <input
                      type="email"
                      className="input input-bordered w-full"
                      name="email"
                      placeholder="Email"
                      required
                    />

                    {/* Password */}
                    <label className="label">Password</label>
                    <input
                      type="password"
                      className="input input-bordered w-full"
                      name="password"
                      placeholder="Password"
                      required
                    />

                    <button className="btn bg-amber-500 text-white w-full mt-6">Login</button>
                  </fieldset>
                </form>

                {/* Divider */}
                <div className="text-center mt-6">
                  <div className="divider">Or</div>

                  {/* Google Login */}
                  <button
                    onClick={loginWithGmail}
                    className="btn bg-white text-black border border-[#e5e5e5] w-full flex items-center justify-center gap-2"
                  >
                    <svg
                      aria-label="Google logo"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path d="m0 0H512V512H0" fill="#fff"></path>
                        <path
                          fill="#34a853"
                          d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                        ></path>
                        <path
                          fill="#4285f4"
                          d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                        ></path>
                        <path
                          fill="#fbbc02"
                          d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                        ></path>
                        <path
                          fill="#ea4335"
                          d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                        ></path>
                      </g>
                    </svg>
                    Login with Google
                  </button>
                </div>
              </div>

              {/* Footer Text */}
              <p className="text-center text-base mt-6">
                Don’t have an account?{" "}
                <Link to="/registration" className="text-primary font-semibold">
                  Register
                </Link>
              </p>

              {isError && (
                <p className="mt-3 text-base text-red-500 text-center">{isError}</p>
              )}
            </div>
        </div>
  </div>

        </>
    );
}

export default Login;