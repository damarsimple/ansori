import { Box, Avatar, Typography } from '@mui/material'
import React from 'react'
import Link from "next/link";
export default function PostCard({ type = "default" }: {
    type: "default" | "carousel"
}) {

    switch (type) {
        case 'carousel':
            return <Box
                sx={{ my: 1, display: "flex", flexDirection: "column" }}
            >
                <Link href="/post/slug">
                    <a >
                        <Avatar
                            variant="square"
                            src="https://img.beritasatu.com/cache/beritasatu/910x580-2/1644679052.jpg"
                            alt="ansori"
                            sx={{
                                width: 240,
                                height: 150,
                            }}
                        />
                    </a>
                </Link>

                <Link href="/post/slug">
                    <a >

                        <Typography variant="h6" component={"h1"}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                        </Typography>
                    </a>
                </Link>

                <Link href="/category/slug">
                    <a >
                        <Typography variant="body2" component={"h1"}>
                            ZAKAT | 10 jam yang lalu
                        </Typography>
                    </a>
                </Link>
            </Box>
            break;

        default:
            return (
                <Box
                    display="flex"
                    gap={3}
                    mb={2}
                >
                    <Link href="/post/slug">
                        <a>
                            <Avatar
                                variant="square"
                                src="https://img.beritasatu.com/cache/beritasatu/910x580-2/1644679052.jpg"
                                alt="ansori"
                                sx={{
                                    width: 110,
                                    height: 110,
                                }}
                            />
                        </a>
                    </Link >
                    <Box>
                        <Link href="/post/slug">
                            <a>
                                <Typography variant={"h6"}
                                    component={"h1"} sx={{
                                        fontWeigth: "bold",
                                        height: 90
                                    }}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing
                                    elit. Fugit
                                </Typography>
                            </a>
                        </Link >

                        <Link href="/category/slug">
                            <a>

                                <Typography variant="caption" component={"h1"}>
                                    ZAKAT | 10 jam yang lalu
                                </Typography>
                            </a>
                        </Link >
                    </Box>
                </Box >
            )
            break;
    }


}
