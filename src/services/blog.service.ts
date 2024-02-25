import { gql, request } from "graphql-request"
import { BlogsType, LatestBlogsType } from "src/interfaces/blogs.interface";
import { CategoryType } from "src/interfaces/categories.interface";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const BlogsService = {
    async getAllBlogs() {
        const query = gql`
        query GetBlogs {
            blogs {
                expert
                id
                slug
                title
                updatedAt
                createdAt
                image {
                  url
                }
                author {
                    ... on Author {
                    name
                    avatar {
                      url
                    }
                  }
                }
                category {
                  label
                  slug
                }
                description {
                    text
                }
              }
            }
        `
        const result = await request<{blogs: BlogsType[]}>(graphqlAPI, query)
        return result.blogs
    },

    async getLatestBlog() {
        const query = gql`
        query GetLatestBlogs {
            blogs(last: 2) {
                expert
                id
                slug
                title
                updatedAt
                createdAt
                image {
                  url
                }
                description {
                    text
                }
                author {
                  ... on Author {
                    id
                    name
                    avatar {
                        url
                      }
                  }
                }
              }
            }
        `
        const result = await request<{blogs: LatestBlogsType[]}>(graphqlAPI, query)
        return result.blogs
    },

    async getCategories() {
        const query = gql`
            query GetCategories {
                categories {
                    label
                    slug
                }
            }
        `
        const result = await request<{categories: CategoryType[]}>(graphqlAPI, query)
        return result.categories
    },

    async GetDetailedBlogs(slug: string) {
        const query = gql`
        query GetDetailedBlog($slug: String = "") {
            blog(where: {slug: $slug}) {
                expert
                id
                slug
                title
                updatedAt
                createdAt
                image {
                  url
                }
                author {
                    ... on Author {
                    name
                    avatar {
                      url
                    }
                  }
                }
                category {
                  label
                  slug
                }
                description {
                    html
                    text
                }
            }
          }
                   
        `
        const result = await request<{blog: BlogsType}>(graphqlAPI, query, {slug})
        return result.blog
    },

    async getDetailedCategoriesBlog(slug: string) {
        const query = gql`
        query getCategoriesBlog($slug: String = "") {
            blogs(where: {category: {slug: $slug}}) {
                expert
                id
                slug
                title
                updatedAt
                createdAt
                image {
                  url
                }
                author {
                    ... on Author {
                    name
                    avatar {
                      url
                    }
                  }
                }
                category {
                  label
                  slug
                }
                description {
                    text
                }
            }
          }
        `
        const result = await request<{blogs: BlogsType[]}>(graphqlAPI, query, {slug})
        return result.blogs
    }
}