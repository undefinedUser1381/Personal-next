export default function ContactRightSide() {
  return (
    <div className="w-full lg:w-[48%] h-[95%] flex flex-col gap-6">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="">Name</label>
        <input className="contact-input" type="text" placeholder="Write name"/>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="">Email</label>
        <input className="contact-input" type="text" placeholder="Write email"/>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="">Subject</label>
        <input className="contact-input" type="text" placeholder="Write subject"/>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="">Message</label>
        <textarea className="contact-input" placeholder="Send me message here now"/>
      </div>
      <button className="dark:bg-primaryDark dark:text-black text-white rounded-lg hover:opacity-70 transition-all duration-300 cursor-pointer bg-primaryLight py-2">Send me now !</button>
    </div>
  )
}
