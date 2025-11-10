// this is minimal example to try out one url
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 5,          // virtual users
  duration: '15s', // test duration
};

export default function () {
  http.get('http://localhost');
  sleep(1);
}
