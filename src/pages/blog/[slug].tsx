import { Avatar, Box, Typography } from '@mui/material'
import { format } from 'date-fns'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import React from 'react'
import { Sidebar } from 'src/components'
import { calculateEstimatedTimeToRead } from 'src/helpers/time.format'
import { BlogsType, LatestBlogsType } from 'src/interfaces/blogs.interface'
import { CategoryType } from 'src/interfaces/categories.interface'
import Layout from 'src/layout/layout'
import SEO from 'src/layout/seo/seo'
import { BlogsService } from 'src/services/blog.service'

const DetailedBlogsPage = (props: DetailedBlogsPageProps) => {
    // console.log(props);
    
  return (
    <SEO metaTitle={props.blog.title}>
        <Layout>
            <Box sx={{display: 'flex', gap: '20px', flexDirection: {xs: "column", md: "row"}, padding: '20px'}}>
                <Box width={{xs: "100%", md: "70%"}}>
                    <Box sx={{backgroundColor: 'black', padding: '20px', borderRadius: '8px', boxShadow: "8px 8px 16px rgba(255,255,255,.1)"}} position={"relative"} width={"100%"} height={{xs: '30vh', md: '50vh'}}>
                        <Image src={props.blog.image.url} alt={props.blog.title} fill style={{objectFit: 'cover'}} />
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} rowGap={'20px'}>
                        <Box sx={{display: 'flex', gap: '10px', marginTop: '10px'}}>
                            <Avatar alt={props.blog.author.name} src={props.blog.author.avatar.url} />
                            <Box>
                                <Typography>{props.blog.author.name}</Typography>
                                <Box color={"gray"}>{format(new Date(props.blog.createdAt), "dd MMM, yyyy")} &#x2022; {calculateEstimatedTimeToRead(props.blog.description.text)} min read</Box>
                            </Box>
                        </Box>
                        <Typography variant='h3'>{props.blog.title}</Typography>
                        <Typography color={'gray'}>{props.blog.expert}</Typography>
                        <div style={{opacity: '.8'}} dangerouslySetInnerHTML={{__html: props.blog.description.html}}/>
                    </Box>
                </Box>
                <Sidebar latestBlogs={props.latestBlogs} categories={props.categories} />
            </Box>
        </Layout>
    </SEO>
  )
}

export default DetailedBlogsPage


export const getServerSideProps: GetServerSideProps<DetailedBlogsPageProps> = async ({query}) => {
    const blog = await BlogsService.GetDetailedBlogs(query.slug as string),
          latestBlogs = await BlogsService.getLatestBlog(),
          categories = await  BlogsService.getCategories()
    return {
        props: {
            blog,
            latestBlogs,
            categories
        }
    }
}

interface DetailedBlogsPageProps {
    blog: BlogsType;
    latestBlogs: LatestBlogsType[];
    categories: CategoryType[];
}