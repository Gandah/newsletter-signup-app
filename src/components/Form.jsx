import {  useState } from 'react';
import { ReactComponent as BulletPoint } from "../assets/icon-list.svg";
import validator from 'validator';
import { useNavigate } from "react-router-dom";



const Form = () => {

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const navigate = useNavigate();


  // Submit functionality
  function handleSubmit(e){
    e.preventDefault();
    
    if(!validator.isEmail(email)){
      setIsEmailValid((preValue) => {
        return !preValue
      });
     }else{
      localStorage.setItem("email", email);
      navigate('/success');
     }
    
  }


  return (
    <section className="min-w-[300px] h-auto  flex flex-col  md:flex-row-reverse md:p-4 lg:p-6 md:w-[740px] lg:w-[850px] lg:max-h-[550px] md:gap-6 bg-white rounded-3xl lg:gap-6">
      <div className="w-full lg:h-[500px] lg:rounded-xl overflow-hidden lg:pl-14">
        <img
          className="block md:hidden w-full object-cover h-auto"
          src="/illustration-sign-up-mobile.svg"
          alt="desktop window"
        />
        <img
          className="hidden md:block w-full lg:w-auto object-cover lg:max-h-[500px]"
          src="/illustration-sign-up-desktop.svg"
          alt="desktop window"
        />
      </div>
      <div className="bg-white flex flex-col justify-start gap-4 px-4 py-6 mt-4 md:w-[90%] lg:w-full lg:mt-10 lg:pl-8 lg:pr-0">
        <div className="text-4xl font-bold lg:text-5xl">
          <h1>Stay updated!</h1>
        </div>
        <div className="text-charcoalGrey lg:">
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
        </div>
        <div className="md:text-sm lg:text-base">
          <div className="text-charcoalGrey grid gap-3">
            <div className="flex gap-3">
              <BulletPoint />
              <p> Product discovery and building what matters</p>
            </div>
            <div className="flex gap-3">
              <BulletPoint />
              <p>Measuring to ensure updates are a success</p>
            </div>
            <div className="flex gap-3">
              <BulletPoint />
              <p>And much more!</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 mt-4 w-full">
          <div>
            <div className='flex justify-between'>
            <label className="block text-xs font-semibold mb-1" htmlFor="email">
              Email address
            </label>
            { isEmailValid &&
              <label className="block text-xs font-semibold mb-1 text-right text-primaryColor" htmlFor="email">
              Valid email required
            </label> }
            </div>
            <input
              type="email"
      className={`w-full border outline-none py-2 px-4 rounded focus-within:border-charcoalGrey ${isEmailValid ? "border-primaryColor bg-primaryColor/20" : "" } `}
              name="email"
              id="email"
              placeholder="email@company.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
               onFocus={() => {
                if (isEmailValid) {
                  setIsEmailValid(false);}
                }}
               />
          </div>
          <button
            type="submit"
            className="bg-charcoalGrey text-sm text-white p-3 rounded w-full hover:bg-gradient-to-r from-secondaryColor to-primaryColor shadow-xl hover:shadow-primaryColor/30"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
