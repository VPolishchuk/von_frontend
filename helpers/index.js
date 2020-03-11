import Router from 'next/router';
////////////////////////////////////////////

export const goToRoute = (url, as, options) => (Router.push(url, as, options));
