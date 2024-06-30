import { userAgent } from "next/server";
import sitemap from "./sitemap_index";

export default function robots(){
    return {
        rules: [
            {
                userAgent: '*',
                allow: "/",
                disallow: ["/404"],
            }
        ], 
        sitemap: `${process.env.NEXT_PUBLIC_API_BASE_URL}/sitemap_index.xml`
    }
}