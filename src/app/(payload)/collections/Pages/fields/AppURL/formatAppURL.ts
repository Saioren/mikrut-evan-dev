export const formatAppURL = (breadcrumbs): string => {
  let url: string;

  if (breadcrumbs && Array.isArray(breadcrumbs) && breadcrumbs.length > 0) {
    let pathToUse = breadcrumbs[breadcrumbs.length - 1].url;
    if (pathToUse === 'home') pathToUse = '/';
    url = `${process.env.PAYLOAD_PUBLIC_APP_URL}${pathToUse}`;
  }

  return url;
};
