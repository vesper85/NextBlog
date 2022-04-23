import Image from 'next/image'

const Blog_img = (props) =>{
    const{src} = props;
    return(
        <Image
        src={require(`../posts/images/${src}`)}
        alt="image"
        width={500}
        height={500}
      />
    )
}

export default Blog_img;