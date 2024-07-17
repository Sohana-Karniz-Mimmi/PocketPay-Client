import { FaRegHeart } from "react-icons/fa";
import MenuItem from './MenuItem.jsx'
const NormalUser = () => {

 
  return (
    <>
      
      <MenuItem
        icon={FaRegHeart}
        label='Send Money'
        address='wishlist'
      />
      <MenuItem
        icon={FaRegHeart}
        label='Cash-Out'
        address='wishlist'
      />
      <MenuItem
        icon={FaRegHeart}
        label='Cash-in'
        address='wishlist'
      />

      {/* {role === 'normal_user' && (
        <div
          onClick={() => setIsModalOpen(true)}
          className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'
        >
          <GrUserAdmin className='w-5 h-5' />

          <span className='mx-4 font-medium'>Become A Host</span>
        </div>
      )} */}

      
    </>
  )
}

export default NormalUser
