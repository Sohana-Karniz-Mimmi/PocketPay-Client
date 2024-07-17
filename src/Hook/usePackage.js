import useAuth from './useAuth'
import useAxiosCommon from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
const usePackage = () => {
  const { user, loading } = useAuth()
  const axiosCommon = useAxiosCommon()

  const { data: tourPackage = '', isLoading } = useQuery({
    queryKey: ['tourPackage', user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosCommon(`/tour-package`)
      return data
    },
  })

  //   Fetch user info using logged in user email

  return [tourPackage, isLoading]
}

export default usePackage
