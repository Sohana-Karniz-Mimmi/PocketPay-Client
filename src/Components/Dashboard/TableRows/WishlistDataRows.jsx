import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import { format } from 'date-fns'
// import {
//   Description,
//   Dialog,
//   DialogPanel,
//   DialogTitle,
// } from '@headlessui/react'
import DeleteModal from '../../Modal/DeleteModal'
import { useState } from 'react'
// import UpdateRoomModal from '../../Modal/UpdateRoomModal'

// , handleDelete, refetch 
const WishlistDataRows = ({ wishlist, handleDelete }) => {
  // for delete modal
  const [isOpen, setIsOpen] = useState(false)
  // const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const closeModal = () => {
    setIsOpen(false)
  }

  // for update modal
  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={wishlist?.image1}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>{wishlist?.title}</p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{wishlist?.tourists_spot_name}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{wishlist?.tour_type}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${wishlist?.price}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button
          onClick={() => setIsOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-red-500  leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Delete</span>
        </button>
        {/* Delete modal */}
        <DeleteModal
          isOpen={isOpen}
          closeModal={closeModal}
          handleDelete={handleDelete}
          id={wishlist?._id}
        />
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <Link to={`/packages-details/${wishlist?.userId}`}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Details</span>
        </Link>
      </td>
    </tr>
  )
}

WishlistDataRows.propTypes = {
  wishlist: PropTypes.object,
  handleDelete: PropTypes.func,
}

export default WishlistDataRows
