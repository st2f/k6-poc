import http from 'k6/http';
import { check, sleep } from 'k6';
import { fail } from 'k6';

// Exit early if TARGET_BASE_URL is not set
if (!__ENV.TARGET_BASE_URL) {
  fail(`
  ERROR: TARGET_BASE_URL environment variable is not set!
  Please run the script with:
      TARGET_BASE_URL=https://your-domain k6 run <script.js>
  `);
}

export const BASE_URL = __ENV.TARGET_BASE_URL;

export function request(path, options = {}) {
  const url = `${BASE_URL}${path}`;
  const res = http.get(url, options);

  check(res, {
    'status 200': (r) => r.status === 200,
  });

  return res;
}

export function wait(seconds = 1) {
  sleep(seconds);
}
