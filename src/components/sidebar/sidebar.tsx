import { Avatar, Box, Button, Divider, Typography } from "@mui/material"
import { Fragment } from "react"
import { navItems } from "src/config/constants"
import { data } from "../hero/hero"
import Image from "next/image"
import { format } from "date-fns"
import { SidebarProps } from "./sidebar.props"
import { useRouter } from "next/router"

const Sidebar = ({latestBlogs, categories}: SidebarProps): JSX.Element => {
    const router = useRouter()
  return (
    <Box width={{xs: "100%", md: "30%"}}>
      <Box position={"sticky"} top={"100px"} sx={{transition: 'all .3s ease'}}>
        <Box padding={'20px'} border={'1px solid gray'} borderRadius={'8px'} boxShadow={'0 10px 16px rgba(0,0,0,.6)'}>
            <Typography variant="h5">Category</Typography>
            <Box sx={{display: 'flex', flexDirection: 'column', marginTop: '20px'}}>
                {categories.map(nav => (
                    <Fragment key={nav.slug}>
                        <Button onClick={() => router.push(`/category/${nav.slug}`)} sx={{justifyContent: 'flex-start'}}>{nav.label}</Button>
                        <Divider />
                    </Fragment>
                ))}
            </Box>
        </Box>
        <Box padding={'20px'} border={'1px solid gray'} borderRadius={'8px'} marginTop={'20px'} boxShadow={'0 10px 16px rgba(0,0,0,.6)'}>
            <Typography variant="h5">Latest blog</Typography>
            <Box sx={{display: 'flex', flexDirection: 'column', marginTop: '20px'}}>
                {latestBlogs.map(item => (
                    <Box onClick={() => router.push(`/blog/${item.slug}`)} sx={{cursor: 'pointer'}} key={item.id} marginTop={'20px'}>
                        <Box sx={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                            <Image src={item.image.url} alt={item.title} width={100} height={100} style={{objectFit: "cover", borderRadius: '8px'}} />
                            <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                                <Typography variant="body1">{item.title}</Typography>
                                <Box sx={{display: 'flex', gap: '10px'}}>
                                    <Avatar alt={item.author.name} src={item.author.avatar.url} />
                                    <Box>
                                        <Typography variant="body2">{item.author.name}</Typography>
                                        <Box sx={{opacity: '.6'}}>{format(new Date(item.createdAt), "dd MMM, yyyy")}</Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Divider sx={{marginTop: '20px'}} />
                    </Box>
                ))}
            </Box>
        </Box>
      </Box>
      
    </Box>
  )
}

export default Sidebar
