import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export const getEntries = async () => {
  try {
    const response = await client.getEntries({
      content_type: "companyprofile",
    });

    const company = response.items.map((company: any) => {
      return {
        image: company.fields.image,
        title: company.fields.title,
        desc: company.fields.desc,
        price: company.fields.price,
      };
    });
    return company;
  } catch (error) {
    console.log(error);
  }
};
