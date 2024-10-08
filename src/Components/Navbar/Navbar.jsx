import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "/logo.png"

const navigation = [
  { name: "Fleet", id: "Home" },
  { name: "About Us", id: "About" },
  { name: "Blogs", id: "Education" },
  { name: "Careers", id: "Projects" },
  { name: "Contact Us", id: "Contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 p-3 bg-white text-2xl h-20 font-poppins">
      <nav
        className="container mx-auto px-6 lg:px-8 flex text-left justify-between h-16"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 lg:block py-2">
          <img src={Logo} alt="Logo" className="h-15 w-48" />
        </div>
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 p-2">
          {navigation.map((item) => (
            <div
            key={item.name}
            className="relative cursor-pointer font-normal group"
          >
            <div className="relative">
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-indigo-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </div>
          </div>
          ))}
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <DialogPanel className="fixed inset-0 z-50 overflow-y-auto px-6 py-6 lg:hidden bg-slate-300 w-60">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 px-3">
                {navigation.map((item) => (
                  <div
                    key={item.name}
                    className="-mx-3 cursor-pointer block rounded-lg py-2 px-4 font-normal leading-5"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
