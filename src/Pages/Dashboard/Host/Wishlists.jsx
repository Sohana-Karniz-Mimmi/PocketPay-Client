import { Helmet } from 'react-helmet-async'
import { useMutation } from '@tanstack/react-query'
import WishlistDataRows from '../../../Components/Dashboard/TableRows/WishlistDataRows'
import toast from 'react-hot-toast'
import useAuth from '../../../Hook/useAuth'
import useAxiosSecure from '../../../Hook/useAxiosSecure'
import { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import LoadingSpinner from '../../../Components/Shared/LoadingSpinner'
import useRole from '../../../Hook/useRole'
const Wishlists = () => {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()
  // eslint-disable-next-line no-unused-vars
  const [role, isLoading] = useRole()
  //   Fetch Wishlist Data
  // eslint-disable-next-line no-unused-vars
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [count, setCount] = useState(0)
  const [wishlists, setWishlists] = useState([])


  // Fetch Wishlist data
  const fetchWishlists = async () => {
    if (user?.email) {
      const { data } = await axiosSecure(`/wishlist/${user?.email}?page=${currentPage}&size=${itemsPerPage}`);
      setWishlists(data);
    }
  };

  // Fetch Wishlist count
  const fetchWishlistsCount = async () => {
    if (user?.email) {
      const { data } = await axiosSecure(`/wishlist/count/${user?.email}`);
      setCount(data.count);
    }
  };

  useEffect(() => {
    fetchWishlists();
  }, [user?.email, currentPage, itemsPerPage]);

  useEffect(() => {
    fetchWishlistsCount();
  }, [user?.email]);

  //   Fetch users Data
  // useEffect(() => {
  //   axiosSecure(`/wishlist/${user?.email}?page=${currentPage}&size=${itemsPerPage}`)
  //     .then((res) => setWishlists(res.data))
  // }, [currentPage, itemsPerPage])

  // useEffect(() => {
  //   const getCount = async () => {
  //     const { data } = await axios(
  //       `${import.meta.env.VITE_API_URL}/wishlist/count/${user?.email}`
  //     )import useRole from './../../../Hook/useRole';


  //     setCount(data.count)
  //   }
  //   getCount()
  // }, [])

  const numberOfPages = Math.ceil(count / itemsPerPage)
  const pages = [...Array(numberOfPages).keys()].map(element => element + 1)
  console.log(pages);

  //  handle pagination button
  const handlePaginationButton = value => {
    console.log(value)
    setCurrentPage(value)
  }


  // const {
  //   data: wishlists = [],
  //   isLoading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ['wishlists', user?.email],
  //   queryFn: async () => {
  //     const { data } = await axiosSecure.get(`/wishlist/${user?.email}`)

  //     return data
  //   },
  // })

  // console.log(wishlists);

  //   delete
  const { mutateAsync } = useMutation({
    mutationFn: async id => {
      const { data } = await axiosSecure.delete(`/wishlist/${id}`)
      return data
    },
    onSuccess: async data => {
      console.log(data)
      // refetch()
      await fetchWishlists();
      toast.success('Successfully deleted.')
    },
  })

  //  Handle Delete
  const handleDelete = async id => {
    console.log(id)
    try {
      await mutateAsync(id)
    } catch (err) {
      console.log(err)
    }
  }
  if (isLoading) return <LoadingSpinner />
  return (
    <>
      <Helmet>
        <title>Wishlists || Travel-Guide</title>
      </Helmet>

      <div className='container mx-auto px-4 sm:px-8'>
        <div className='flex items-center pt-8 gap-x-3'>
          <h2 className='text-lg font-medium text-gray-800 '>My Wishlist</h2>
        </div>

        <div className='pb-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Photo
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Package Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Price
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Delete
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Room row data */}

                  {wishlists.map(wishlist => (
                    <WishlistDataRows
                      key={wishlist._id}
                      wishlist={wishlist}
                      handleDelete={handleDelete}
                    // refetch={refetch}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pagination Section */}
        <div className='flex justify-center mt-12'>
          {/* Previous Button */}
          <button
            disabled={currentPage === 1}
            onClick={() => handlePaginationButton(currentPage - 1)}
            className='px-4 py-2 mx-1 text-white disabled:text-gray-500 capitalize bg-[#FD4C5C] rounded-full disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:bg-gray-200 disabled:hover:text-gray-500 hover:bg-[#FF0143] hover:text-white'
          >
            <div className='flex items-center -mx-1'>
              <IoIosArrowBack />
            </div>
          </button>
          {/* Numbers */}
          {pages.map(btnNum => (
            <button
              onClick={() => handlePaginationButton(btnNum)}
              key={btnNum}
              className={`hidden ${currentPage === btnNum ? 'bg-[#FD4C5C] text-white' : ''
                } px-4 py-2 mx-1 transition-colors duration-300 transform border rounded-full sm:inline hover:bg-[#FF0143]  hover:text-white`}
            >
              {btnNum}
            </button>
          ))}
          {/* Next Button */}
          <button
            disabled={currentPage === numberOfPages}
            onClick={() => handlePaginationButton(currentPage + 1)}
            className='px-4 py-2 mx-1 text-white transition-colors duration-300 transform bg-[#FD4C5C] rounded-full hover:bg-[#FF0143] disabled:hover:bg-gray-200 disabled:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'
          >
            <div className='flex items-center -mx-1'>
              <IoIosArrowForward />
            </div>
          </button>
        </div>

      </div>
    </>
  )
}

export default Wishlists
