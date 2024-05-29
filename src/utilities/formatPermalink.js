export const formatPermalink = (reference, currentCategory) => {
  let permalink = '';

  const {
    relationTo,
    value,
  } = reference;

  if (typeof value === 'object' && value !== null) {
    const {
      slug,
      breadcrumbs,
    } = value;

    // Check if the slug is 'home' and set permalink to '/' if it is
    if (slug === 'home') {
      permalink = '/';
    } else {
      // Pages could be nested, so use breadcrumbs
      if (relationTo === 'pages') {
        if (breadcrumbs) {
          const { url: lastCrumbURL = '' } = breadcrumbs?.[breadcrumbs.length - 1] || {}; // last crumb
          permalink = lastCrumbURL;
        } else {
          permalink = slug;
        }
      }
    }
  }

  return permalink;
};
