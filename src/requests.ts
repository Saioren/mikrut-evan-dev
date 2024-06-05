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
      const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${collection}/${id}?depth=1`);
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
      const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${collection}?where[slug][equals]=${lowerCaseSlug}&limit=1&depth=0`);
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

    return { footer };
  } catch (error) {
    console.error('Error fetching globals:', error);
    return { footer: null }; // Return a default or null value if fetching fails
  }
}

/*export const getAllCollections = async (): Promise<{
  skillsCollection: SkillsArray
}> => {
  try {
    const [skillsCollection] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/skillsCollection/6660ce030212164877757c75`, {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
        }
      }).then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch skills collection. ${res.statusText} (status ${res.status})`);
        }
        return res.json();
      }),
    ]);
    return { skillsCollection };
  } catch (error) {
    console.log('Error fetching skills collection:', error);
    return { skillsCollection: null };
  }
}*/



export async function fetchPageData(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pages?where[slug][equals]=${slug}`);
  const data = await res.json();
  return data.docs[0];
}
