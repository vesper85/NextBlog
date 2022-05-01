import Link from 'next/link'
import React from 'react'

const RecentPosts = (props) => {
    const {blogsFrontMatter} = props;
    //console.log(blogsFrontMatter);
  return (
    <>
        <section className="text-white body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-12">
                {/* single component */}

                {/* mapping components */}
                {
                    blogsFrontMatter.map((blog)=>{
                        const {title, description, author, link} = blog;
                        return(
                            <div key={blog.title} className="p-12 md:w-1/2 flex flex-col items-start text-black dark:text-white">
                                <h2 className="sm:text-3xl text-2xl title-font font-medium text-black dark:text-white mt-4 mb-4">{title}</h2>
                                <p className="leading-relaxed mb-8"> {description} </p>
                                <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                                    <Link href={`/blog/${link}`}>
                                <a className="text-color-primary inline-flex items-center">Learn More
                                    <svg className="w-4 h-4 ml-2 mt-1" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                    </Link>
                                <span className="text-black dark:text-white mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                    </svg>1.2K
                                </span>
                                <span className="text-black dark:text-white inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>6
                                </span>
                                </div>
                                <a className="inline-flex items-center">
                                
                                <span className="flex-grow flex flex-col">
                                    <span className="title-font font-medium text-black dark:text-white"> {author} </span>
                                    
                                </span>
                                </a>
                            </div>
                        )
                    })
                }


                
{/* component end */}
            </div>
        </div>
        </section>
    </>
  )
}

export default RecentPosts



//<div className="p-12 md:w-1/2 flex flex-col items-start">
//                    {/*<span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">CATEGORY</span>*/}
//                    <h2 className="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">Roof party normcore before they sold out, cornhole vape</h2>
//                    <p className="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambra, slow-carb etsy tumeric. Cray pug you probably heard of them hexagon kickstarter craft beer pork chic.</p>
//                    <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
//                        <Link href="/">
//                    <a className="text-color-primary inline-flex items-center">Learn More
//                        <svg className="w-4 h-4 ml-2 mt-1" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
//                        <path d="M5 12h14"></path>
//                        <path d="M12 5l7 7-7 7"></path>
//                        </svg>
//                    </a>
//                        </Link>
//                    <span className="text-white mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
//                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
//                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                        <circle cx="12" cy="12" r="3"></circle>
//                        </svg>1.2K
//                    </span>
//                    <span className="text-white inline-flex items-center leading-none text-sm">
//                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
//                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//                        </svg>6
//                    </span>
//                    </div>
//                    <a className="inline-flex items-center">
//                    {/*<img alt="blog" src="https://dummyimage.com/104x104" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">*/}
//                    <span className="flex-grow flex flex-col pl-4">
//                        <span className="title-font font-medium text-white">Holden Caulfield</span>
//                        {/*<span className="text-white text-xs tracking-widest mt-0.5">UI DEVELOPER</span>*/}
//                    </span>
//                    </a>
//                </div>