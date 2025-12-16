import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
import MenuItem from './MenuItem'
const SellerMenu = () => {
  return (
    <>
      <MenuItem
        icon={BsFillHouseAddFill}
        label='Create Meal'
        address='create-meal'
      />
      <MenuItem icon={MdHomeWork} label='My Meals' address='my-meals' />
      <MenuItem
        icon={MdOutlineManageHistory}
        label='Order Requests'
        address='order-requests'
      />
    </>
  )
}

export default SellerMenu
