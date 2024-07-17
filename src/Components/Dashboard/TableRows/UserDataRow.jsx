import PropTypes from 'prop-types'
// import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import useAxiosSecure from '../../../Hook/useAxiosSecure'
// import UserUpdateModal from '../../Modal/UserUpdateModal'
// import AdminRoleUpdateModal from '../../Modal/AdminRoleUpdateModal'
// import { useAuth } from '../../../AuthProvider/AuthProvider'

const UserDataRow = ({ user, refetch }) => {
  // const { user: loggedInUser } = useAuth()
  const axiosSecure = useAxiosSecure()
 
  const { mutateAsync } = useMutation({
    mutationFn: async role => {
      const { data } = await axiosSecure.patch(`/users/update/${user?.email}`, role)
      return data
    },
    onSuccess: data => {
      refetch()
      console.log(data)
      toast.success('User role updated successfully!')
    },
    onError: error => {
      toast.error(error.message)
    },
  })

  const handleStatus = async (id, prevStatus, status, role) => {
    if (prevStatus === status) return console.log('Sry vai.. hobena')
    // if (loggedInUser.email === user.email) {
    //   toast.error('Action Not Allowed')
    //   return
    // }

    console.log(id, prevStatus, status, role);

    const userStatus = {
      id,
      balance: 40,
      status,
    }

    const agent = {
      id,
      balance: 10000,
      status,
    }

    let checkUser;

    if (role === 'user') {
      checkUser = userStatus;
    } else if (role === 'agent') {
      checkUser = agent;
    }
    else {
      checkUser = null; // or handle unknown roles
    }

    // const checkUser = role.role === 'user' ? userStatus : agent





    try {
      await mutateAsync(checkUser)
    } catch (err) {
      toast.error(err.message)
    }
  }

  // Handle Status
  //  const handleStatus = async (id, prevStatus, status) => {
  //   if (prevStatus === status) return console.log('Sry vai.. hobena')
  //   await mutateAsync({ id, status })
  //   console.log(id, prevStatus, status);

  //   // getData();
  // }

  // for modal state management
  // const [isUserModalOpen, setIsUserModalOpen] = useState(false)
  // const [isAdminModalOpen, setIsAdminModalOpen] = useState(false)

  // const closeModal = () => {
  //   setIsUserModalOpen(false)
  //   setIsAdminModalOpen(false)
  // }

  return (
    <tr>
      {/* <td className='pr-5 pl-10 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{indx + 1}</p>
      </td> */}
      <td className='pr-5 pl-10 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.name}</p>
      </td>
      <td className='pr-5 pl-10 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
      </td>
      <td className='pr-5 pl-10 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
      </td>
      <td className='pr-5 pl-10 py-5 border-b border-gray-200 bg-white text-sm'>
        {/* {user?.status ? (
          <p className={`${user.status === 'Accepted' ? 'text-green-500' : 'text-yellow-500'} whitespace-no-wrap`}>
            {user.status}
          </p>
        ) : (
          <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
        )} */}
        <div
          className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 
                            
                            ${user.status === 'Verified' &&
            'bg-blue-100/60 text-blue-500'
            } 
                            ${user.status === 'Pending' &&
            'bg-yellow-100/60 text-yellow-500'
            } 
                            ${user.status === 'Accepted' &&
            'bg-emerald-100/60 text-emerald-500'
            } 
                            ${user.status === 'Rejected' &&
            'bg-red-100/60 text-red-500'
            } `}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${user.status === 'Pending' && 'bg-yellow-500'
              } ${user.status === 'Verified' && 'bg-blue-500'
              } ${user.status === 'Accepted' && 'bg-green-500'} ${user.status === 'Rejected' && 'bg-red-500'
              }  `}
          ></span>
          <h2 className='text-sm font-normal '>{user.status}</h2>
        </div>
      </td>
      <td className='pr-5 pl-10 py-5 border-b border-gray-200 bg-white text-sm'>
        {/* Accept Button: In Review */}
        <button title="Accept"
          onClick={() =>
            handleStatus(user._id, user.status, 'Accepted', user.role)
          } className='text-gray-500 transition-colors duration-200   hover:text-green-500 focus:outline-none'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-5 h-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m4.5 12.75 6 6 9-13.5'
            />
          </svg>
        </button>
        {/* <AdminRoleUpdateModal
          isOpen={isAdminModalOpen}
          closeModal={closeModal}
          handleRoleChange={() => handleRoleChange('admin')}
        /> */}
        {/* Reject Button */}
        <button title="Reject"
          onClick={() =>
            handleStatus(user._id, user.status, 'Rejected')}
          disabled={user.status === 'Accepted'}
          className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-5 h-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636'
            />
          </svg>
        </button>
        {/* <UserUpdateModal
          isOpen={isUserModalOpen}
          closeModal={closeModal}
          handleRoleChange={() => handleRoleChange('tour_guide')}
        /> */}
      </td>
    </tr>
  )
}

UserDataRow.propTypes = {
  user: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
  indx: PropTypes.node.isRequired,
}

export default UserDataRow
