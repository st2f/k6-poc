import { request, wait } from './utils.js';

export const options = {
  vus: 2,
  duration: '15s',
  thresholds: {
    http_req_failed: ['rate<0.01'], // fail if more than 1% requests fail
    http_req_duration: ['p(95)<500'], // 95% of requests < 500ms
  },
};

export default function () {
  request('/api/articles');
  request('/api/categories');
  request('/');
  wait(1);
}
