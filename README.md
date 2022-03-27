[![Image](./dev/img/moviemasher.svg "Movie Masher")](http://moviemasher.com)

_JavaScript video editor, encoder, and streamer - version 5.0.0_

- **visual compositing** through Canvas API
- **audio mixing** through WebAudio API
- **encoding** and **streaming** through FFmpeg

## Availability

Movie Masher is offered through a variety of popular platforms. The entire
[moviemasher/moviemasher.js](https://github.com/moviemasher/moviemasher.js)
project repository can of course be cloned or forked from Github. The core
[@moviemasher/moviemasher.js](https://www.npmjs.com/package/@moviemasher/moviemasher.js) library can be installed through NPM, as can the
[@moviemasher/client-react](https://www.npmjs.com/package/@moviemasher/client-react)
[@moviemasher/server-express](https://www.npmjs.com/package/@moviemasher/server-express)
add-ons. The
[moviemasher/moviemasher.js](https://hub.docker.com/r/moviemasher/moviemasher.js/)
Docker image combines these into a fully functional application for running locally.
And the
[Movie Masher AMI](https://aws.amazon.com/marketplace/pp/prodview-vj7erupihhxv6)
in the AWS Marketplace does the same within their hosted environment.

<!-- MAGIC:START (COLORSVG:replacements=black&src=../moviemasher/dev/graphics/third-party.svg) -->
<svg width="640" height="48" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewbox="0 0 640 48">
<path d="M 129.45 0.00 C 115.98 0.00 105.06 10.89 105.06 24.33 L 105.06 24.33 C 105.05 34.81 111.77 44.11 121.74 47.42 C 122.96 47.63 123.42 46.90 123.42 46.26 C 123.42 45.68 123.38 43.77 123.38 41.73 C 117.26 42.86 115.67 40.24 115.18 38.87 C 114.91 38.17 113.72 36.01 112.68 35.43 C 111.83 34.98 110.61 33.85 112.65 33.82 C 114.57 33.79 115.94 35.59 116.40 36.32 C 118.60 40.00 122.11 38.96 123.51 38.32 C 123.72 36.74 124.36 35.68 125.06 35.07 C 119.63 34.46 113.96 32.36 113.96 23.06 C 113.96 20.41 114.91 18.22 116.46 16.51 C 116.22 15.91 115.37 13.41 116.71 10.07 C 116.71 10.07 118.75 9.43 123.42 12.56 L 123.42 12.56 C 125.40 12.01 127.45 11.74 129.52 11.74 C 131.59 11.74 133.66 12.01 135.61 12.56 C 140.28 9.40 142.32 10.07 142.32 10.07 C 143.66 13.41 142.81 15.91 142.57 16.52 C 144.12 18.22 145.07 20.38 145.07 23.06 C 145.07 32.39 139.37 34.46 133.94 35.07 C 134.82 35.83 135.58 37.29 135.58 39.57 C 135.58 42.83 135.55 45.44 135.55 46.26 C 135.55 46.90 136.01 47.66 137.23 47.42 L 137.23 47.42 C 147.16 44.07 153.85 34.79 153.85 24.33 C 153.85 10.89 142.93 0.00 129.45 0.00 Z M 129.45 0.00" stroke="none" fill="currentColor"  />
<path d="M 184.91 21.46 L 175.09 21.46 C 174.84 21.46 174.63 21.67 174.63 21.92 L 174.63 26.71 C 174.63 26.96 174.84 27.17 175.09 27.17 L 178.92 27.17 L 178.92 33.11 C 178.92 33.11 178.06 33.41 175.69 33.41 C 172.88 33.41 168.96 32.38 168.96 23.79 C 168.96 15.20 173.04 14.07 176.87 14.07 C 180.19 14.07 181.62 14.65 182.53 14.93 C 182.81 15.01 183.08 14.73 183.08 14.48 L 184.17 9.85 C 184.17 9.73 184.13 9.59 184.00 9.50 C 183.63 9.23 181.37 7.98 175.69 7.98 C 169.13 7.98 162.41 10.76 162.41 24.13 C 162.41 37.50 170.11 39.49 176.59 39.49 C 181.96 39.49 185.22 37.20 185.22 37.20 C 185.35 37.13 185.37 36.94 185.37 36.85 L 185.37 21.92 C 185.37 21.67 185.16 21.46 184.91 21.46" stroke="none" fill="currentColor"  />
<path d="M 235.50 9.58 C 235.50 9.32 235.30 9.12 235.05 9.12 L 229.52 9.12 C 229.27 9.12 229.06 9.32 229.06 9.58 C 229.06 9.58 229.06 20.23 229.06 20.23 L 220.45 20.23 L 220.45 9.58 C 220.45 9.32 220.24 9.12 219.99 9.12 L 214.46 9.12 C 214.21 9.12 214.01 9.32 214.01 9.58 L 214.01 38.43 C 214.01 38.68 214.21 38.89 214.46 38.89 L 219.99 38.89 C 220.24 38.89 220.45 38.68 220.45 38.43 L 220.45 26.09 L 229.06 26.09 C 229.06 26.09 229.05 38.43 229.05 38.43 C 229.05 38.68 229.25 38.89 229.51 38.89 L 235.05 38.89 C 235.30 38.89 235.50 38.68 235.50 38.43 Z M 235.50 9.58" stroke="none" fill="currentColor"  />
<path d="M 195.34 13.36 C 195.34 11.38 193.75 9.77 191.78 9.77 C 189.81 9.77 188.21 11.38 188.21 13.36 C 188.21 15.35 189.81 16.96 191.78 16.96 C 193.75 16.96 195.34 15.35 195.34 13.36" stroke="none" fill="currentColor"  />
<path d="M 194.95 32.34 L 194.95 19.03 C 194.95 18.77 194.74 18.57 194.49 18.57 L 188.98 18.57 C 188.73 18.57 188.50 18.83 188.50 19.08 L 188.50 38.16 C 188.50 38.72 188.85 38.88 189.30 38.88 L 194.27 38.88 C 194.81 38.88 194.95 38.62 194.95 38.15 Z M 194.95 32.34" stroke="none" fill="currentColor"  />
<path d="M 256.51 18.61 L 251.02 18.61 C 250.77 18.61 250.57 18.82 250.57 19.07 L 250.57 33.22 C 250.57 33.22 249.17 34.23 247.20 34.23 C 245.22 34.23 244.69 33.34 244.69 31.41 L 244.69 19.07 C 244.69 18.82 244.49 18.61 244.24 18.61 L 238.67 18.61 C 238.42 18.61 238.21 18.82 238.21 19.07 L 238.21 32.34 C 238.21 38.08 241.42 39.48 245.83 39.48 C 249.45 39.48 252.36 37.49 252.36 37.49 C 252.36 37.49 252.50 38.54 252.57 38.66 C 252.63 38.79 252.79 38.91 252.97 38.91 L 256.51 38.90 C 256.76 38.90 256.97 38.69 256.97 38.44 L 256.97 19.07 C 256.97 18.82 256.76 18.61 256.51 18.61" stroke="none" fill="currentColor"  />
<path d="M 269.34 34.22 C 267.43 34.16 266.14 33.30 266.14 33.30 L 266.14 24.16 C 266.14 24.16 267.42 23.38 268.98 23.24 C 270.95 23.07 272.86 23.66 272.86 28.36 C 272.86 33.32 272.00 34.30 269.34 34.22 M 271.50 17.96 C 268.38 17.96 266.27 19.35 266.27 19.35 L 266.27 9.58 C 266.27 9.32 266.06 9.12 265.81 9.12 L 260.27 9.12 C 260.01 9.12 259.81 9.32 259.81 9.58 L 259.81 38.43 C 259.81 38.68 260.01 38.89 260.27 38.89 L 264.11 38.89 C 264.29 38.89 264.42 38.80 264.51 38.64 C 264.61 38.49 264.75 37.31 264.75 37.31 C 264.75 37.31 267.01 39.46 271.30 39.46 C 276.34 39.46 279.23 36.91 279.23 28.02 C 279.23 19.12 274.62 17.96 271.50 17.96" stroke="none" fill="currentColor"  />
<path d="M 210.83 18.56 L 206.69 18.56 C 206.69 18.56 206.68 13.10 206.68 13.10 C 206.68 12.89 206.57 12.79 206.33 12.79 L 200.68 12.79 C 200.46 12.79 200.34 12.89 200.34 13.10 L 200.34 18.74 C 200.34 18.74 197.51 19.42 197.32 19.48 C 197.13 19.53 196.99 19.71 196.99 19.92 L 196.99 23.47 C 196.99 23.72 197.20 23.93 197.45 23.93 L 200.34 23.93 L 200.34 32.46 C 200.34 38.80 204.80 39.43 207.81 39.43 C 209.19 39.43 210.83 38.98 211.10 38.89 C 211.27 38.82 211.36 38.66 211.36 38.47 L 211.37 34.57 C 211.37 34.31 211.15 34.11 210.91 34.11 C 210.67 34.11 210.05 34.21 209.41 34.21 C 207.38 34.21 206.69 33.26 206.69 32.04 C 206.69 30.82 206.69 23.93 206.69 23.93 L 210.83 23.93 C 211.08 23.93 211.29 23.72 211.29 23.47 L 211.29 19.02 C 211.29 18.77 211.08 18.56 210.83 18.56" stroke="none" fill="currentColor"  />
<path d="M 318.03 38.24 C 316.17 38.24 314.48 36.71 314.48 34.83 C 314.48 32.95 316.01 31.42 318.03 31.42 C 320.06 31.42 321.58 32.95 321.58 34.83 C 321.58 36.71 319.89 38.24 318.03 38.24 Z M 361.64 19.63 C 361.30 16.90 359.61 14.68 357.42 12.98 L 356.57 12.29 L 355.89 13.15 C 354.54 14.68 354.04 17.41 354.20 19.46 C 354.37 21.00 354.88 22.54 355.73 23.73 C 355.05 24.07 354.20 24.41 353.53 24.76 C 352.01 25.27 350.49 25.44 348.97 25.44 L 305.19 25.44 L 305.02 26.46 C 304.68 29.71 305.19 33.12 306.54 36.20 L 307.22 37.39 L 307.22 37.56 C 311.27 44.39 318.54 47.46 326.49 47.46 C 341.70 47.46 354.20 40.81 360.12 26.46 C 364.01 26.63 367.90 25.61 369.75 21.85 L 370.26 21.00 L 369.42 20.49 C 367.22 19.12 364.18 18.95 361.64 19.63 Z M 339.84 16.90 L 333.25 16.90 L 333.25 23.56 L 339.84 23.56 L 339.84 16.90 Z M 339.84 8.54 L 333.25 8.54 L 333.25 15.20 L 339.84 15.20 L 339.84 8.54 Z M 339.84 0.00 L 333.25 0.00 L 333.25 6.66 L 339.84 6.66 L 339.84 0.00 Z M 347.95 16.90 L 341.36 16.90 L 341.36 23.56 L 347.95 23.56 L 347.95 16.90 Z M 323.44 16.90 L 316.85 16.90 L 316.85 23.56 L 323.44 23.56 L 323.44 16.90 Z M 331.72 16.90 L 325.13 16.90 L 325.13 23.56 L 331.72 23.56 L 331.72 16.90 Z M 315.33 16.90 L 308.74 16.90 L 308.74 23.56 L 315.33 23.56 L 315.33 16.90 Z M 331.72 8.54 L 325.13 8.54 L 325.13 15.20 L 331.72 15.20 L 331.72 8.54 Z M 323.44 8.54 L 316.85 8.54 L 316.85 15.20 L 323.44 15.20 L 323.44 8.54 Z M 323.44 8.54" stroke="none" fill="currentColor"  />
<path d="M 475.56 34.15 C 478.44 31.59 481.31 29.20 484.18 26.63 C 485.20 25.78 486.21 24.93 487.22 23.90 C 486.38 22.88 485.20 22.20 484.01 21.68 C 481.82 20.83 479.62 21.17 477.42 22.37 C 474.72 23.90 473.53 26.46 473.70 29.54 C 473.70 30.73 474.04 31.93 474.72 32.95 C 475.22 33.46 475.39 33.81 475.56 34.15 M 478.94 36.54 C 480.29 37.05 481.98 37.05 483.51 36.71 C 484.18 36.37 486.21 35.51 486.89 35.68 L 487.22 35.68 C 487.73 35.85 488.07 36.20 488.24 36.71 C 488.75 37.73 488.58 38.76 487.56 39.27 L 487.22 39.44 C 483.51 41.66 479.62 41.32 475.90 39.27 C 474.21 38.24 472.86 36.88 471.84 35.17 L 471.67 34.83 C 469.31 30.73 469.65 26.29 472.35 22.37 C 473.20 21.00 474.55 19.98 475.90 19.12 L 476.41 18.78 C 479.96 16.73 483.68 16.90 487.22 18.61 C 489.08 19.63 490.77 21.00 491.79 22.88 L 491.96 23.22 C 492.80 24.59 491.79 25.78 490.60 26.63 L 487.06 29.71 C 484.01 32.10 481.48 34.32 478.94 36.54 Z M 506.49 17.76 L 506.83 17.76 C 508.01 17.76 508.86 18.61 508.86 19.81 C 508.86 21.51 507.34 21.85 505.99 21.85 C 504.30 21.85 502.61 22.88 501.42 24.07 C 499.90 25.61 499.23 27.49 499.23 29.54 L 499.23 39.10 C 499.23 40.12 498.55 41.15 497.37 41.15 L 497.03 41.15 C 495.84 41.15 495.17 40.29 495.17 39.10 L 495.17 29.02 C 495.17 25.10 497.03 22.02 500.07 19.81 C 502.27 18.44 504.30 17.76 506.49 17.76 Z M 458.15 24.41 L 462.72 19.81 C 463.22 19.46 464.74 17.59 465.42 17.59 L 466.10 17.59 C 466.94 17.76 467.62 18.27 467.62 19.29 L 467.62 19.63 C 467.62 20.32 466.77 21.00 466.43 21.51 C 465.59 22.54 464.58 23.39 463.73 24.41 L 459.00 29.20 L 465.08 35.34 L 466.77 37.05 L 467.45 37.73 C 467.62 38.07 467.79 38.24 467.79 38.59 L 467.79 39.10 C 467.62 39.95 466.94 40.63 466.10 40.63 L 465.76 40.63 C 465.08 40.63 464.41 39.95 463.90 39.44 C 463.05 38.59 462.04 37.73 461.20 36.71 L 458.15 33.81 L 458.15 38.59 C 458.15 39.61 457.48 40.63 456.29 40.63 L 455.96 40.63 C 454.77 40.63 454.10 39.78 454.10 38.59 L 454.10 12.29 C 454.10 11.27 454.77 10.41 455.96 10.41 L 456.29 10.41 C 457.48 10.41 458.15 11.27 458.15 12.29 L 458.15 24.41 Z M 445.65 21.85 C 445.14 21.51 443.96 21.51 443.28 21.51 C 440.07 21.34 437.70 23.22 436.35 26.12 C 435.84 27.15 435.67 28.17 435.67 29.37 C 435.67 32.78 437.36 35.17 440.41 36.54 C 441.42 37.05 442.94 37.22 444.12 37.22 C 445.14 37.22 446.66 36.54 447.50 36.20 L 448.35 36.20 C 449.19 36.37 449.87 36.88 449.87 37.90 L 449.87 38.24 C 449.87 40.63 445.48 41.15 443.96 41.32 C 438.21 41.66 433.81 38.42 432.12 32.95 C 431.79 31.93 431.79 31.07 431.79 30.05 L 431.79 29.20 C 431.79 24.93 433.81 21.51 437.53 19.46 C 439.22 18.44 441.08 17.93 443.11 17.93 L 443.96 17.93 C 445.98 17.93 448.01 18.44 449.70 19.63 L 449.87 19.81 L 450.04 19.98 C 450.21 20.32 450.38 20.66 450.38 21.00 L 450.38 21.34 C 450.38 22.37 449.70 22.88 448.69 23.05 L 448.52 23.05 C 447.34 22.71 445.98 22.02 445.65 21.85 Z M 410.15 29.20 C 410.15 32.10 411.67 34.32 414.04 35.85 C 415.22 36.54 416.57 36.88 417.93 36.88 C 420.80 36.88 423.00 35.34 424.52 32.95 C 425.19 31.76 425.53 30.39 425.53 29.02 C 425.53 26.29 424.18 24.07 421.98 22.54 C 420.80 21.68 419.28 21.34 417.93 21.34 C 414.71 21.34 412.35 23.05 411.00 25.95 C 410.15 27.15 410.15 28.17 410.15 29.20 Z M 417.25 17.59 L 417.76 17.59 C 422.32 17.59 425.70 19.81 427.90 23.73 C 428.74 25.27 429.25 26.98 429.25 28.85 L 429.25 29.71 C 429.25 33.98 427.22 37.39 423.50 39.44 C 421.81 40.46 419.95 40.98 417.93 40.98 L 417.08 40.98 C 412.86 40.98 409.47 38.93 407.45 35.17 C 406.43 33.46 405.93 31.59 405.93 29.54 L 405.93 28.68 C 405.93 24.41 407.95 21.00 411.67 18.95 C 413.53 18.10 415.22 17.59 417.25 17.59 Z M 384.46 29.20 C 384.46 32.27 385.98 34.66 388.69 36.02 C 389.70 36.54 390.88 36.88 392.23 36.88 C 395.28 36.88 397.47 35.51 399.00 32.95 C 399.67 31.76 400.01 30.39 400.01 29.02 C 400.01 26.29 398.83 24.24 396.63 22.71 C 395.28 21.85 393.92 21.34 392.23 21.34 C 389.02 21.34 386.66 23.05 385.30 25.95 C 384.80 27.15 384.46 28.17 384.46 29.20 Z M 400.01 20.49 L 400.01 12.12 C 400.01 11.10 400.69 10.07 401.87 10.07 L 402.21 10.07 C 403.39 10.07 404.07 10.93 404.07 12.12 L 404.07 29.71 C 404.07 33.98 402.04 37.39 398.32 39.44 C 396.63 40.46 394.77 40.98 392.74 40.98 L 391.90 40.98 C 387.67 40.98 384.29 38.93 382.26 35.17 C 381.25 33.46 380.74 31.59 380.74 29.54 L 380.74 28.68 C 380.74 24.41 382.77 21.00 386.49 18.95 C 388.18 17.93 390.04 17.41 392.07 17.41 L 392.91 17.41 C 395.45 17.59 397.98 18.61 400.01 20.49 Z M 400.01 20.49" stroke="none" fill="currentColor"  />
<path d="M 534.55 3.23 L 639.97 3.23 L 639.97 38.37 L 587.26 38.37 L 587.26 44.23 L 563.83 44.23 L 563.83 38.37 L 534.55 38.37 L 534.55 3.23 Z M 540.40 32.52 L 552.12 32.52 L 552.12 14.95 L 557.97 14.95 L 557.97 32.52 L 563.83 32.52 L 563.83 9.09 L 540.40 9.09 L 540.40 32.52 Z M 569.69 9.09 L 569.69 38.37 L 581.40 38.37 L 581.40 32.52 L 593.12 32.52 L 593.12 9.09 L 569.69 9.09 Z M 581.40 14.95 L 587.26 14.95 L 587.26 26.66 L 581.40 26.66 L 581.40 14.95 Z M 598.97 9.09 L 598.97 32.52 L 610.69 32.52 L 610.69 14.95 L 616.55 14.95 L 616.55 32.52 L 622.40 32.52 L 622.40 14.95 L 628.26 14.95 L 628.26 32.52 L 634.12 32.52 L 634.12 9.09 L 598.97 9.09 Z M 598.97 9.09" stroke="none" fill="currentColor"  />
<path d="M 22.37 17.24 C 22.37 18.21 22.47 19.01 22.66 19.59 C 22.87 20.17 23.13 20.80 23.50 21.49 C 23.63 21.70 23.69 21.91 23.69 22.10 C 23.69 22.36 23.53 22.62 23.19 22.89 L 21.52 24.00 C 21.29 24.15 21.05 24.23 20.84 24.23 C 20.57 24.23 20.31 24.10 20.04 23.86 C 19.68 23.47 19.36 23.05 19.09 22.62 C 18.83 22.17 18.57 21.67 18.28 21.07 C 16.22 23.49 13.63 24.71 10.51 24.71 C 8.30 24.71 6.53 24.08 5.24 22.81 C 3.94 21.54 3.28 19.85 3.28 17.74 C 3.28 15.50 4.07 13.67 5.68 12.30 C 7.29 10.93 9.43 10.24 12.15 10.24 C 13.05 10.24 13.97 10.32 14.95 10.45 C 15.93 10.59 16.93 10.80 17.99 11.03 L 17.99 9.11 C 17.99 7.10 17.56 5.70 16.74 4.88 C 15.90 4.07 14.47 3.67 12.44 3.67 C 11.52 3.67 10.57 3.77 9.59 4.01 C 8.61 4.25 7.66 4.54 6.74 4.91 C 6.32 5.09 6.00 5.20 5.82 5.25 C 5.63 5.31 5.50 5.33 5.39 5.33 C 5.02 5.33 4.84 5.07 4.84 4.51 L 4.84 3.22 C 4.84 2.80 4.89 2.48 5.02 2.30 C 5.16 2.11 5.39 1.93 5.76 1.74 C 6.69 1.27 7.80 0.87 9.09 0.55 C 10.38 0.21 11.76 0.05 13.21 0.05 C 16.35 0.05 18.65 0.77 20.12 2.19 C 21.58 3.62 22.31 5.78 22.31 8.69 L 22.31 17.24 Z M 11.65 21.25 C 12.52 21.25 13.42 21.09 14.37 20.78 C 15.32 20.46 16.16 19.88 16.88 19.09 C 17.30 18.58 17.62 18.03 17.77 17.40 C 17.93 16.76 18.04 16.00 18.04 15.10 L 18.04 13.99 C 17.27 13.81 16.45 13.65 15.61 13.54 C 14.77 13.44 13.95 13.38 13.13 13.38 C 11.36 13.38 10.07 13.73 9.20 14.44 C 8.32 15.15 7.90 16.16 7.90 17.48 C 7.90 18.72 8.22 19.64 8.88 20.27 C 9.51 20.93 10.44 21.25 11.65 21.25 Z M 32.85 24.10 C 32.37 24.10 32.06 24.02 31.84 23.84 C 31.63 23.68 31.45 23.31 31.29 22.81 L 25.09 2.40 C 24.93 1.87 24.85 1.53 24.85 1.35 C 24.85 0.92 25.06 0.69 25.48 0.69 L 28.07 0.69 C 28.57 0.69 28.91 0.77 29.10 0.95 C 29.31 1.11 29.47 1.48 29.63 1.98 L 34.06 19.46 L 38.18 1.98 C 38.31 1.45 38.47 1.11 38.68 0.95 C 38.89 0.79 39.26 0.69 39.74 0.69 L 41.85 0.69 C 42.35 0.69 42.69 0.77 42.91 0.95 C 43.12 1.11 43.30 1.48 43.41 1.98 L 47.58 19.67 L 52.14 1.98 C 52.30 1.45 52.49 1.11 52.67 0.95 C 52.88 0.79 53.23 0.69 53.70 0.69 L 56.16 0.69 C 56.58 0.69 56.82 0.90 56.82 1.35 C 56.82 1.48 56.79 1.61 56.76 1.77 C 56.74 1.93 56.69 2.14 56.58 2.43 L 50.22 22.83 C 50.06 23.36 49.87 23.71 49.66 23.86 C 49.45 24.02 49.11 24.13 48.66 24.13 L 46.39 24.13 C 45.89 24.13 45.55 24.05 45.33 23.86 C 45.12 23.68 44.94 23.34 44.83 22.81 L 40.74 5.78 L 36.68 22.78 C 36.54 23.31 36.39 23.65 36.17 23.84 C 35.96 24.02 35.59 24.10 35.12 24.10 L 32.85 24.10 Z M 66.77 24.81 C 65.40 24.81 64.02 24.66 62.70 24.34 C 61.38 24.02 60.35 23.68 59.67 23.28 C 59.25 23.05 58.96 22.78 58.85 22.54 C 58.74 22.31 58.69 22.04 58.69 21.80 L 58.69 20.46 C 58.69 19.90 58.90 19.64 59.30 19.64 C 59.46 19.64 59.62 19.67 59.77 19.72 C 59.93 19.77 60.17 19.88 60.43 19.98 C 61.33 20.38 62.31 20.70 63.34 20.91 C 64.39 21.12 65.42 21.22 66.48 21.22 C 68.14 21.22 69.44 20.93 70.33 20.35 C 71.23 19.77 71.71 18.93 71.71 17.85 C 71.71 17.11 71.47 16.50 70.99 16.00 C 70.52 15.50 69.62 15.05 68.33 14.62 L 64.50 13.44 C 62.57 12.83 61.15 11.93 60.28 10.74 C 59.40 9.58 58.96 8.29 58.96 6.92 C 58.96 5.81 59.19 4.83 59.67 3.99 C 60.14 3.14 60.78 2.40 61.57 1.82 C 62.36 1.21 63.26 0.77 64.31 0.45 C 65.37 0.13 66.48 0.00 67.64 0.00 C 68.22 0.00 68.83 0.03 69.41 0.11 C 70.02 0.18 70.57 0.29 71.13 0.40 C 71.65 0.53 72.15 0.66 72.63 0.82 C 73.11 0.98 73.47 1.14 73.74 1.29 C 74.11 1.50 74.37 1.72 74.53 1.95 C 74.69 2.16 74.77 2.46 74.77 2.82 L 74.77 4.07 C 74.77 4.62 74.56 4.91 74.16 4.91 C 73.95 4.91 73.61 4.80 73.16 4.59 C 71.65 3.91 69.96 3.56 68.09 3.56 C 66.58 3.56 65.40 3.80 64.58 4.30 C 63.76 4.80 63.34 5.57 63.34 6.65 C 63.34 7.39 63.60 8.03 64.13 8.53 C 64.66 9.03 65.63 9.53 67.03 9.98 L 70.78 11.17 C 72.68 11.77 74.06 12.62 74.87 13.70 C 75.69 14.78 76.09 16.02 76.09 17.40 C 76.09 18.53 75.85 19.56 75.40 20.46 C 74.93 21.36 74.29 22.15 73.47 22.78 C 72.66 23.44 71.68 23.92 70.54 24.26 C 69.36 24.63 68.12 24.81 66.77 24.81 Z M 66.77 24.81" stroke="none" fill="currentColor"  />
<path d="M 71.76 37.64 C 63.07 44.06 50.46 47.46 39.61 47.46 C 24.40 47.46 10.70 41.84 0.35 32.50 C -0.47 31.76 0.27 30.75 1.25 31.33 C 12.44 37.83 26.25 41.76 40.53 41.76 C 50.16 41.76 60.75 39.76 70.49 35.64 C 71.94 34.98 73.18 36.59 71.76 37.64 Z M 71.76 37.64" stroke="none" fill="currentColor"  />
<path d="M 75.38 33.53 C 74.27 32.10 68.04 32.84 65.21 33.18 C 64.37 33.29 64.24 32.55 65.00 31.99 C 69.96 28.51 78.12 29.51 79.07 30.67 C 80.02 31.86 78.81 40.02 74.16 43.93 C 73.45 44.53 72.76 44.22 73.08 43.43 C 74.13 40.81 76.48 34.92 75.38 33.53 Z M 75.38 33.53" stroke="none" fill="currentColor"  />
</svg>
<!-- MAGIC:END -->

## Documentation

In addition to this README, there is a simple
[Demo](https://moviemasher.com/docs/demo/index.html) of the system and
[more extensive documentation](https://moviemasher.com/docs/index.html) available on
[MovieMasher.com](https://moviemasher.com/). Inline documentation and code completion is
also available when using a code editor that supports TypeScript and IntelliSense.

## Installation

The following shell command installs the server, client, and core libraries to your NPM project,
saving them to the `dependencies` array in your **package.json** file.

```shell
npm install @moviemasher/client-react @moviemasher/server-express --save
```

## Inclusion

From your HTML file link to both the compiled JavaScript and CSS files.
To support the widest variety of workflows and tooling, the Cascading Style Sheets
required to layout the client user interface are kept separate from JavaScript code:

<fieldset>
<legend>index.html</legend>
<!-- MAGIC:START (TRIMCODE:src=workspaces/example-react/dist/index.html) -->

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <script src='index.js' defer></script>
    <link href='index.css' rel='stylesheet'>
    <style>
      body { margin: 0px; padding: 0px; font-family: sans-serif; }
      body, #app { width: 100vw; height: 100vh; display: flex; }
    </style>
    <title>Movie Masher</title>
  </head>
  <body>
    <div id='app' class='moviemasher'></div>
  </body>
</html>
```
<!-- MAGIC:END -->
</fieldset>

Since most of the interface elements scroll and stretch both horizontally and
vertically, we are rendering into a node that is styled to fill the whole window. We also
apply the `moviemasher` class to the node, so the additional styles in the CSS file are engaged.
Learn more about coloring and sizing the user interface using CSS in the
[Style Guide](https://moviemasher.com/docs/Style.html).

## Usage

Within our JavaScript code we render the editor, and can optionally define media assets that will
appear within the Browser. Several Themes and Effects are predefined, as
well as a single Font - but no Images, Video, or Audio will appear in the Browser by default.

<fieldset>

<legend>index.tsx</legend>

<!-- MAGIC:START (TRIMCODE:src=workspaces/example-react/index.tsx) -->

```tsx
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import {
  DefaultIcons, Masher, MasherDefault, MasherDefaultOptions
} from "@moviemasher/client-react"

import "@moviemasher/client-react/dist/moviemasher.css"

const options: MasherDefaultOptions = { icons: DefaultIcons }
const masher = <Masher {...MasherDefault(options)} />
const mode = <StrictMode>{masher}</StrictMode>
ReactDOM.render(mode, document.getElementById('app'))
```
<!-- MAGIC:END -->
</fieldset>

In this example we're using the
[MasherDefault](https://moviemasher.com/docs/function/MasherDefault.html) function to
populate the [Masher](https://moviemasher.com/docs/component/Masher.html) component with
preconfigured children, utilizing icons specified in the
[DefaultIcons](https://moviemasher.com/docs/variable/DefaultIcons.html) object.

Alternatively, child components like
[Player](https://moviemasher.com/docs/component/Player.html),
[Browser](https://moviemasher.com/docs/component/Browser.html),
[Timeline](https://moviemasher.com/docs/component/Timeline.html), and
[Inspector](https://moviemasher.com/docs/component/Inspector.html) can be
selectively provided, and manually configured with a selection of available child controls.
Learn more about building a fully customized video application in the
[Layout Guide](https://moviemasher.com/docs/Layout.html).

## Development

The following Git command will copy the entire Git project to your local machine,
complete with examples, tests, and documentation:

```shell
git clone https://github.com/moviemasher/moviemasher.js.git
```

The following NPM commands can be executed to install all needed dependencies, build
JavaScript from the TypeScript codebase, and launch a local development server:

```shell
npm install
npm run build
npm start
```

You can then load Movie Masher by navigating your web browser to
[http://localhost:8570](http://localhost:8570) and supplying any username/password
combination when prompted. Learn more about building your own customized server in the
[Integration Guide](https://moviemasher.com/docs/Integration.html).

## Contributing

Please join in the shareable economy by gifting your efforts towards improving this
project in any way you feel inclined. Pull requests for fixes, features and refactorings
are always appreciated, as are documentation updates. Creative help with graphics, video
and the web site is also needed - please [send an email](mailto:connect27@moviemasher.com)
to discuss your ideas.

## Feedback

If any problems arise while utilizing the Movie Masher repository, a
[GitHub Issue Ticket](https://github.com/moviemasher/moviemasher.js/issues) should be filed.
Further support is occassionally provided to particular projects on an hourly basis - please
[send an email](mailto:connect27@moviemasher.com) describing your intended usage.
