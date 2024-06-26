import { userAgent } from "next/server";
import sitemap from "./sitemap";

export default function robots(){
    return {
        rules: [
            {
                userAgent: '*',
                allow: "/",
                disallow: ["/404", "/booking"],
            }
        ], 
        sitemap: `${process.env.NEXT_PUBLIC_API_BASE_URL}/sitemap.xml`
    }
}