import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { useState } from 'react';
import DeleteModal from '../../Modal/DeleteModal'

const MyBookingsRows = ({ booking, handleDelete }) => {

      // for delete modal
  const [isOpen, setIsOpen] = useState(false)
  // const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const closeModal = () => {
    setIsOpen(false)
  }
    
    return (
            <tr>
                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                    {booking.tour_type}
                </td>
                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                    {booking.guideName}
                </td>

                {/* Deadline */}
                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                    {format(booking.tourDate, 'dd-MM-yyyy')}
                </td>

                {/* Price */}
                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                    ${booking.price}
                </td>

                {/* Dynamic category */}
                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                    <div className='flex items-center gap-x-2'>
                        <p
                            className={`px-3 py-1 rounded-full text-xs ${booking.status === 'In Review' && 'text-blue-500 bg-blue-100/60'} ${booking.status === 'Rejected' && 'text-red-500 bg-pink-100/60'} ${booking.status === 'Accepted' && 'text-emerald-500 bg-emerald-100/60'} ${booking.status === 'Hybrid' && 'text-violet-500 bg-violet-100/60'}
                                                    `}
                        >
                            {booking.status}
                        </p>
                    </div>
                </td>

                {/* Calcel Button */}
                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                    <button
                        title="Cancel"
                        onClick={() => setIsOpen(true)}
                        className="px-3 py-1 rounded-full text-xs text-red-500 bg-pink-100/60"
                        disabled={booking.status === 'Accepted'}
                    >
                        Cancel
                    </button>
                    {/* Delete Modal */}
                    <DeleteModal
                        handleDelete={handleDelete}
                        closeModal={closeModal}
                        isOpen={isOpen}
                        id={booking?._id}
                    />
                </td>
                {/* Pay Button */}
                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                    <button title="Pay Now" className="text-purple-500 bg-purple-100/60 px-3 py-1 rounded-full text-xs"
                        disabled={booking.status === 'In Review'}
                    >
                        Pay Now
                    </button>
                </td>
            </tr>
    );
};

MyBookingsRows.propTypes = {
    booking: PropTypes.object,
    handleDelete: PropTypes.func,
};

export default MyBookingsRows;