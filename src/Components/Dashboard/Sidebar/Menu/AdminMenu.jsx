import { FaUserCog } from 'react-icons/fa'
import { MdAddHomeWork } from "react-icons/md";
import MenuItem from './MenuItem'

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={MdAddHomeWork } label='Add Package' address='add-package' />
      <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
    </>
  )
}

export default AdminMenu
