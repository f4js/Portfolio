import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="box">

        <div className="mdl">
          <div className="circles">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
          </div>
          <div className="circles2">
            <div className="circle2 circle2-1"></div>
            <div className="circle2 circle2-2"></div>
          </div>
          <div className="circles3">
            <div className="circle3 circle3-1"></div>
            <div className="circle3 circle3-2"></div>
          </div>
          <div className="flex flex-col items-center mt-32 gap-4">
            <div className="card lg:w-[81vw] md:w-[91vw] w-[90vw]">
              <Image className="rounded-[50%] w-[200px] h-[200px]" src={'/profile.jpg'} height={500} width={500} alt="profile" />
            </div>
            <div className="flex md:flex-row flex-col justify-center items-center gap-4">
              <div className="card lg:w-[50vw] md:w-[55vw] w-[90vw] lg:h-[31vw] md:h-[51vw] h-[90vw]"></div>
              <div className="flex flex-col gap-4">
                <div className="card lg:w-[30vw] md:w-[35vw] w-[90vw] lg:h-[15vw] md:h-[24vw] h-[45vw]"></div>
                <div className="card lg:w-[30vw] md:w-[35vw] w-[90vw] lg:h-[15vw] md:h-[24vw] h-[45vw]"></div>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-11 lg:w-[81vw] md:w-[91vw] w-[90vw] mt-8">
              <div className="card grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-4">
                <div className="card">01</div>
                <div className="card">09</div>
                <div className="card">01</div>
                <div className="card">09</div>
                <div className="card">01</div>
                <div className="card">01</div>
                <div className="card">09</div>
                <div className="card">01</div>
                <div className="card">09</div>
                <div className="card">01</div>
                <div className="card">01</div>
                <div className="card">09</div>
                <div className="card">09</div>
              </div>
              <div className="card grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-4">
                <div className="card">01</div>
                <div className="card">09</div>
                <div className="card">01</div>
                <div className="card">09</div>
                <div className="card">01</div>
                <div className="card">01</div>
                <div className="card">09</div>
                <div className="card">01</div>
                <div className="card">09</div>
                <div className="card">01</div>
                <div className="card">01</div>
                <div className="card">09</div>
                <div className="card">09</div>
              </div>
              <div className="card grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-4">
                <div className="card">01</div>
                <div className="card">09</div>
                <div className="card">01</div>
                <div className="card">09</div>
                <div className="card">01</div>
                <div className="card">01</div>
                <div className="card">09</div>
                <div className="card">01</div>
                <div className="card">09</div>
                <div className="card">01</div>
                <div className="card">01</div>
                <div className="card">09</div>
                <div className="card">09</div>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-3xl text-white mx-auto flex justify-center font-bold mb-12">Experinces</h2>
              <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid mb-32">
                  <div className="flex md:contents flex-row-reverse">
                      <div
                          className="relative p-4 my-6 text-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <div className="card">
                              <h3 className="text-lg font-semibold lg:text-xl">New Event 1</h3>
                              <p className="mt-2 leading-6">Description of the first event.</p>
                            </div>
                          <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 1</span>
                      </div>
                      <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                          <div className="flex items-center justify-center w-6 h-full">
                              <div className="w-1 h-full rounded-t-full bg-[#1D976C]">
                              </div>
                          </div>
                          <div className="absolute w-6 h-6 -mt-3 bg-black border-4 border-[#1D976C] rounded-full top-1/2"></div>
                      </div>
                  </div>

                  <div className="flex md:contents">
                      <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                          <div className="flex items-center justify-center w-6 h-full">
                              <div className="w-1 h-full bg-[#1D976C]"></div>
                          </div>
                          <div className="absolute w-6 h-6 -mt-3 bg-black border-4 border-[#1D976C] rounded-full top-1/2"></div>
                      </div>
                      <div className="relative p-4 my-6 text-white rounded-xl col-start-6 col-end-10 mr-auto">
                        <div className="card">
                            <h3 className="text-lg font-semibold lg:text-xl">New Event 2</h3>
                            <p className="mt-2 leading-6">Description of the second event.</p>
                        </div>
                        <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 2</span>
                      </div>
                  </div>
                  <div className="flex md:contents flex-row-reverse">
                      <div
                          className="relative p-4 my-6 text-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <div className="card">
                              <h3 className="text-lg font-semibold lg:text-xl">New Event 1</h3>
                              <p className="mt-2 leading-6">Description of the first event.</p>
                            </div>
                          <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 1</span>
                      </div>
                      <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                          <div className="flex items-center justify-center w-6 h-full">
                              <div className="w-1 h-full rounded-t-full bg-[#1D976C]">
                              </div>
                          </div>
                          <div className="absolute w-6 h-6 -mt-3 bg-black border-4 border-[#1D976C] rounded-full top-1/2"></div>
                      </div>
                  </div>

                  <div className="flex md:contents">
                      <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                          <div className="flex items-center justify-center w-6 h-full">
                              <div className="w-1 h-full bg-[#1D976C]"></div>
                          </div>
                          <div className="absolute w-6 h-6 -mt-3 bg-black border-4 border-[#1D976C] rounded-full top-1/2"></div>
                      </div>
                      <div className="relative p-4 my-6 text-white rounded-xl col-start-6 col-end-10 mr-auto">
                        <div className="card">
                            <h3 className="text-lg font-semibold lg:text-xl">New Event 2</h3>
                            <p className="mt-2 leading-6">Description of the second event.</p>
                        </div>
                        <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 2</span>
                      </div>
                  </div>
                  <div className="flex md:contents flex-row-reverse">
                      <div
                          className="relative p-4 my-6 text-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <div className="card">
                              <h3 className="text-lg font-semibold lg:text-xl">New Event 1</h3>
                              <p className="mt-2 leading-6">Description of the first event.</p>
                            </div>
                          <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 1</span>
                      </div>
                      <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                          <div className="flex items-center justify-center w-6 h-full">
                              <div className="w-1 h-full rounded-t-full bg-[#1D976C]">
                              </div>
                          </div>
                          <div className="absolute w-6 h-6 -mt-3 bg-black border-4 border-[#1D976C] rounded-full top-1/2"></div>
                      </div>
                  </div>

                  <div className="flex md:contents">
                      <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                          <div className="flex items-center justify-center w-6 h-full">
                              <div className="w-1 h-full bg-[#1D976C]"></div>
                          </div>
                          <div className="absolute w-6 h-6 -mt-3 bg-black border-4 border-[#1D976C] rounded-full top-1/2"></div>
                      </div>
                      <div className="relative p-4 my-6 text-white rounded-xl col-start-6 col-end-10 mr-auto">
                        <div className="card">
                            <h3 className="text-lg font-semibold lg:text-xl">New Event 2</h3>
                            <p className="mt-2 leading-6">Description of the second event.</p>
                        </div>
                        <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 2</span>
                      </div>
                  </div>

              </div>
            </div>
            <div className="bg-image w-full min-h-screen flex flex-wrap justify-center items-center gap-3 py-5 -mt-32">
              <div className="card backdrop w-10/12 lg:w-1/4 md:w-1/3 bg-white bg-opacity-10 rounded-3xl p-3 text-white border border-gray-300 shadow-lg">
                <div className="w-full mb-3 pb-3 border-b border-1 border-white">
                  <h3 className="text-xl font-semibold text-shadow">Something Good</h3>
                </div>
                <div>
                  <img src="https://i.postimg.cc/SxLx0fHV/bg01.jpg" alt="image1" className="w-full h-48 object-cover mb-2" />
                  <p className="mb-3 tracking-wide text-base text-shadow">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, omnis.
                  </p>
                  <button className="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
                    Detail
                  </button>
                </div>
              </div>
              <div className="card backdrop w-10/12 lg:w-1/4 md:w-1/3 bg-white bg-opacity-10 rounded-3xl p-3 text-white border border-white shadow-lg">
                <div className="w-full mb-3 pb-3 border-b border-1 border-white">
                  <h3 className="text-xl font-semibold text-shadow">Something Good</h3>
                </div>
                <div>
                  <img src="https://i.postimg.cc/J4khxLqf/bg02.jpg" alt="image2" className="w-full h-48 object-cover mb-2" />
                  <p className="mb-3 tracking-wide text-base text-shadow">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, omnis.
                  </p>
                  <button className="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
                    Detail
                  </button>
                </div>
              </div>
              <div className="card backdrop w-10/12 lg:w-1/4 md:w-1/3 bg-white bg-opacity-10 rounded-3xl p-3 text-white border border-white shadow-lg">
                <div className="w-full mb-3 pb-3 border-b border-1 border-white">
                  <h3 className="text-xl font-semibold text-shadow">Something Good</h3>
                </div>
                <div>
                  <img src="https://i.postimg.cc/VNYLzb8w/bg03.jpg" alt="image3" className="w-full h-48 object-cover mb-2" />
                  <p className="mb-3 tracking-wide text-base text-shadow">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, omnis.
                  </p>
                  <button className="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
                    Detail
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="-mb-64">
              <div className="background flex">
                <div className="shape"></div>
                <div className="shape"></div>
              </div>
              <div className="social"></div>   
            </div>
            <div className="-mb-64">
              <div className="background flex">
                <div className="shape"></div>
                <div className="shape"></div>
              </div>
              <div className="social"></div>   
            </div>
            <div className="-mb-64">
              <div className="background flex">
                <div className="shape"></div>
                <div className="shape"></div>
              </div>
              <div className="social"></div>   
            </div>
            <div className="-mb-64">
              <div className="background flex">
                <div className="shape"></div>
                <div className="shape"></div>
              </div>
              <div className="social"></div>   
            </div>
            <div className="-mb-64">
              <div className="background flex">
                <div className="shape"></div>
                <div className="shape"></div>
              </div>
              <div className="social"></div>   
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
