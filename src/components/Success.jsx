import checkIcon from '../assets/icon-success.svg'
import { useNavigate } from 'react-router-dom'


const Success = () => {
    const navigate = useNavigate()
    const email = localStorage.getItem("email");
    // localStorage.removeItem("email");

    console.log(email)

  return (
    <section className="bg-white min-w-[300px] heigth-screen grid items-center p-6 grid-rows-2 sm:h-[450px] sm:w-[400px] sm:grid-rows-[200px_1px] sm:p-12 sm:rounded-3xl">
        <div className='grid gap-6 mt-[4rem] sm:m-0'>
            <div className='sm:mt-16'>
                <img src={checkIcon} alt=""/>
            </div>
            <div className='text-4xl font-bold'>
                <h1>Thanks for subscribing!</h1>
            </div>
            <div className='text-sm'>
                <p>
                    A confirmation email has been sent to <span className='font-bold'>{email}</span>. 
    Please open it and click the button inside to confirm your subscription.
                </p>
            </div>
        </div>
        <form>
            <button type="button" onClick={() => navigate("/")} className='bg-charcoalGrey text-sm text-white p-3 rounded w-full hover:bg-gradient-to-r from-secondaryColor to-primaryColor shadow-xl hover:shadow-primaryColor/30 mt-[16rem]'>Dismiss message</button>
        </form>   
    </section>
  )
}

export default Success