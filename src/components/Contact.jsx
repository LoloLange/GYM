export const Contact = () => {
  return (
    <section className="bg-[#3E8959] py-[50px]">
      <p
        style={{ zIndex: "50" }}
        className="text-[50px] font-[800] text-center text-white"
      >
        CONTACT
      </p>

      <div className="flex flex-col items-center">
      <p className="max-[750px]:mx-[20px] text-[18px] text-white">Reach out if you have any doubts of want to apply for a plan, service or program.</p>

      <form method="get">

        <div className="pt-[25px]">
          <div className="w-[70vw] flex">
            <input type="text" name="name" id="name" placeholder="Name"
              className="border rounded-md p-2 w-[50%] outline-0 shadow-md" required/>
            <input type="text" name="surname" id="surname" placeholder="Surname"
              className="ml-5 border rounded-md p-2 w-[50%] outline-0 shadow-md" required/>
          </div>

          <div className="w-[70vw] flex pt-5">
            <input type="email" name="email" id="email" placeholder="Email"
              className="border rounded-md p-2 w-[100%] outline-0 shadow-md" required/>
          </div>

          <div className="w-[70vw] flex pt-5">
            <textarea name="message" id="message" className="border rounded-md p-2 w-full resize-none h-[200px] outline-0 shadow-md"
              placeholder="Message" required></textarea>
          </div>

          <div>
            <button type="submit" id="submit"
              className="bg-[#3E8959] text-white px-3 py-2 mt-5 w-[70vw] rounded-lg hover:brightness-[0.9] transition-all shadow-lg hover:-translate-y-1">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
</section>
  );
};
