export interface BlogsType {
    expert: string;
    id: string;
    slug: string;
        title: string;
    updatedAt: string;
    createdAt: Date;
    image: {
      url: string;
    }
    author: {
        name: string;
        avatar: {
          url: string;
        }
    }
    category: {
      label: string;
      slug: string;
    }
    description: {
        text: string;
        html: string;
    }
}

export interface LatestBlogsType {
    expert: string;
    id: string;
    slug: string;
        title: string;
    updatedAt: string;
    createdAt: Date;
    image: {
      url: string;
    }
    author: {
        name: string;
        avatar: {
          url: string;
        }
    }
}