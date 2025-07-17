const size = 4
     grid = document.getElementById('grid');

     const PALETTE = [
        '#1ABC9C', // 2-Turqoise
        '#F1C40F', // 4-Sunflower
        '#3498DB', // 8-Petterriver
        '#2C3E50', // 16-MidnightBlue
        '#9B59B6', // 32-Amethyst
        '#D35400', // 64-Pumpkin
        '#16A085', // 128-GreenSea
        '#2980B9', // 256-BlizeHole
        '#7F8C8D', // 512-Abestose
        '#BDC3C7', // 1024-Silver
     ];

     let board = Array.from({ length: size }, () => Array(size).fill(0));
     let prevBoard = board.map( r=>[...r] );
