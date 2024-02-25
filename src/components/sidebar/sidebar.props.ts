import { BlogsType, LatestBlogsType } from "src/interfaces/blogs.interface";
import { CategoryType } from "src/interfaces/categories.interface";

export interface SidebarProps {
    latestBlogs: LatestBlogsType[];
    categories: CategoryType[];
}