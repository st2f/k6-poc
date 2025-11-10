[![K6 Performance POC](https://github.com/st2f/k6-poc/actions/workflows/k6.yml/badge.svg)](https://github.com/st2f/k6-poc/actions/workflows/k6.yml)

# k6 Performance Testing Project

This project contains **k6 load tests** and demonstrates **CI execution via Docker**.

## Project Structure

```
project/
├── scripts/
│   ├── smoke.js      # Quick smoke test, minimal load
│   ├── load.js       # Ramp-up load test, multiple endpoints
│   ├── stress.js     # Stress test with higher concurrency
│   └── utils.js      # Helper functions (request wrapper, sleep)
├── results/          # JSON reports (optional) or CLI output screenshots
└── README.md
```

---

## Running Tests Locally

Set the target base URL using the environment variable `TARGET_BASE_URL`.

```bash
# Smoke test
TARGET_BASE_URL=https://localhost k6 run scripts/smoke.js

# Load test
TARGET_BASE_URL=https://localhost k6 run scripts/load.js

# Stress test
TARGET_BASE_URL=https://localhost k6 run scripts/stress.js
```

### Optional Flags

* `--insecure-skip-tls-verify` → Use when testing local HTTPS endpoints with self-signed certificates.
* `--out json=results/load.json` → Export test results in JSON format for analysis or reporting.

---

## CI Execution

* The workflow runs all three scripts using Docker and GitHub Actions.
* For the POC, the workflow is configured to **continue running subsequent tests even if one test fails**, so that all metrics are collected and visible.
* CLI output provides key metrics such as iteration count, request duration, and failed requests.

---

## Sample Results

* **Smoke test** → CLI screenshot
  <img width="895" height="855" alt="k6-smoke-test-local" src="https://github.com/user-attachments/assets/7a9d2058-2c88-4231-9df7-811ad33d98b3" />

* **Load test** → GitHub Actions screenshot
  <img width="1332" height="698" alt="k6-load-test" src="https://github.com/user-attachments/assets/4624c4b1-55d3-4cb6-a101-2067402f342f" />

* **Stress test** → GitHub Actions screenshot
  <img width="1332" height="698" alt="k6-stress-test" src="https://github.com/user-attachments/assets/8dfa72a4-17d9-4e2f-80dd-67d6120535fa" />


---

### ✅ Notes / Best Practices

* Thresholds are enforced in scripts, but for the POC the workflow continues on failures to allow full test execution.
* For production-grade performance testing, it’s recommended to **fail the CI step if thresholds are crossed**.
* CLI output is sufficient for the POC; HTML/JSON reports can be generated optionally if detailed reporting is needed.

---
