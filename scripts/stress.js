import { request, wait } from './utils.js';

export const options = {
  scenarios: {
    stress: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '10s', target: 5 },
        { duration: '20s', target: 25 },
        { duration: '10s', target: 50 },
        { duration: '10s', target: 0 },
      ],
    },
  },
  thresholds: {
    http_req_failed: ['rate<0.02'], // allow slightly more failure under stress
    http_req_duration: ['p(95)<800'],
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
