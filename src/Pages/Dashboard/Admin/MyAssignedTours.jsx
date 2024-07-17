import { useEffect, useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
// import LoadingSpinner from "../../../Components/Shared/LoadingSpinner";
import useGuideName from "../../../Hook/useGuideName";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { format } from 'date-fns';


const MyAssignedTours = () => {


  const axiosSecure = useAxiosSecure()
  const [guideName] = useGuideName()
  // console.log(guideName.name);
  const QueryClient = useQueryClient()

  // eslint-disable-next-line no-unused-vars
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [count, setCount] = useState(0)
  // const [filter, setFilter] = useState('')
  // const [search, setSearch] = useState('')
  const [assignedTours, setAssignedTours] = useState([])
  // console.log(search)


  //   Fetch users Data
  useEffect(() => {
    axiosSecure(`/manage-bookings/${guideName?.name}?page=${currentPage}&size=${itemsPerPage}`)
      .then((res) => setAssignedTours(res.data))
  }, [assignedTours, currentPage, itemsPerPage])

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/bookings/count/${guideName?.name}`
      )

      setCount(data.count)
    }
    getCount()
  }, [guideName?.name])

  const numberOfPages = Math.ceil(count / itemsPerPage)
  const pages = [...Array(numberOfPages).keys()].map(element => element + 1)
  // console.log(pages);

  //  handle pagination button
  const handlePaginationButton = value => {
    console.log(value)
    setCurrentPage(value)
  }



  // Tanstack Query
  // const { data: assignedTours = [], isLoading } = useQuery({
  //   queryKey: ['assignedTours', user?.email],
  //   enabled: !!guideName?.name,
  //   queryFn: () => getData(),
  // })
  // console.log(assignedTours, isLoading);

  // const getData = async () => {
  //   // const { data } = await axios(`${import.meta.env.VITE_API_URL}/my-bookings/${user?.email}`)
  //   const { data } = await axios(`${import.meta.env.VITE_API_URL}/manage-bookings/${guideName.name}`)
  //   return data;
  // }


  const { mutateAsync } = useMutation({
    mutationFn: async ({ id, status }) => {
      const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/booking/update/${id}`, { status })
      console.log(data)
      return data
    },
    onSuccess: () => {
      console.log('Wow, data updated')
      toast.success('Updated')
      // refresh ui for latest data
      // refetch()

      // Kothin
      QueryClient.invalidateQueries({ queryKey: ['assignedTours'] })
    },
  })


  // Handle Status
  const handleStatus = async (id, prevStatus, status) => {
    if (prevStatus === status) return console.log('Sry vai.. hobena')
    await mutateAsync({ id, status })
    console.log(id, prevStatus, status);

    // getData();
  }

  // console.log(assignedTours);

  // if (isLoading) return <LoadingSpinner />
  return (
    <section className='container px-4 mx-auto pt-12'>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium text-gray-800 '>My Assigned Tours</h2>
      </div>

      <div className='flex flex-col mt-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Package Name</span>
                      </div>
                    </th>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Tourist Name</span>
                      </div>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <span>Tour Date</span>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <button className='flex items-center gap-x-2'>
                        <span>Tour Price</span>
                      </button>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      Status
                    </th>

                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200 '>
                  {
                    assignedTours?.map(assignedTour => <tr key={assignedTour._id}>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {assignedTour.tour_type}
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {assignedTour.touristName}
                      </td>

                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {format(assignedTour.tourDate, 'dd-MM-yyyy')}
                      </td>

                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        ${assignedTour.price}
                      </td>
                      <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                        <div
                          className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 
                            
                            ${assignedTour.status === 'In Review' &&
                            'bg-blue-100/60 text-blue-500'
                            } 
                            ${assignedTour.status === 'Accepted' &&
                            'bg-emerald-100/60 text-emerald-500'
                            } 
                            ${assignedTour.status === 'Rejected' &&
                            'bg-red-100/60 text-red-500'
                            } `}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${assignedTour.status === 'Pending' && 'bg-yellow-500'
                              } ${assignedTour.status === 'In Review' && 'bg-blue-500'
                              } ${assignedTour.status === 'Accepted' && 'bg-green-500'} ${assignedTour.status === 'Rejected' && 'bg-red-500'
                              }  `}
                          ></span>
                          <h2 className='text-sm font-normal '>{assignedTour.status}</h2>
                        </div>
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-6'>
                          {/* Accept Button: In Review */}
                          <button title="Accept"
                            onClick={() =>
                              handleStatus(assignedTour._id, assignedTour.status, 'Accepted')
                            }
                            disabled={assignedTour.status === 'Accepted'} className='text-gray-500 transition-colors duration-200   hover:text-green-500 focus:outline-none'>
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

                          {/* Reject Button */}
                          <button title="Reject"
                            onClick={() =>
                              handleStatus(assignedTour._id, assignedTour.status, 'Rejected')}
                            disabled={assignedTour.status === 'Accepted'}
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
                        </div>
                      </td>
                    </tr>)
                  }
                </tbody>
              </table>
            </div>
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

    </section>
  )
}

export default MyAssignedTours
