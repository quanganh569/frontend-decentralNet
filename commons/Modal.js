import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Button from './Button'

function ModalMintNFT(props) {
  //   let [isOpen, setIsOpen] = useState(true)
  const [tokenId, setTokenId] = useState(props.tokenId)
  const [tokenTitle, setTokenTitle] = useState('')
  const [description, setDescription] = useState('')
  const [media, setMedia] = useState('')

  function handleOk() {
    props.handleOk({
      tokenId,
      // tokenTitle,
      // description,
      // media,
    })
  }
  const ISSERVER = typeof window === 'undefined'
  if (!ISSERVER) {
    localStorage.setItem('tokenID', props.tokenId) || null
    console.log(props.tokenId)
  }

  return (
    <Transition appear show={props.visible} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={props.handleCancel}
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
            <div className="my-8 inline-block w-full  max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="py-10 text-lg leading-6 text-gray-900"
              >
                Do you agree to buy <b>{props.tokenId}</b> ?
              </Dialog.Title>

              {/* <div className="py-3">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="username"
                >
                  Token id
                </label>
                <input
                  className="focus:outline-none focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow"
                  id="username"
                  type="text"
                  value={props.tokenId}
                  placeholder="Username"
                    // onChange={(e) => setTokenId(e.target.value)}
                />
              </div> */}
              {/* <div className="py-3">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="username"
                >
                  Title:
                </label>
                <input
                  className="focus:outline-none focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow"
                  id="username"
                  type="text"
                  placeholder="Title"
                  onChange={(e) => setTokenTitle(e.target.value)}
                />
              </div> */}
              {/* <div className="py-3">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="username"
                >
                  Description
                </label>
                <input
                  className="focus:outline-none focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow"
                  id="username"
                  type="text"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="py-3">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="username"
                >
                  Media
                </label>
                <input
                  className="focus:outline-none focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow"
                  id="username"
                  type="text"
                  placeholder="Media"
                  onChange={(e) => setMedia(e.target.value)}
                />
              </div> */}

              <div className="flex  items-center justify-between">
                <Button variant="secondary" onClick={props.handleCancel}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleOk}>
                  Register now
                </Button>
              </div>

              {/* <div className="mt-4">
                <button
                  type="button"
                  className="focus:outline-none inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={props.handleCancel}
                >
                  Got it, thanks!
                </button>
              </div> */}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ModalMintNFT
