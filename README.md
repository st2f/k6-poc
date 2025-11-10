# k6 Performance Testing Project

This project contains **k6 load tests**

## Project structure

```
project/
├── scripts/
│   ├── smoke.js      # Quick smoke test, minimal load
│   ├── load.js       # Ramp-up load test, multiple endpoints
│   ├── stress.js     # Stress test with higher concurrency
│   └── utils.js      # Helper functions (request wrapper, sleep)
├── results/          # JSON or HTML reports
└── README.md
````

## Running tests locally

> Use the `--insecure-skip-tls-verify` flag if testing local HTTPS endpoints

```bash
# Smoke test
k6 run scripts/smoke.js --insecure-skip-tls-verify --out json=results/smoke.json

# Load test
k6 run scripts/load.js --insecure-skip-tls-verify --out json=results/load.json

# Stress test
k6 run scripts/stress.js --insecure-skip-tls-verify --out json=results/stress.json
``
