import Image from "next/image"; 

const SmallImage = ({path, alt} : any) => {
   return ( 
   <Image
        src={path}
        width={90}
        height={90}
        alt={alt}
    />  )
}

export default SmallImage;