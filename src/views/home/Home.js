import React from 'react';

import './Home.css';
import Map from '../../components/Map'
import Map3D from '../../components/three/3DMap'

// Main Home Component
const Home = () => {
  return(
      <div className="Home" style={{height: '95.5vh'}}>

        {/* <svg style={{margin: "auto", background: "#3a4964", display: "block", zIndex:1, position: "absolute"}} width="100%" height="100%" preserveAspectRatio="xMidYMid">
          <g transform="translate(1280,649) scale(1,1) translate(-1280,-649)">
            <path d="M-100 173.08C-6.8 193.29 -4.08 187.31 84 187.31S179.83 181.02 268 181.02S363.45 176.68 452 176.68S545.62 177.92 636 177.92S730.54 181.89 820 181.89S916.08 185.35 1004 185.35S1096.31 174.85 1188 174.85S1283.13 181.88 1372 181.88S1464.53 161.64 1556 161.64S1651.11 192 1740 192S1832.18 191.43 1924 191.43S2018.19 194.32 2108 194.32S2200.27 172.6 2292 172.6S2385.24 184.47 2476 184.47S2568.62 173.66 2660 173.66S2756.13 178.57 2844 178.57L2660 1298 L-100 1298 Z" fill="#1d3f72" strokeWidth="0">
              <animate attributeName="d" dur="17.647058823529413s" repeatCount="indefinite" values="M-100 173.08C-6.8 193.29 -4.08 187.31 84 187.31S179.83 181.02 268 181.02S363.45 176.68 452 176.68S545.62 177.92 636 177.92S730.54 181.89 820 181.89S916.08 185.35 1004 185.35S1096.31 174.85 1188 174.85S1283.13 181.88 1372 181.88S1464.53 161.64 1556 161.64S1651.11 192 1740 192S1832.18 191.43 1924 191.43S2018.19 194.32 2108 194.32S2200.27 172.6 2292 172.6S2385.24 184.47 2476 184.47S2568.62 173.66 2660 173.66S2756.13 178.57 2844 178.57L2660 1298 L-100 1298 Z;M-100 174.65C-6.51 186.04 -7.78 185.05 84 185.05S179.65 157.57 268 157.57S360.11 170.18 452 170.18S548.07 159.59 636 159.59S731.28 179.6 820 179.6S913.64 158.92 1004 158.92S1098.3 182.47 1188 182.47S1281.58 160.1 1372 160.1S1464.15 180.45 1556 180.45S1648.49 166.96 1740 166.96S1833.42 186.13 1924 186.13S2019.72 192.62 2108 192.62S2200.56 173.15 2292 173.15S2385.25 174.03 2476 174.03S2571.55 164.25 2660 164.25S2753.28 172.36 2844 172.36L2660 1298 L-100 1298 Z;M-100 173.08C-6.8 193.29 -4.08 187.31 84 187.31S179.83 181.02 268 181.02S363.45 176.68 452 176.68S545.62 177.92 636 177.92S730.54 181.89 820 181.89S916.08 185.35 1004 185.35S1096.31 174.85 1188 174.85S1283.13 181.88 1372 181.88S1464.53 161.64 1556 161.64S1651.11 192 1740 192S1832.18 191.43 1924 191.43S2018.19 194.32 2108 194.32S2200.27 172.6 2292 172.6S2385.24 184.47 2476 184.47S2568.62 173.66 2660 173.66S2756.13 178.57 2844 178.57L2660 1298 L-100 1298 Z"></animate>
              <animateTransform attributeName="transform" type="translate" dur="17.647058823529413s" begin="0s" repeatCount="indefinite" values="0;10;0" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1"></animateTransform>
            </path><path d="M-100 212.48C-2.19 218.38 -4.14 237.44 87.33 237.44S183.37 220.66 274.66 220.66S369.66 238.19 461.99 238.19S558.41 215.88 649.32 215.88S743.77 250.94 836.65 250.94S931.75 239.49 1023.98 239.49S1118.14 219.45 1211.31 219.45S1308.33 241.17 1398.64 241.17S1494.5 218.2 1585.97 218.2S1679.7 242.93 1773.3 242.93S1870.3 227.71 1960.63 227.71S2054.63 226.41 2147.96 226.41S2244.26 227.31 2335.29 227.31S2430.42 222.67 2522.62 222.67S2618.19 222.78 2709.95 222.78L2660 1298 L-100 1298 Z" fill="#214578" strokeWidth="0">
              <animate attributeName="d" dur="16.47058823529412s" repeatCount="indefinite" values="M-100 212.48C-2.19 218.38 -4.14 237.44 87.33 237.44S183.37 220.66 274.66 220.66S369.66 238.19 461.99 238.19S558.41 215.88 649.32 215.88S743.77 250.94 836.65 250.94S931.75 239.49 1023.98 239.49S1118.14 219.45 1211.31 219.45S1308.33 241.17 1398.64 241.17S1494.5 218.2 1585.97 218.2S1679.7 242.93 1773.3 242.93S1870.3 227.71 1960.63 227.71S2054.63 226.41 2147.96 226.41S2244.26 227.31 2335.29 227.31S2430.42 222.67 2522.62 222.67S2618.19 222.78 2709.95 222.78L2660 1298 L-100 1298 Z;M-100 229.83C-3.16 235.82 -3.17 240.16 87.33 240.16S183.8 241.14 274.66 241.14S372.49 214.69 461.99 214.69S557.99 250.55 649.32 250.55S744 228.05 836.65 228.05S934.22 218.1 1023.98 218.1S1117.84 249.37 1211.31 249.37S1307.84 232.49 1398.64 232.49S1493.48 234.14 1585.97 234.14S1680.89 240.56 1773.3 240.56S1867.11 242.15 1960.63 242.15S2058.45 252.17 2147.96 252.17S2245.29 228.33 2335.29 228.33S2433.13 225.61 2522.62 225.61S2620.01 243.9 2709.95 243.9L2660 1298 L-100 1298 Z;M-100 212.48C-2.19 218.38 -4.14 237.44 87.33 237.44S183.37 220.66 274.66 220.66S369.66 238.19 461.99 238.19S558.41 215.88 649.32 215.88S743.77 250.94 836.65 250.94S931.75 239.49 1023.98 239.49S1118.14 219.45 1211.31 219.45S1308.33 241.17 1398.64 241.17S1494.5 218.2 1585.97 218.2S1679.7 242.93 1773.3 242.93S1870.3 227.71 1960.63 227.71S2054.63 226.41 2147.96 226.41S2244.26 227.31 2335.29 227.31S2430.42 222.67 2522.62 222.67S2618.19 222.78 2709.95 222.78L2660 1298 L-100 1298 Z"></animate>
              <animateTransform attributeName="transform" type="translate" dur="16.47058823529412s" begin="-1.0980392156862746s" repeatCount="indefinite" values="0;10;0" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1"></animateTransform>
            </path><path d="M-100 288.07C-2.03 269.05 -1.35 287.16 90.78 287.16S188.03 276.13 281.57 276.13S379.77 297.57 472.35 297.57S569.47 285.07 663.13 285.07S762.63 287.93 853.92 287.93S950.08 289.16 1044.7 289.16S1144.06 279.09 1235.48 279.09S1333.71 302.89 1426.27 302.89S1523.17 299.22 1617.05 299.22S1715.56 294.52 1807.83 294.52S1903.87 292.61 1998.62 292.61S2098.04 293.6 2189.4 293.6S2285.5 278.33 2380.18 278.33S2479.12 297.96 2570.97 297.96S2669.65 280.42 2761.75 280.42L2660 1298 L-100 1298 Z" fill="#254a7f" strokeWidth="0">
              <animate attributeName="d" dur="15.294117647058824s" repeatCount="indefinite" values="M-100 288.07C-2.03 269.05 -1.35 287.16 90.78 287.16S188.03 276.13 281.57 276.13S379.77 297.57 472.35 297.57S569.47 285.07 663.13 285.07S762.63 287.93 853.92 287.93S950.08 289.16 1044.7 289.16S1144.06 279.09 1235.48 279.09S1333.71 302.89 1426.27 302.89S1523.17 299.22 1617.05 299.22S1715.56 294.52 1807.83 294.52S1903.87 292.61 1998.62 292.61S2098.04 293.6 2189.4 293.6S2285.5 278.33 2380.18 278.33S2479.12 297.96 2570.97 297.96S2669.65 280.42 2761.75 280.42L2660 1298 L-100 1298 Z;M-100 269.39C-2.11 296.21 -2.77 309.25 90.78 309.25S186.59 277.71 281.57 277.71S379.33 273.42 472.35 273.42S571.61 277.92 663.13 277.92S760.3 298.16 853.92 298.16S950.05 302.13 1044.7 302.13S1144.33 284.13 1235.48 284.13S1332.28 305.51 1426.27 305.51S1525.71 294.19 1617.05 294.19S1715.88 309.47 1807.83 309.47S1904.59 298.42 1998.62 298.42S2096.25 306.6 2189.4 306.6S2286.85 281.44 2380.18 281.44S2477.84 279.12 2570.97 279.12S2667.62 302.07 2761.75 302.07L2660 1298 L-100 1298 Z;M-100 288.07C-2.03 269.05 -1.35 287.16 90.78 287.16S188.03 276.13 281.57 276.13S379.77 297.57 472.35 297.57S569.47 285.07 663.13 285.07S762.63 287.93 853.92 287.93S950.08 289.16 1044.7 289.16S1144.06 279.09 1235.48 279.09S1333.71 302.89 1426.27 302.89S1523.17 299.22 1617.05 299.22S1715.56 294.52 1807.83 294.52S1903.87 292.61 1998.62 292.61S2098.04 293.6 2189.4 293.6S2285.5 278.33 2380.18 278.33S2479.12 297.96 2570.97 297.96S2669.65 280.42 2761.75 280.42L2660 1298 L-100 1298 Z"></animate>
              <animateTransform attributeName="transform" type="translate" dur="15.294117647058824s" begin="-2.03921568627451s" repeatCount="indefinite" values="0;10;0" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1"></animateTransform>
            </path><path d="M-100 328.37C-2.3 348.82 -1.97 364.17 94.37 364.17S194.02 329.56 288.73 329.56S386.39 351.41 483.1 351.41S582.6 332.21 677.46 332.21S775.28 340.07 871.83 340.07S971.02 362.34 1066.2 362.34S1167.2 362.23 1260.56 362.23S1358 336.42 1454.93 336.42S1555.41 366.57 1649.3 366.57S1750.03 363.18 1843.66 363.18S1944.76 347.88 2038.03 347.88S2138.06 346.4 2232.39 346.4S2329.81 360.14 2426.76 360.14S2525.58 343.83 2621.13 343.83S2721.65 336.9 2815.49 336.9L2660 1298 L-100 1298 Z" fill="#285085" strokeWidth="0">
              <animate attributeName="d" dur="14.117647058823529s" repeatCount="indefinite" values="M-100 328.37C-2.3 348.82 -1.97 364.17 94.37 364.17S194.02 329.56 288.73 329.56S386.39 351.41 483.1 351.41S582.6 332.21 677.46 332.21S775.28 340.07 871.83 340.07S971.02 362.34 1066.2 362.34S1167.2 362.23 1260.56 362.23S1358 336.42 1454.93 336.42S1555.41 366.57 1649.3 366.57S1750.03 363.18 1843.66 363.18S1944.76 347.88 2038.03 347.88S2138.06 346.4 2232.39 346.4S2329.81 360.14 2426.76 360.14S2525.58 343.83 2621.13 343.83S2721.65 336.9 2815.49 336.9L2660 1298 L-100 1298 Z;M-100 350.15C-2.08 340.11 -2.19 347.96 94.37 347.96S193.13 328.8 288.73 328.8S386.02 332.81 483.1 332.81S583.53 328.75 677.46 328.75S776.24 360.2 871.83 360.2S971.51 358.53 1066.2 358.53S1166.57 358.17 1260.56 358.17S1358.88 362.86 1454.93 362.86S1552.53 339.44 1649.3 339.44S1747.52 329.08 1843.66 329.08S1941.76 348.88 2038.03 348.88S2136.21 361.05 2232.39 361.05S2331.69 361.94 2426.76 361.94S2526.62 336.04 2621.13 336.04S2722.03 366.69 2815.49 366.69L2660 1298 L-100 1298 Z;M-100 328.37C-2.3 348.82 -1.97 364.17 94.37 364.17S194.02 329.56 288.73 329.56S386.39 351.41 483.1 351.41S582.6 332.21 677.46 332.21S775.28 340.07 871.83 340.07S971.02 362.34 1066.2 362.34S1167.2 362.23 1260.56 362.23S1358 336.42 1454.93 336.42S1555.41 366.57 1649.3 366.57S1750.03 363.18 1843.66 363.18S1944.76 347.88 2038.03 347.88S2138.06 346.4 2232.39 346.4S2329.81 360.14 2426.76 360.14S2525.58 343.83 2621.13 343.83S2721.65 336.9 2815.49 336.9L2660 1298 L-100 1298 Z"></animate>
              <animateTransform attributeName="transform" type="translate" dur="14.117647058823529s" begin="-2.8235294117647056s" repeatCount="indefinite" values="0;10;0" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1"></animateTransform>
            </path><path d="M-100 387.1C-0.3 396.15 -0.71 416.36 98.09 416.36S201.25 396.91 296.17 396.91S396.18 415.35 494.26 415.35S596.11 396.84 692.34 396.84S792.15 399.45 890.43 399.45S990.75 389.53 1088.52 389.53S1188.92 415.08 1286.6 415.08S1387.94 391.87 1484.69 391.87S1586.53 420.69 1682.78 420.69S1785.07 386.81 1880.86 386.81S1980.42 392.82 2078.95 392.82S2181.14 407.7 2277.03 407.7S2376.46 390.38 2475.12 390.38S2574.91 394.9 2673.21 394.9L2660 1298 L-100 1298 Z" fill="#2c568b" strokeWidth="0">
              <animate attributeName="d" dur="12.941176470588236s" repeatCount="indefinite" values="M-100 387.1C-0.3 396.15 -0.71 416.36 98.09 416.36S201.25 396.91 296.17 396.91S396.18 415.35 494.26 415.35S596.11 396.84 692.34 396.84S792.15 399.45 890.43 399.45S990.75 389.53 1088.52 389.53S1188.92 415.08 1286.6 415.08S1387.94 391.87 1484.69 391.87S1586.53 420.69 1682.78 420.69S1785.07 386.81 1880.86 386.81S1980.42 392.82 2078.95 392.82S2181.14 407.7 2277.03 407.7S2376.46 390.38 2475.12 390.38S2574.91 394.9 2673.21 394.9L2660 1298 L-100 1298 Z;M-100 410.78C2.87 405.83 3.26 415.65 98.09 415.65S198.15 411.02 296.17 411.02S397.21 382.68 494.26 382.68S593.58 406.77 692.34 406.77S795.16 400.61 890.43 400.61S989.74 412.95 1088.52 412.95S1187.59 423.11 1286.6 423.11S1388.62 402.02 1484.69 402.02S1585.38 410.94 1682.78 410.94S1785.69 409.16 1880.86 409.16S1983.64 417.48 2078.95 417.48S2180.28 423.11 2277.03 423.11S2377.04 411.44 2475.12 411.44S2575.93 420.01 2673.21 420.01L2660 1298 L-100 1298 Z;M-100 387.1C-0.3 396.15 -0.71 416.36 98.09 416.36S201.25 396.91 296.17 396.91S396.18 415.35 494.26 415.35S596.11 396.84 692.34 396.84S792.15 399.45 890.43 399.45S990.75 389.53 1088.52 389.53S1188.92 415.08 1286.6 415.08S1387.94 391.87 1484.69 391.87S1586.53 420.69 1682.78 420.69S1785.07 386.81 1880.86 386.81S1980.42 392.82 2078.95 392.82S2181.14 407.7 2277.03 407.7S2376.46 390.38 2475.12 390.38S2574.91 394.9 2673.21 394.9L2660 1298 L-100 1298 Z"></animate>
              <animateTransform attributeName="transform" type="translate" dur="12.941176470588236s" begin="-3.450980392156863s" repeatCount="indefinite" values="0;10;0" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1"></animateTransform>
            </path><path d="M-100 458.35C2.7 465.15 1.73 440.65 101.95 440.65S204.39 474.89 303.9 474.89S408.46 468.26 505.85 468.26S608.17 467.36 707.8 467.36S812.96 449.6 909.76 449.6S1011.99 468.07 1111.71 468.07S1215.49 444.84 1313.66 444.84S1416.74 448.48 1515.61 448.48S1620.78 450.58 1717.56 450.58S1818.88 471.54 1919.51 471.54S2023.53 442.84 2121.46 442.84S2224.07 475.89 2323.41 475.89S2424.83 456.72 2525.37 456.72S2629.24 437.23 2727.32 437.23L2660 1298 L-100 1298 Z" fill="#305b92" strokeWidth="0">
              <animate attributeName="d" dur="11.764705882352942s" repeatCount="indefinite" values="M-100 458.35C2.7 465.15 1.73 440.65 101.95 440.65S204.39 474.89 303.9 474.89S408.46 468.26 505.85 468.26S608.17 467.36 707.8 467.36S812.96 449.6 909.76 449.6S1011.99 468.07 1111.71 468.07S1215.49 444.84 1313.66 444.84S1416.74 448.48 1515.61 448.48S1620.78 450.58 1717.56 450.58S1818.88 471.54 1919.51 471.54S2023.53 442.84 2121.46 442.84S2224.07 475.89 2323.41 475.89S2424.83 456.72 2525.37 456.72S2629.24 437.23 2727.32 437.23L2660 1298 L-100 1298 Z;M-100 471.31C4.99 444.32 4.01 451.33 101.95 451.33S205.08 445.92 303.9 445.92S405.97 453.91 505.85 453.91S610.96 458.56 707.8 458.56S809.72 456.9 909.76 456.9S1011.28 475.38 1111.71 475.38S1213.4 475.42 1313.66 475.42S1416.26 463.43 1515.61 463.43S1617.78 453.51 1717.56 453.51S1821.35 467 1919.51 467S2023.6 471.37 2121.46 471.37S2222.79 472.29 2323.41 472.29S2425.98 473.97 2525.37 473.97S2628.57 475.81 2727.32 475.81L2660 1298 L-100 1298 Z;M-100 458.35C2.7 465.15 1.73 440.65 101.95 440.65S204.39 474.89 303.9 474.89S408.46 468.26 505.85 468.26S608.17 467.36 707.8 467.36S812.96 449.6 909.76 449.6S1011.99 468.07 1111.71 468.07S1215.49 444.84 1313.66 444.84S1416.74 448.48 1515.61 448.48S1620.78 450.58 1717.56 450.58S1818.88 471.54 1919.51 471.54S2023.53 442.84 2121.46 442.84S2224.07 475.89 2323.41 475.89S2424.83 456.72 2525.37 456.72S2629.24 437.23 2727.32 437.23L2660 1298 L-100 1298 Z"></animate>
              <animateTransform attributeName="transform" type="translate" dur="11.764705882352942s" begin="-3.9215686274509807s" repeatCount="indefinite" values="0;10;0" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1"></animateTransform>
            </path><path d="M-100 493.69C4.45 526.82 4.82 524.25 105.97 524.25S211.78 497.52 311.94 497.52S419.14 514.49 517.91 514.49S622.1 510.8 723.88 510.8S828.23 524.74 929.85 524.74S1034.8 513.35 1135.82 513.35S1241.16 515.79 1341.79 515.79S1447.7 514.35 1547.76 514.35S1650.77 494.19 1753.73 494.19S1859.58 535.25 1959.7 535.25S2066.42 501.04 2165.67 501.04S2271.22 511.47 2371.64 511.47S2474.63 528.94 2577.61 528.94S2682.32 523.15 2783.58 523.15L2660 1298 L-100 1298 Z" fill="#346198" strokeWidth="0">
              <animate attributeName="d" dur="10.588235294117647s" repeatCount="indefinite" values="M-100 493.69C4.45 526.82 4.82 524.25 105.97 524.25S211.78 497.52 311.94 497.52S419.14 514.49 517.91 514.49S622.1 510.8 723.88 510.8S828.23 524.74 929.85 524.74S1034.8 513.35 1135.82 513.35S1241.16 515.79 1341.79 515.79S1447.7 514.35 1547.76 514.35S1650.77 494.19 1753.73 494.19S1859.58 535.25 1959.7 535.25S2066.42 501.04 2165.67 501.04S2271.22 511.47 2371.64 511.47S2474.63 528.94 2577.61 528.94S2682.32 523.15 2783.58 523.15L2660 1298 L-100 1298 Z;M-100 523.98C3.37 496.63 6.73 534.13 105.97 534.13S211.89 507.11 311.94 507.11S417.79 528.24 517.91 528.24S623.66 494.87 723.88 494.87S828.48 494.96 929.85 494.96S1035.74 533.14 1135.82 533.14S1238.95 498.56 1341.79 498.56S1445.36 519.84 1547.76 519.84S1654.71 520.92 1753.73 520.92S1858.79 497.88 1959.7 497.88S2065.23 499.49 2165.67 499.49S2268.69 513.17 2371.64 513.17S2477.17 495.75 2577.61 495.75S2684.12 494.33 2783.58 494.33L2660 1298 L-100 1298 Z;M-100 493.69C4.45 526.82 4.82 524.25 105.97 524.25S211.78 497.52 311.94 497.52S419.14 514.49 517.91 514.49S622.1 510.8 723.88 510.8S828.23 524.74 929.85 524.74S1034.8 513.35 1135.82 513.35S1241.16 515.79 1341.79 515.79S1447.7 514.35 1547.76 514.35S1650.77 494.19 1753.73 494.19S1859.58 535.25 1959.7 535.25S2066.42 501.04 2165.67 501.04S2271.22 511.47 2371.64 511.47S2474.63 528.94 2577.61 528.94S2682.32 523.15 2783.58 523.15L2660 1298 L-100 1298 Z"></animate>
              <animateTransform attributeName="transform" type="translate" dur="10.588235294117647s" begin="-4.235294117647059s" repeatCount="indefinite" values="0;10;0" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1"></animateTransform>
            </path><path d="M-100 569.94C5.82 552.88 6.91 582.47 110.15 582.47S217.81 574.7 320.3 574.7S429.1 580.59 530.46 580.59S637.64 552.96 740.61 552.96S847.2 562.61 950.76 562.61S1058.11 579.72 1160.91 579.72S1267.83 580.68 1371.07 580.68S1476.51 584.62 1581.22 584.62S1690.47 552.54 1791.37 552.54S1898.81 590.73 2001.52 590.73S2109.31 579.39 2211.68 579.39S2317.99 549.72 2421.83 549.72S2529.53 589.7 2631.98 589.7S2739.99 583.95 2842.13 583.95L2660 1298 L-100 1298 Z" fill="#37679e" strokeWidth="0">
              <animate attributeName="d" dur="9.411764705882353s" repeatCount="indefinite" values="M-100 569.94C5.82 552.88 6.91 582.47 110.15 582.47S217.81 574.7 320.3 574.7S429.1 580.59 530.46 580.59S637.64 552.96 740.61 552.96S847.2 562.61 950.76 562.61S1058.11 579.72 1160.91 579.72S1267.83 580.68 1371.07 580.68S1476.51 584.62 1581.22 584.62S1690.47 552.54 1791.37 552.54S1898.81 590.73 2001.52 590.73S2109.31 579.39 2211.68 579.39S2317.99 549.72 2421.83 549.72S2529.53 589.7 2631.98 589.7S2739.99 583.95 2842.13 583.95L2660 1298 L-100 1298 Z;M-100 591.44C9 563.43 8.19 558.01 110.15 558.01S215.55 556.65 320.3 556.65S429.13 589.16 530.46 589.16S638.01 552.9 740.61 552.9S849.7 590.26 950.76 590.26S1057.4 555.59 1160.91 555.59S1270.06 556.92 1371.07 556.92S1478.36 566.89 1581.22 566.89S1686.59 564.4 1791.37 564.4S1897.77 585.41 2001.52 585.41S2110.28 552.8 2211.68 552.8S2317.41 577.59 2421.83 577.59S2528.38 584.97 2631.98 584.97S2738.11 575.68 2842.13 575.68L2660 1298 L-100 1298 Z;M-100 569.94C5.82 552.88 6.91 582.47 110.15 582.47S217.81 574.7 320.3 574.7S429.1 580.59 530.46 580.59S637.64 552.96 740.61 552.96S847.2 562.61 950.76 562.61S1058.11 579.72 1160.91 579.72S1267.83 580.68 1371.07 580.68S1476.51 584.62 1581.22 584.62S1690.47 552.54 1791.37 552.54S1898.81 590.73 2001.52 590.73S2109.31 579.39 2211.68 579.39S2317.99 549.72 2421.83 549.72S2529.53 589.7 2631.98 589.7S2739.99 583.95 2842.13 583.95L2660 1298 L-100 1298 Z"></animate>
              <animateTransform attributeName="transform" type="translate" dur="9.411764705882353s" begin="-4.392156862745098s" repeatCount="indefinite" values="0;10;0" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1"></animateTransform>
            </path><path d="M-100 607.59C8.27 634.48 8.31 635.56 114.51 635.56S225.83 624.23 329.02 624.23S438.99 638.61 543.52 638.61S651.23 646.71 758.03 646.71S867.25 646.43 972.54 646.43S1082.98 634.72 1187.05 634.72S1297.72 632.95 1401.55 632.95S1512.61 631.62 1616.06 631.62S1726.74 628.93 1830.57 628.93S1941.58 607.29 2045.08 607.29S2152.73 632.59 2259.59 632.59S2367.85 643.35 2474.09 643.35S2585.37 623.51 2688.6 623.51L2660 1298 L-100 1298 Z" fill="#3b6da5" strokeWidth="0">
              <animate attributeName="d" dur="8.23529411764706s" repeatCount="indefinite" values="M-100 607.59C8.27 634.48 8.31 635.56 114.51 635.56S225.83 624.23 329.02 624.23S438.99 638.61 543.52 638.61S651.23 646.71 758.03 646.71S867.25 646.43 972.54 646.43S1082.98 634.72 1187.05 634.72S1297.72 632.95 1401.55 632.95S1512.61 631.62 1616.06 631.62S1726.74 628.93 1830.57 628.93S1941.58 607.29 2045.08 607.29S2152.73 632.59 2259.59 632.59S2367.85 643.35 2474.09 643.35S2585.37 623.51 2688.6 623.51L2660 1298 L-100 1298 Z;M-100 626.7C10.91 610.17 11.48 626.13 114.51 626.13S224.89 624.22 329.02 624.22S436.69 633.79 543.52 633.79S654.74 624.43 758.03 624.43S867.69 616.54 972.54 616.54S1081.66 612.01 1187.05 612.01S1297.94 612.22 1401.55 612.22S1510.83 615.9 1616.06 615.9S1725.49 635.73 1830.57 635.73S1940.58 619.6 2045.08 619.6S2152.88 626.85 2259.59 626.85S2367.45 640.62 2474.09 640.62S2584.32 636.17 2688.6 636.17L2660 1298 L-100 1298 Z;M-100 607.59C8.27 634.48 8.31 635.56 114.51 635.56S225.83 624.23 329.02 624.23S438.99 638.61 543.52 638.61S651.23 646.71 758.03 646.71S867.25 646.43 972.54 646.43S1082.98 634.72 1187.05 634.72S1297.72 632.95 1401.55 632.95S1512.61 631.62 1616.06 631.62S1726.74 628.93 1830.57 628.93S1941.58 607.29 2045.08 607.29S2152.73 632.59 2259.59 632.59S2367.85 643.35 2474.09 643.35S2585.37 623.51 2688.6 623.51L2660 1298 L-100 1298 Z"></animate>
              <animateTransform attributeName="transform" type="translate" dur="8.23529411764706s" begin="-4.392156862745098s" repeatCount="indefinite" values="0;10;0" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1"></animateTransform>
            </path><path d="M-100 697.55C11.78 670.97 11.32 667.15 119.05 667.15S230.51 662.75 338.1 662.75S451.84 677.71 557.14 677.71S667.77 680.65 776.19 680.65S886.19 690.73 995.24 690.73S1105.63 662.43 1214.29 662.43S1325.44 674.36 1433.33 674.36S1546.01 673 1652.38 673S1765.82 692.74 1871.43 692.74S1982.91 688.28 2090.48 688.28S2201.56 666.95 2309.52 666.95S2419.58 703.62 2528.57 703.62S2640.49 675.76 2747.62 675.76L2660 1298 L-100 1298 Z" fill="#3f73ab" strokeWidth="0">
              <animate attributeName="d" dur="7.0588235294117645s" repeatCount="indefinite" values="M-100 697.55C11.78 670.97 11.32 667.15 119.05 667.15S230.51 662.75 338.1 662.75S451.84 677.71 557.14 677.71S667.77 680.65 776.19 680.65S886.19 690.73 995.24 690.73S1105.63 662.43 1214.29 662.43S1325.44 674.36 1433.33 674.36S1546.01 673 1652.38 673S1765.82 692.74 1871.43 692.74S1982.91 688.28 2090.48 688.28S2201.56 666.95 2309.52 666.95S2419.58 703.62 2528.57 703.62S2640.49 675.76 2747.62 675.76L2660 1298 L-100 1298 Z;M-100 668.8C10.91 665.05 12.43 665.25 119.05 665.25S231.85 683.16 338.1 683.16S449.35 672.66 557.14 672.66S670.42 681.39 776.19 681.39S887.81 703.97 995.24 703.97S1108.78 697.69 1214.29 697.69S1324.38 674.49 1433.33 674.49S1546.93 677.17 1652.38 677.17S1763.66 672.58 1871.43 672.58S1981.93 700.46 2090.48 700.46S2201.49 701.45 2309.52 701.45S2421.54 673.37 2528.57 673.37S2641.83 684.02 2747.62 684.02L2660 1298 L-100 1298 Z;M-100 697.55C11.78 670.97 11.32 667.15 119.05 667.15S230.51 662.75 338.1 662.75S451.84 677.71 557.14 677.71S667.77 680.65 776.19 680.65S886.19 690.73 995.24 690.73S1105.63 662.43 1214.29 662.43S1325.44 674.36 1433.33 674.36S1546.01 673 1652.38 673S1765.82 692.74 1871.43 692.74S1982.91 688.28 2090.48 688.28S2201.56 666.95 2309.52 666.95S2419.58 703.62 2528.57 703.62S2640.49 675.76 2747.62 675.76L2660 1298 L-100 1298 Z"></animate>
              <animateTransform attributeName="transform" type="translate" dur="7.0588235294117645s" begin="-4.235294117647059s" repeatCount="indefinite" values="0;10;0" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1"></animateTransform>
            </path><path d="M-100 731.22C15.01 731.44 14.3 729.5 123.78 729.5S237.42 724.82 347.57 724.82S462.12 750.99 571.35 750.99S685.36 758.53 795.14 758.53S908.66 737.82 1018.92 737.82S1130.91 751.04 1242.7 751.04S1354.93 731.41 1466.49 731.41S1582.52 732.33 1690.27 732.33S1803.05 731.38 1914.05 731.38S2028.49 721.24 2137.84 721.24S2252.87 720.97 2361.62 720.97S2477.1 744.02 2585.41 744.02S2698.84 719.96 2809.19 719.96L2660 1298 L-100 1298 Z" fill="#4379b2" strokeWidth="0">
              <animate attributeName="d" dur="5.882352941176471s" repeatCount="indefinite" values="M-100 731.22C15.01 731.44 14.3 729.5 123.78 729.5S237.42 724.82 347.57 724.82S462.12 750.99 571.35 750.99S685.36 758.53 795.14 758.53S908.66 737.82 1018.92 737.82S1130.91 751.04 1242.7 751.04S1354.93 731.41 1466.49 731.41S1582.52 732.33 1690.27 732.33S1803.05 731.38 1914.05 731.38S2028.49 721.24 2137.84 721.24S2252.87 720.97 2361.62 720.97S2477.1 744.02 2585.41 744.02S2698.84 719.96 2809.19 719.96L2660 1298 L-100 1298 Z;M-100 752.66C14.81 721.14 13.42 747.85 123.78 747.85S236.6 726.65 347.57 726.65S462.49 737.64 571.35 737.64S685.74 758.99 795.14 758.99S908.08 718.25 1018.92 718.25S1133.55 728.7 1242.7 728.7S1355.03 730.36 1466.49 730.36S1580.86 747.09 1690.27 747.09S1805.98 756.14 1914.05 756.14S2029.47 738.62 2137.84 738.62S2253.95 740.74 2361.62 740.74S2473.77 728.74 2585.41 728.74S2698.59 756.08 2809.19 756.08L2660 1298 L-100 1298 Z;M-100 731.22C15.01 731.44 14.3 729.5 123.78 729.5S237.42 724.82 347.57 724.82S462.12 750.99 571.35 750.99S685.36 758.53 795.14 758.53S908.66 737.82 1018.92 737.82S1130.91 751.04 1242.7 751.04S1354.93 731.41 1466.49 731.41S1582.52 732.33 1690.27 732.33S1803.05 731.38 1914.05 731.38S2028.49 721.24 2137.84 721.24S2252.87 720.97 2361.62 720.97S2477.1 744.02 2585.41 744.02S2698.84 719.96 2809.19 719.96L2660 1298 L-100 1298 Z"></animate>
              <animateTransform attributeName="transform" type="translate" dur="5.882352941176471s" begin="-3.9215686274509807s" repeatCount="indefinite" values="0;10;0" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1"></animateTransform>
            </path><path d="M-100 782.4C15.19 801.47 18.18 804.13 128.73 804.13S245.42 785.52 357.46 785.52S474.4 807.72 586.19 807.72S702.52 775.72 814.92 775.72S930.21 787.25 1043.65 787.25S1159.71 797.94 1272.38 797.94S1388.43 815.43 1501.1 815.43S1618.96 797.74 1729.83 797.74S1848.05 803.04 1958.56 803.04S2073.52 789 2187.29 789S2304.86 800.03 2416.02 800.03S2533.32 793.9 2644.75 793.9S2761.77 775.23 2873.48 775.23L2660 1298 L-100 1298 Z" fill="#4780b8" strokeWidth="0">
              <animate attributeName="d" dur="4.705882352941177s" repeatCount="indefinite" values="M-100 782.4C15.19 801.47 18.18 804.13 128.73 804.13S245.42 785.52 357.46 785.52S474.4 807.72 586.19 807.72S702.52 775.72 814.92 775.72S930.21 787.25 1043.65 787.25S1159.71 797.94 1272.38 797.94S1388.43 815.43 1501.1 815.43S1618.96 797.74 1729.83 797.74S1848.05 803.04 1958.56 803.04S2073.52 789 2187.29 789S2304.86 800.03 2416.02 800.03S2533.32 793.9 2644.75 793.9S2761.77 775.23 2873.48 775.23L2660 1298 L-100 1298 Z;M-100 796.95C18.57 781.31 14.92 801.97 128.73 801.97S246.43 810.44 357.46 810.44S473.08 815.71 586.19 815.71S701.98 804.76 814.92 804.76S931.23 804.7 1043.65 804.7S1159.37 794.92 1272.38 794.92S1387.98 811.46 1501.1 811.46S1618.09 790.5 1729.83 790.5S1845.76 778.69 1958.56 778.69S2076.21 779.2 2187.29 779.2S2302.95 817.03 2416.02 817.03S2530.82 806.05 2644.75 806.05S2761.74 801.36 2873.48 801.36L2660 1298 L-100 1298 Z;M-100 782.4C15.19 801.47 18.18 804.13 128.73 804.13S245.42 785.52 357.46 785.52S474.4 807.72 586.19 807.72S702.52 775.72 814.92 775.72S930.21 787.25 1043.65 787.25S1159.71 797.94 1272.38 797.94S1388.43 815.43 1501.1 815.43S1618.96 797.74 1729.83 797.74S1848.05 803.04 1958.56 803.04S2073.52 789 2187.29 789S2304.86 800.03 2416.02 800.03S2533.32 793.9 2644.75 793.9S2761.77 775.23 2873.48 775.23L2660 1298 L-100 1298 Z"></animate>
              <animateTransform attributeName="transform" type="translate" dur="4.705882352941177s" begin="-3.450980392156863s" repeatCount="indefinite" values="0;10;0" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1"></animateTransform>
            </path><path d="M-100 855.42C20.84 862.24 17.43 846.76 133.9 846.76S251.91 837.11 367.8 837.11S485.82 866.01 601.69 866.01S721.3 865.83 835.59 865.83S952.84 870.46 1069.49 870.46S1186.79 846.95 1303.39 846.95S1423.81 857.31 1537.29 857.31S1655.1 859.44 1771.19 859.44S1891.27 854.57 2005.08 854.57S2123.45 837.49 2238.98 837.49S2356.27 832.28 2472.88 832.28S2589.9 847.93 2706.78 847.93L2660 1298 L-100 1298 Z" fill="#4a86bf" strokeWidth="0">
              <animate attributeName="d" dur="3.5294117647058822s" repeatCount="indefinite" values="M-100 855.42C20.84 862.24 17.43 846.76 133.9 846.76S251.91 837.11 367.8 837.11S485.82 866.01 601.69 866.01S721.3 865.83 835.59 865.83S952.84 870.46 1069.49 870.46S1186.79 846.95 1303.39 846.95S1423.81 857.31 1537.29 857.31S1655.1 859.44 1771.19 859.44S1891.27 854.57 2005.08 854.57S2123.45 837.49 2238.98 837.49S2356.27 832.28 2472.88 832.28S2589.9 847.93 2706.78 847.93L2660 1298 L-100 1298 Z;M-100 861.98C20.83 847.6 18.28 862.62 133.9 862.62S252.61 858.87 367.8 858.87S485.15 854.37 601.69 854.37S722.57 856.34 835.59 856.34S956.61 859.03 1069.49 859.03S1186.85 836.81 1303.39 836.81S1423.38 845.9 1537.29 845.9S1655.99 856.64 1771.19 856.64S1889.14 855.09 2005.08 855.09S2123 832.06 2238.98 832.06S2357.92 833.42 2472.88 833.42S2590.53 865.27 2706.78 865.27L2660 1298 L-100 1298 Z;M-100 855.42C20.84 862.24 17.43 846.76 133.9 846.76S251.91 837.11 367.8 837.11S485.82 866.01 601.69 866.01S721.3 865.83 835.59 865.83S952.84 870.46 1069.49 870.46S1186.79 846.95 1303.39 846.95S1423.81 857.31 1537.29 857.31S1655.1 859.44 1771.19 859.44S1891.27 854.57 2005.08 854.57S2123.45 837.49 2238.98 837.49S2356.27 832.28 2472.88 832.28S2589.9 847.93 2706.78 847.93L2660 1298 L-100 1298 Z"></animate>
              <animateTransform attributeName="transform" type="translate" dur="3.5294117647058822s" begin="-2.8235294117647056s" repeatCount="indefinite" values="0;10;0" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1"></animateTransform>
            </path><path d="M-100 915.08C21.95 906 19.82 892.5 139.31 892.5S260.83 915.49 378.61 915.49S499.63 916.64 617.92 916.64S741.28 929.76 857.23 929.76S977.98 913.78 1096.53 913.78S1218.65 926.73 1335.84 926.73S1458.04 911.82 1575.14 911.82S1696.49 919.18 1814.45 919.18S1934.87 895.99 2053.76 895.99S2176.2 909.85 2293.06 909.85S2414.72 911.43 2532.37 911.43S2652.63 900.83 2771.68 900.83L2660 1298 L-100 1298 Z" fill="#4e8cc5" strokeWidth="0">
              <animate attributeName="d" dur="2.3529411764705883s" repeatCount="indefinite" values="M-100 915.08C21.95 906 19.82 892.5 139.31 892.5S260.83 915.49 378.61 915.49S499.63 916.64 617.92 916.64S741.28 929.76 857.23 929.76S977.98 913.78 1096.53 913.78S1218.65 926.73 1335.84 926.73S1458.04 911.82 1575.14 911.82S1696.49 919.18 1814.45 919.18S1934.87 895.99 2053.76 895.99S2176.2 909.85 2293.06 909.85S2414.72 911.43 2532.37 911.43S2652.63 900.83 2771.68 900.83L2660 1298 L-100 1298 Z;M-100 906.9C21.38 890.62 20.6 914.89 139.31 914.89S262.52 911.14 378.61 911.14S501.01 896.08 617.92 896.08S741.59 921.91 857.23 921.91S977.77 920.36 1096.53 920.36S1217.38 915.76 1335.84 915.76S1456.49 891.51 1575.14 891.51S1697.54 901.35 1814.45 901.35S1936.68 914.65 2053.76 914.65S2173.62 924.86 2293.06 924.86S2415.87 927.73 2532.37 927.73S2655.87 926.95 2771.68 926.95L2660 1298 L-100 1298 Z;M-100 915.08C21.95 906 19.82 892.5 139.31 892.5S260.83 915.49 378.61 915.49S499.63 916.64 617.92 916.64S741.28 929.76 857.23 929.76S977.98 913.78 1096.53 913.78S1218.65 926.73 1335.84 926.73S1458.04 911.82 1575.14 911.82S1696.49 919.18 1814.45 919.18S1934.87 895.99 2053.76 895.99S2176.2 909.85 2293.06 909.85S2414.72 911.43 2532.37 911.43S2652.63 900.83 2771.68 900.83L2660 1298 L-100 1298 Z"></animate>
              <animateTransform attributeName="transform" type="translate" dur="2.3529411764705883s" begin="-2.03921568627451s" repeatCount="indefinite" values="0;10;0" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1"></animateTransform>
            </path><path d="M-100 968.19C24.07 943.55 23.1 973.73 144.97 973.73S267.66 949.48 389.94 949.48S514.05 961.38 634.91 961.38S759.53 963.88 879.88 963.88S1005.96 969.69 1124.85 969.69S1248.17 983.58 1369.82 983.58S1494.08 979.2 1614.79 979.2S1738.88 946.9 1859.76 946.9S1984.93 973.99 2104.73 973.99S2230.78 949.2 2349.7 949.2S2476.21 956.94 2594.67 956.94S2717.23 968.88 2839.64 968.88L2660 1298 L-100 1298 Z" fill="#5293cc" strokeWidth="0">
              <animate attributeName="d" dur="1.1764705882352942s" repeatCount="indefinite" values="M-100 968.19C24.07 943.55 23.1 973.73 144.97 973.73S267.66 949.48 389.94 949.48S514.05 961.38 634.91 961.38S759.53 963.88 879.88 963.88S1005.96 969.69 1124.85 969.69S1248.17 983.58 1369.82 983.58S1494.08 979.2 1614.79 979.2S1738.88 946.9 1859.76 946.9S1984.93 973.99 2104.73 973.99S2230.78 949.2 2349.7 949.2S2476.21 956.94 2594.67 956.94S2717.23 968.88 2839.64 968.88L2660 1298 L-100 1298 Z;M-100 951.46C22.92 952.45 23.78 967.09 144.97 967.09S268.25 960.42 389.94 960.42S514.19 966.76 634.91 966.76S760.77 953.92 879.88 953.92S1005.13 956.55 1124.85 956.55S1248.08 974.38 1369.82 974.38S1495.47 977.96 1614.79 977.96S1738.74 977.77 1859.76 977.77S1986.26 965.45 2104.73 965.45S2227.97 947.03 2349.7 947.03S2473.95 949.69 2594.67 949.69S2721.2 970.18 2839.64 970.18L2660 1298 L-100 1298 Z;M-100 968.19C24.07 943.55 23.1 973.73 144.97 973.73S267.66 949.48 389.94 949.48S514.05 961.38 634.91 961.38S759.53 963.88 879.88 963.88S1005.96 969.69 1124.85 969.69S1248.17 983.58 1369.82 983.58S1494.08 979.2 1614.79 979.2S1738.88 946.9 1859.76 946.9S1984.93 973.99 2104.73 973.99S2230.78 949.2 2349.7 949.2S2476.21 956.94 2594.67 956.94S2717.23 968.88 2839.64 968.88L2660 1298 L-100 1298 Z"></animate>
              <animateTransform attributeName="transform" type="translate" dur="1.1764705882352942s" begin="-1.0980392156862746s" repeatCount="indefinite" values="0;10;0" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1"></animateTransform>
            </path>
            </g>
          </svg> */}

        {/* <Map></Map> */}
        <Map3D></Map3D>
      </div>
  );
};

export default Home;