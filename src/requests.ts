import { Footer } from "@/types/Layout/Footer/types";
import { SkillItem, SkillsArray } from "./types/Blocks/Skills/types";

// TODO: if in preview mode, add payload token and ?draft=true to the request
export const getByID = async ({
  collection,
  id
}: {
  collection?: string,
  id?: string
}) => {
  let doc = null;  // must use null, undefined cannot be serialized as JSON from getStaticProps

  if (typeof id === 'string') {
    try {
      const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${collection}/${id}?depth=2`);
      if (req.ok) {
        doc = await req.json();
      } else {
        console.error(`Failed to fetch by ID: ${req.statusText} (status ${req.status})`);
      }
    } catch (error) {
      console.error('Error fetching by ID:', error);
    }
  }

  return doc;
}


export const getBySlug = async ({
  collection,
  slug
}: {
  collection?: string,
  slug?: string
}) => {
  let doc = null;  // must use null, undefined cannot be serialized as JSON from getStaticProps

  if (typeof slug === 'string') {
    const lowerCaseSlug = slug.toLowerCase(); // NOTE: let the url be case insensitive
    try {
      const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${collection}?where[slug][equals]=${lowerCaseSlug}&limit=1&depth=2`);
      if (req.ok) {
        const data = await req.json();
        const { docs: [firstDoc] } = data;
        doc = firstDoc;
      } else {
        console.error(`Failed to fetch by slug: ${req.statusText} (status ${req.status})`);
      }
    } catch (error) {
      console.error('Error fetching by slug:', error);
    }
  }

  return doc;
}


const defaultFooter: Footer = {
  linkBlock: {
    linkBlockLabel: 'links',
    links: undefined, // Remove the '?' after 'links'
  },
  copyrightBlock: {
    copyrightLabel: 'mikrutevan.dev all rights reserved',
    copyrightBody: 'this site was made with payload cms and next js.',
    linkText: 'official documentation',
    copyrightLinks: undefined, // Remove the '?' after 'copyrightLinks'
  },
  globalType: 'footer', // Remove the '?' after 'globalType'
  globalName: 'footer', // Remove the '?' after 'globalName'
  id: 'footer',
};

export const getAllGlobals = async (): Promise<{
  footer: Footer
}> => {
  try {
    const [footer] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/globals/footer?depth=2`).then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch footer: ${res.statusText} (status ${res.status})`);
        }
        return res.json();
      }),
    ]);

    return { footer: footer || defaultFooter }; // Use defaultFooter if footer is null or undefined
  } catch (error) {
    console.error('Error fetching globals:', error);
    return { footer: defaultFooter }; // Return defaultFooter in case of error
  }
}

/*export const getAllCollections = async (): Promise<{
  skillsCollection: SkillsArray | null;
}> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/skillsCollection/6660ce030212164877757c75?depth=1&draft=false`, {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch skills collection. ${response.statusText} (status ${response.status})`);
    }

    const skillsCollection = await response.json();
    return { skillsCollection };
  } catch (error) {
    console.error('Error fetching skills collection:', error);
    return { skillsCollection: null };
  }
};*/




export async function fetchPageData(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pages?where[slug][equals]=${slug}`);
  const data = await res.json();
  return data.docs[0];
}
