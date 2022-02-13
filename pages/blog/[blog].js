
import { useRouter } from "next/router"


export default function ViewBlog(){
    const router = useRouter();
    const {blog} = router.query
    return(
        <div>{blog}...</div>
    )
}