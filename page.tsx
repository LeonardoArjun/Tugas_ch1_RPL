import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* NavBar */}
      <nav className=" ">
        <div className="   px-10 md:container   flex items-center bg-center py-5 w-full bg-[#7B4019]  h-18 ">
          <img className="w-18 " src="/img/KGT1 Logo.png" alt="" />
          <div className="flex justify-center flex-1 ml-20  space-x-5 font-bold">
            <a className=" hover:text-[#FFBF78] duration-200 " href="">
              Home
            </a>
            <a className=" hover:text-[#FFBF78] duration-200 " href="">
              Pages
            </a>
            <a className=" hover:text-[#FFBF78] duration-200 " href="">
              Blog
            </a>
            <a className=" hover:text-[#FFBF78] duration-200 " href="">
              Portofolio
            </a>
            <a className=" hover:text-[#FFBF78] duration-200 " href="">
              Gallery
            </a>
            <a className=" hover:text-[#FFBF78] duration-200 " href="">
              Contacts
            </a>
          </div>
          <div className="md:flex lg:flex-1 md:flex-row justify-end md:gap-5 hidden">
            <a href="">
              <img className="w-4" src="/img/github.png" alt="" />
            </a>
            <a href="">
              <img className="w-4" src="/img/X.png" alt="" />
            </a>
            <a href="">
              <img className="w-4" src="/img/instagram.png" alt="" />
            </a>
            <a href="">
              <img className="w-4" src="/img/facebook.png" alt="" />
            </a>
          </div>
          <img className="lg:ml-8 ml-3 w-7" src="/img/Search.png" alt="" />
          <button className="  hidden   lg:inline   ml-8  py-2 px-4 text-sm bg-black text-white rounded">
            Contact Me
          </button>
        </div>
      </nav>
      {/* Top content */}
      <section>
        <div className="h-[768] w-full bg-no-repeat  md:bg-[url('/img/bg1.png')] bg-[url('/img/Mb/4.png')]  flex justify-center align-middle items-center">
          <div className=" md:mr-60  md:mb-40 mt-40 md:mt-0 w-[600]  flex flex-col justify-center items-center md:block  ">
            <h1 className="md:text-4xl text-3xl  rounded-bl-2xl rounded-tr-2xl text-[#e9d9c2] md:text-black  font-bold  mb-3">
              HALO! Saya Arjuna -
            </h1>
            <h1 className="md:text-4xl text-3xl font-bold mb-3 text-[#FF9B00]">
              FRONT-END DEVELOPER
            </h1>
            <p className="hidden md:block text-sm w-120  md:text-gray-500 mb-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis laboriosam voluptatibus incidunt corporis sapiente
              aperiam.
            </p>
            <div className="flex gap-43 font-bold mb-1 text-[#f41e0e] md:text-black">
              <h3>Email:</h3>
              <h3>Behance:</h3>
            </div>
            <div className="flex gap-18 text-sm md:text-gray-500  ">
              <h3>Ikaniwak69@gmail.com</h3>
              <h3>Behance.net/nimbus3000</h3>
            </div>
            <div className="pt-10 flex  gap-5">
              <button className="py-2 px-4 text-sm bg-[#ef5b00] hover:bg-[#f41e0e] text-white rounded font-semibold">
                Download CV
              </button>
              <button className="py-2 px-4 text-sm bg-[#f41e0e] text-white rounded font-semibold hover:bg-[#ef5b00] duration-200 ">
                Hire Me Now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Mid content */}
      <section className=" ">
        <div className="container h-[768] w-full bg-no-repeat flex justify-center  items-center bg-[url('/img/Mb/5.png')] bg-center  md:bg-[url('/img/bg2.png')] relative">
          <div className="container   mx-auto w-full max-w-md md:max-w-7xl  md:h-22 h-56 flex flex-col items-center md:items-stretch md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8 align-middle absolute -top-10 left-40  ">
            <div className=" bg-white shadow-[1px_1px_3px] flex w-72 h-20 md:h-full md:w-3/12 justify-center items-center align-middle space-x-2 md:space-x-5 rounded-2xl">
              <div className="w-8 h-8 bg-[#FF7D29] rounded-full flex items-center align-middle justify-center">
                <img className=" w-5  " src="/img/check.png" alt="" />
              </div>
              <div className="flex flex-col justify-center  align-middle">
                <h1 className=" font-bold">FRONT-END DEVELOPER</h1>
                <p className="text-gray-500 text-5">You blink, it's done!</p>
              </div>
              <img className="w-5 h-5" src="/img/greater.png" alt="" />
            </div>
            <div className=" bg-white shadow-[1px_1px_3px] flex w-72 h-20 md:h-full md:w-3/12 justify-center items-center align-middle space-x-5 rounded-2xl">
              <div className="w-8 h-8 bg-[#FF7D29] rounded-full flex items-center align-middle justify-center">
                <img className=" w-5  " src="/img/check.png" alt="" />
              </div>
              <div className="flex flex-col justify-center  align-middle">
                <h1 className=" font-bold">Illustrator</h1>
                <p className="text-gray-500 text-5">Art is Magic!</p>
              </div>
              <img className="w-5 h-5" src="/img/greater.png" alt="" />
            </div>
            <div className=" bg-white shadow-[1px_1px_3px] flex w-72 h-20 md:h-full md:w-3/12 justify-center items-center align-middle space-x-5 rounded-2xl">
              <div className="w-8 h-8 bg-[#FF7D29] rounded-full flex items-center align-middle justify-center">
                <img className=" w-5  " src="/img/check.png" alt="" />
              </div>
              <div className="flex flex-col justify-center  align-middle">
                <h1 className=" font-bold">Freelancer</h1>
                <p className="text-gray-500 text-5">Take a look</p>
              </div>

              <img className="w-5 h-5" src="/img/greater.png" alt=" " />
            </div>
          </div>
          <div className=" flex   justify-center items-center relative  w-full max-w-2xl mx-auto text-center md:text-start ml-35 md:ml-150">
            <p className="transform rotate-270 absolute -left-15 md:left-5 top-1/2 -translate-y-1/2 md:text-gray-500 text-sm">
              {" "}
              ───── about me
            </p>
            <div className="w-120 ">
              <h1 className="font-bold text-3xl">Need to build website?</h1>
              <h1 className="font-bold text-3xl mb-5">I can Help You!</h1>
              <p className="md:text-gray-500 text-sm mb-2 max-w-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                quod. Maxime assumenda deleniti, sint omnis sunt sequi ex eius,
                laboriosam nesciunt, natus amet delectus facere labore voluptas
                rerum quaerat quidem.
              </p>
              <h1 className="font-bold mb-1">You Can Follow Me Here:</h1>
              <div className="flex justify-center md:justify-start ">
                <div className="flex justify-center  items-center w-8 h-8 rounded bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] ">
                  <img className="w-5 h-5" src="/img/instagram.png" alt="" />
                </div>

                <h1 className="w-fit h-8 flex justify-center items-center  pr-5 text-[#DD2A7B] font-bold ml-1 ">
                  Instagram
                </h1>

                <div className="flex justify-center  items-center w-8 h-8 border  rounded">
                  <img className="h-5 w-5" src="/img/twitter.png" alt="" />
                </div>
                <h1 className="w-fit h-8 flex justify-center items-center pr-5 ml-1">
                  Twitter
                </h1>
                <div className="flex justify-center  items-center w-8 h-8 border rounded ">
                  <img className="w-6 h-6" src="/img/github.png" alt="" />
                </div>
                <h1 className="w-fit h-8 flex justify-center items-center ml-1 ">
                  GitHub
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bottom content */}
      <footer>
        <div className=" relative container h-[768] w-full bg-no-repeat bg-center  bg-[url('/img/Mb/6.png')] md:bg-[url('/img/bg4.png')] ">
          <div className="container    w-200 h-180  flex mx-auto flex-col gap-y-7 md:gap-y-0 md:flex-row justify-center items-center align-middle md:gap-x-8">
            <div className="absolute  top-2/6 -translate-y-1/2 left-65  hidden md:block">
              <p className="transform -rotate-90 origin-bottom-right text-gray-500 text-sm tracking-widest">
                ───── my skill
              </p>
            </div>
            <div className="flex flex-col  gap-3">
              <h1 className="font-bold text-2xl w-80">
                What My Programming Skills Included
              </h1>
              <p className="text-sm text-gray-500 w-80  ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
                deleniti? Dolor facere quod explicabo! Vitae voluptatum hic
                delectus ea, minus,
              </p>
              <div className="flex -mb-2">
                <h2 className="flex flex-1 text-sm font-medium ">CSS</h2>
                <h2 className="text-sm font-medium ">80%</h2>
              </div>
              <div className="flex items-center w-80 h-[2] bg-gray-200 rounded">
                <div className="bg-amber-300 rounded w-65 h-[4]"></div>
              </div>
              <div className="flex -mb-2">
                <h2 className="flex flex-1 text-sm font-medium ">
                  Tailwind CSS
                </h2>
                <h2 className="text-sm font-medium ">75%</h2>
              </div>
              <div className="flex items-center w-80 h-[2] bg-gray-200 rounded">
                <div className="bg-amber-300 rounded w-60 h-[4]"></div>
              </div>
              <div className="flex -mb-2">
                <h2 className="flex flex-1 text-sm font-medium ">Javascript</h2>
                <h2 className="text-sm font-medium ">10%</h2>
              </div>
              <div className="flex items-center w-80 h-[2] bg-gray-200 rounded">
                <div className="bg-amber-300 rounded w-5 h-[4]"></div>
              </div>
            </div>

            {/* 4 block */}
            <div className=" grid grid-cols-2  gap-x-16  gap-y-5  ">
              <div className=" flex flex-col justify-center items-center w-40 h-40 rounded-2xl shadow-2xl  ">
                <div className="rounded-full bg-black w-16 h-16   flex justify-center items-center">
                  <img
                    className="w-8 h-8 z-50  "
                    src="/img/coding.png"
                    alt=""
                  />
                </div>
                <h1 className="font-bold pt-2">Programming</h1>
              </div>
              <div className=" flex flex-col justify-center items-center w-40 h-40 rounded-2xl shadow-2xl mt-4 ">
                <div className="rounded-full bg-black w-16 h-16   flex justify-center items-center">
                  <img
                    className="w-8 h-8 z-50  "
                    src="/img/design.png"
                    alt=""
                  />
                </div>
                <h1 className="font-bold pt-2">UI/UX Design</h1>
              </div>
              <div className=" flex flex-col justify-center items-center w-40 h-40 rounded-2xl shadow-2xl  ">
                <div className="rounded-full bg-black w-16 h-16   flex justify-center items-center">
                  <img
                    className="w-8 h-8 z-50  "
                    src="/img/graphic.png"
                    alt=""
                  />
                </div>
                <h1 className="font-bold pt-2">Illustrator</h1>
              </div>
              <div className=" flex flex-col justify-center items-center w-40 h-40 rounded-2xl shadow-2xl mt-4  ">
                <div className="rounded-full bg-black w-16 h-16   flex justify-center items-center">
                  <img
                    className="w-8 h-8 z-50  "
                    src="/img/modeling.png"
                    alt=""
                  />
                </div>
                <h1 className="font-bold pt-2">3D Model</h1>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
