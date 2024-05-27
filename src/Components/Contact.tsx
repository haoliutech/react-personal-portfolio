import { useForm, SubmitHandler } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Inputs = {
  submitName: string
  submitEmail: string
  submitMessage: string
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    toast.success("Message sent!")
  }

  console.log(watch("submitName"))

  return (
    <form id="contact" className="m-auto px-3 max-w-screen-sm bg-base-100" onSubmit={handleSubmit(onSubmit)} >
      <h3 className="text-3xl font-bold text-center">Contact Me!</h3>
      <label className="my-6 input input-bordered flex items-center gap-2">
        Your Name
        <input type="text" className="grow" placeholder="Daisy" {...register("submitName", { required: true })}/>
      </label>
      {errors.submitName && <span>Your name is needed!</span>}
      <label className=" my-6 input input-bordered flex items-center gap-2">
        Your Email
        <input type="text" className="grow" placeholder="daisy@site.com" {...register("submitEmail", { required: true })}/>
      </label>
      {errors.submitEmail&& <span>Your email is needed!</span>}
      <label className="my-6 input input-bordered flex items-center gap-2">
        Your Message
        <input type="text" className="grow" placeholder="Hi! Can we have a chat?" {...register("submitMessage")}/ >
      </label>
      <div className="flex">
        <input className="btn btn-accent m-auto justify-end" type="submit" />
      </div>
      <ToastContainer autoClose={2000} />
      
      
      

    </form>
  )
}