import React from 'react'
import { Copy, Code, Heart,ScreenShare,Settings,ClipboardEdit,Wallet } from 'lucide-react'

export default function Features() {
  return (
    <>
     <section className='mt-20'>
      <div className="mx-auto max-w-7xl px-2 lg:px-8">
        <div className="mb-4 max-w-lg">
       
          <h2 className="mt-6 text-3xl font-bold leading-tight themecolor">
            CreativaUI makes it easy to build beautiful websites
          </h2>
        </div>
        <hr />
        <div className="mt-10 grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start">
            <ClipboardEdit className="w-20 h-10 themecolor" />
            <div className="ml-5">
              <h3 className="text-xl font-semibold text-black">Customizable</h3>
              <p className="mt-3 text-base text-gray-600">
              CreativaUI components are designed to be highly customizable and extendable. You can easily change the styles of the components to match your brand or product.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <ScreenShare className="w-20 h-10 themecolor" />
            <div className="ml-5">
              <h3 className="text-xl font-semibold text-black">Responsive Design</h3>
              <p className="mt-3 text-base text-gray-600">
              All of the components are designed with responsiveness in mind, so you can be confident that your interfaces will look great on any device.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <Settings className="w-20 h-10 themecolor" />
            <div className="ml-5">
              <h3 className="text-xl font-semibold text-black">Easy integration</h3>
              <p className="mt-3 text-base text-gray-600">
              DevUI is designed to integrate seamlessly with your existing projects, allowing you to get up and running quickly.
              </p>
            </div>
          </div>
          <div className="flex items-start">
          <Copy className="w-20 h-10 themecolor" />
            <div className="ml-5">
              <h3 className="text-xl font-semibold text-black">Copy to clipboard</h3>
              <p className="mt-3 text-base text-gray-600">
              With CreativaUI, you can easily copy the code for any component directly to your clipboard, saving you time and effort.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <Code className="w-20 h-10 themecolor" />
            <div className="ml-5">
              <h3 className="text-xl font-semibold text-black">Constantly updated</h3>
              <p className="mt-3 text-base text-gray-600">
              CreativaUI is constantly updated by a community of developers, meaning that you can rely on the library to stay up-to-date with the latest design trends and best practices.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <Wallet className="w-20 h-10 themecolor" />
            <div className="ml-5">
              <h3 className="text-xl font-semibold text-black">Free and open-source</h3>
              <p className="mt-3 text-base text-gray-600">
              CreativaUI is free to use, and its open-source nature means that you can contribute to the library and help make it even better.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr />
    </>
   
    
  )
}
