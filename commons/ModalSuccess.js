import React, { Fragment, useState,useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/solid'
const ModalSuccess = (props) => {
  let [isOpen, setIsOpen] = useState(true)
  const [tokenId, setTokenId] = useState(props.tokenId)
  function closeModal() {
    setIsOpen(false)
  }

  const handleRedirect=()=>{
      window.location.href="http://tuanda.near/profile"
  }

  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0  z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all ">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold leading-6 text-gray-900"
                >
                  <div className="flex">
                    {' '}
                    <CheckCircleIcon className="mr-2 h-8 w-8 text-green-400" />
                    <span>Payment domain successful</span>
                  </div>
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Congratulations on your successful domain name purchase.
                  </p>
                </div>

                <div className="mt-4">
              
                  <button
                    type="button"
                    className="focus:outline-none inline-flex w-full justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={handleRedirect}
                  >
                    Visit website
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default ModalSuccess
