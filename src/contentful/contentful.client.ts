import { createClient } from "contentful";

const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken:
    process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN || "",
});

export default contentfulClient;
