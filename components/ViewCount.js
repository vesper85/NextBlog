import {useEffect, useState} from 'react'
import useSWR from 'swr';


const ViewCount = (props) => {

    const {slug, isblog} = props;
    //const [views, setviews] = useState({
    //  data:-1,
    //  error:null
    //})

    //fetcher function
    const fetcher = async(...args)=>{
      const response = await fetch(...args)
      if (!response.ok) {
        const error = new Error('An error occurred while fetching the data.')
        // Attach extra info to the error object.
        error.info = await response.json()
        error.status = response.status
        throw error
      }
      return response.json();
    }
  
    const {data, error} = useSWR(`/api/blogs/${slug}`, fetcher, { refreshInterval: 1000 });
  

    //  function to increment the view count
    async function incrementViews ()
    {
        //console.log('views incremented');
        const incrementView = await fetch(`/api/blogs/${slug}`,{
            method:'POST'
        })
        //console.log(incrementView);

    }

    useEffect(() => {
      if(isblog)
      {
        incrementViews();
      }
    }, [])
    

  if(error) return<span>error</span>
  if(!data) return <span>...loading</span>
  return <span> {data} views </span>;

}

export default ViewCount