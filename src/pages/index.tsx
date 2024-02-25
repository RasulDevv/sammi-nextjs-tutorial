import { Box } from "@mui/material"
import { GetServerSideProps } from "next"
import { useEffect } from "react"
import { Content, Hero, Sidebar } from "src/components"
import { BlogsType, LatestBlogsType } from "src/interfaces/blogs.interface"
import { CategoryType } from "src/interfaces/categories.interface"
import Layout from "src/layout/layout"
import { BlogsService } from "src/services/blog.service"

const IndexPage = (props: HomePageProps): JSX.Element => {
  console.log(props);
  useEffect(() => {
    BlogsService.getAllBlogs().then(data => console.log(data))
  }, [])
  return (
    <Layout>
      <Hero blogs={props.blogs.slice(0, 3)} />
      <Box sx={{display: 'flex', gap: '20px', flexDirection: {xs: "column", md: "row"}, padding: '20px'}}>
        <Sidebar latestBlogs={props.latestBlogs} categories={props.categories} />
        <Content blogs={props.blogs} />
      </Box>
    </Layout>
  )
}

export default IndexPage



export const getServerSideProps: GetServerSideProps<HomePageProps> = async() => {
  const blogs = await BlogsService.getAllBlogs(),
        latestBlogs = await BlogsService.getLatestBlog(),
        categories = await  BlogsService.getCategories()
  return {
    props: {
      blogs,
      latestBlogs,
      categories
    }
  }
}

interface HomePageProps {
  blogs: BlogsType[];
  latestBlogs: LatestBlogsType[];
  categories: CategoryType[];
}