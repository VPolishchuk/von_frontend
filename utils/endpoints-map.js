
const endpointsMap = {
  jobs: 'api/v1/jobs', // get
  auth: 'api/v1/auth', // post
  contactAs: 'api/v1/contact', // POST
  locations: 'api/v1/locations', // get
  complexes: 'api/v1/complexes', // get
  apartmensTypes: 'api/v1/apartmens/types', // get
  jobRequest: 'api/v1/jobs/detail-request', // post
  jobDetails: jobId => `api/v1/jobs/${jobId}`, // get
  datesArrivalDetails: 'api/v1/complexes​/dates​/arrival', // get
  complexesDetails: complexesId => `api/v1/complexes/${complexesId}`, // get
  datesDepartureDetails: `api/v1/complexes/dates/departure`, // get
  apartmentDetails: apartmentId => `api/v1/apartmens/${apartmentId}`, // get
  apartmens: 'api/v1/apartmens', // get
  datesArrival: 'api/v1/complexes/dates/arrival', // get
  datesDeparture: 'api/v1/complexes/dates/departure' // get
};

export default endpointsMap;
