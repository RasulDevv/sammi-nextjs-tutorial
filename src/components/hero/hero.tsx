import { Avatar, Box, Typography } from "@mui/material"
import { format } from "date-fns";
import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { HeroProps } from "./hero.props";
import { calculateEstimatedTimeToRead } from "src/helpers/time.format";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Hero = ({blogs}: HeroProps): JSX.Element => {
  return (
    <Box width={'100%'} height={'70vh'} sx={{backgroundColor: 'red'}}>
      <Carousel responsive={responsive}>
        {blogs.map(item => (
            <Box key={item.image.url}>
                <Box sx={{position: 'relative', width: '100%', height: '70vh'}}>
                    <Image src={item.image.url} alt={item.title} fill style={{objectFit: 'cover'}} />
                    <Box sx={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,.6)'}}>
                        <Box width={{xs: "100%", md: "70%"}} position={'relative'} zIndex={999} sx={{top: '50%', transform: "translateY(-50%)", paddingLeft: {xs: "10px", md: "50px"}}}>
                            <Typography sx={{fontSize: {xs: '30px', md: '50px'}}}>{item.title}</Typography>
                            <Typography sx={{fontSize: {xs: '25px', md: '30px'}}}>{item.expert}</Typography>
                            <Box sx={{display: 'flex', gap: '10px', marginTop: '20px'}}>
                                <Avatar alt={item.author.name} src={item.author.avatar.url} />
                                <Box>
                                    <Typography>{item.author.name}</Typography>
                                    <Box>{format(new Date(item.createdAt), "dd MMM, yyyy")} &#x2022; {calculateEstimatedTimeToRead(item.description.text)} min read</Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        ))}
      </Carousel>
    </Box>
  )
}

export default Hero


export const data = [
    {
        title: 'Technical SEO with hygrapgh',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQGsFcnOLNSayMzhshkQDtZmqVF2h9ItSogfwqOZhc-5P6jxlHThBLxeBBfs4JAJTtUk&usqp=CAU',
        expert: 'Get started with your SEO implementation when using a Headless CMS',
        author: {
            name: 'Samar Badriddinov',
            image: 'https://st4.depositphotos.com/7839720/22785/i/450/depositphotos_227852430-stock-photo-man-portrait-snowed-woods-glasses.jpg'
        }
    },
    {
        title: 'Technical SEO with hygrapgh',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQGsFcnOLNSayMzhshkQDtZmqVF2h9ItSogfwqOZhc-5P6jxlHThBLxeBBfs4JAJTtUk&usqp=CAU',
        expert: 'Get started with your SEO implementation when using a Headless CMS',
        author: {
            name: 'Samar Badriddinov',
            image: 'https://st4.depositphotos.com/7839720/22785/i/450/depositphotos_227852430-stock-photo-man-portrait-snowed-woods-glasses.jpg'
        }
    },
    {
        title: 'Technical SEO with hygrapgh',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQGsFcnOLNSayMzhshkQDtZmqVF2h9ItSogfwqOZhc-5P6jxlHThBLxeBBfs4JAJTtUk&usqp=CAU',
        expert: 'Get started with your SEO implementation when using a Headless CMS',
        author: {
            name: 'Samar Badriddinov',
            image: 'https://st4.depositphotos.com/7839720/22785/i/450/depositphotos_227852430-stock-photo-man-portrait-snowed-woods-glasses.jpg'
        }
    },
    {
        title: 'Technical SEO with hygrapgh',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQGsFcnOLNSayMzhshkQDtZmqVF2h9ItSogfwqOZhc-5P6jxlHThBLxeBBfs4JAJTtUk&usqp=CAU',
        expert: 'Get started with your SEO implementation when using a Headless CMS',
        author: {
            name: 'Samar Badriddinov',
            image: 'https://st4.depositphotos.com/7839720/22785/i/450/depositphotos_227852430-stock-photo-man-portrait-snowed-woods-glasses.jpg'
        }
    },
    {
        title: 'Technical SEO with hygrapgh',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQGsFcnOLNSayMzhshkQDtZmqVF2h9ItSogfwqOZhc-5P6jxlHThBLxeBBfs4JAJTtUk&usqp=CAU',
        expert: 'Get started with your SEO implementation when using a Headless CMS',
        author: {
            name: 'Samar Badriddinov',
            image: 'https://st4.depositphotos.com/7839720/22785/i/450/depositphotos_227852430-stock-photo-man-portrait-snowed-woods-glasses.jpg'
        }
    },
    {
        title: 'Technical SEO with hygrapgh',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQGsFcnOLNSayMzhshkQDtZmqVF2h9ItSogfwqOZhc-5P6jxlHThBLxeBBfs4JAJTtUk&usqp=CAU',
        expert: 'Get started with your SEO implementation when using a Headless CMS',
        author: {
            name: 'Samar Badriddinov',
            image: 'https://st4.depositphotos.com/7839720/22785/i/450/depositphotos_227852430-stock-photo-man-portrait-snowed-woods-glasses.jpg'
        }
    },
    {
        title: 'Technical SEO with hygrapgh',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQGsFcnOLNSayMzhshkQDtZmqVF2h9ItSogfwqOZhc-5P6jxlHThBLxeBBfs4JAJTtUk&usqp=CAU',
        expert: 'Get started with your SEO implementation when using a Headless CMS',
        author: {
            name: 'Samar Badriddinov',
            image: 'https://st4.depositphotos.com/7839720/22785/i/450/depositphotos_227852430-stock-photo-man-portrait-snowed-woods-glasses.jpg'
        }
    },
    {
        title: 'Technical SEO with hygrapgh',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQGsFcnOLNSayMzhshkQDtZmqVF2h9ItSogfwqOZhc-5P6jxlHThBLxeBBfs4JAJTtUk&usqp=CAU',
        expert: 'Get started with your SEO implementation when using a Headless CMS',
        author: {
            name: 'Samar Badriddinov',
            image: 'https://st4.depositphotos.com/7839720/22785/i/450/depositphotos_227852430-stock-photo-man-portrait-snowed-woods-glasses.jpg'
        }
    },
    {
        title: 'Technical SEO with hygrapgh',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQGsFcnOLNSayMzhshkQDtZmqVF2h9ItSogfwqOZhc-5P6jxlHThBLxeBBfs4JAJTtUk&usqp=CAU',
        expert: 'Get started with your SEO implementation when using a Headless CMS',
        author: {
            name: 'Samar Badriddinov',
            image: 'https://st4.depositphotos.com/7839720/22785/i/450/depositphotos_227852430-stock-photo-man-portrait-snowed-woods-glasses.jpg'
        }
    },
    {
        title: 'Technical SEO with hygrapgh',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQGsFcnOLNSayMzhshkQDtZmqVF2h9ItSogfwqOZhc-5P6jxlHThBLxeBBfs4JAJTtUk&usqp=CAU',
        expert: 'Get started with your SEO implementation when using a Headless CMS',
        author: {
            name: 'Samar Badriddinov',
            image: 'https://st4.depositphotos.com/7839720/22785/i/450/depositphotos_227852430-stock-photo-man-portrait-snowed-woods-glasses.jpg'
        }
    },
    {
        title: 'Technical SEO with hygrapgh',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQGsFcnOLNSayMzhshkQDtZmqVF2h9ItSogfwqOZhc-5P6jxlHThBLxeBBfs4JAJTtUk&usqp=CAU',
        expert: 'Get started with your SEO implementation when using a Headless CMS',
        author: {
            name: 'Samar Badriddinov',
            image: 'https://st4.depositphotos.com/7839720/22785/i/450/depositphotos_227852430-stock-photo-man-portrait-snowed-woods-glasses.jpg'
        }
    },
    {
        title: 'Technical SEO with hygrapgh',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQGsFcnOLNSayMzhshkQDtZmqVF2h9ItSogfwqOZhc-5P6jxlHThBLxeBBfs4JAJTtUk&usqp=CAU',
        expert: 'Get started with your SEO implementation when using a Headless CMS',
        author: {
            name: 'Samar Badriddinov',
            image: 'https://st4.depositphotos.com/7839720/22785/i/450/depositphotos_227852430-stock-photo-man-portrait-snowed-woods-glasses.jpg'
        }
    },
    {
        title: 'Technical SEO with hygrapgh',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQGsFcnOLNSayMzhshkQDtZmqVF2h9ItSogfwqOZhc-5P6jxlHThBLxeBBfs4JAJTtUk&usqp=CAU',
        expert: 'Get started with your SEO implementation when using a Headless CMS',
        author: {
            name: 'Samar Badriddinov',
            image: 'https://st4.depositphotos.com/7839720/22785/i/450/depositphotos_227852430-stock-photo-man-portrait-snowed-woods-glasses.jpg'
        }
    }
]