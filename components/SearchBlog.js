import {useState} from 'react'


function SearchBlog(props) {
  const {searchedString, setsearchedString, count} = props;
  const handleSearchOnChange = (e)=>{
    setsearchedString(e.target.value)
  }
  return (
    <div className="mt-10">
      <div className="m-4">
      <div className="mb-3 w-100 relative">
        <input
          className="
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            border border-solid border-gray-300
            transition
            ease-in-out
            m-0
            bg-white
            focus:text-gray-700 focus:bg-white focus:border-theme-page-text-heading focus:outline-none
            search:hidden
          "
          id="exampleSearch"
          placeholder="Search Blog"
          onChange={handleSearchOnChange}
  
        />
        <span className="absolute right-3 top-[0.35rem] font-semibold text-color-gray-300">{count} </span>
      </div>
    </div>
    </div>
  )
}

export default SearchBlog