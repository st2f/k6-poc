import { request, wait } from './utils.js';

export const options = {
  scenarios: {
    ramp: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '5s', target: 5 },
        { duration: '20s', target: 10 },
        { duration: '5s', target: 0 },
      ],
    },
  },
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<500'],
  },
};

export default function () {
  request('/api/articles');
  request('/api/articles/1');
  request('/api/categories');
  request('/');
  request('/login');
  wait(1);
}
