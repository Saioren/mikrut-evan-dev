import { Footer } from "@/types/Footer/types";

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
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${collection}/${id}?depth=1`);
    const data = await req.json();
    doc = data;
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
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${collection}?where[slug][equals]=${lowerCaseSlug}&limit=1&depth=0`);
    const data = await req.json();
    const {
      docs: [firstDoc]
    } = data;
    doc = firstDoc;
  }

  return doc;
}

export const getAllGlobals = async (): Promise<{
  footer: Footer
}> => {
  const [
    footer,
  ] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/globals/footer?depth=1`).then((res) => res.json()),
  ]);

  return {
    footer,
  }
}

