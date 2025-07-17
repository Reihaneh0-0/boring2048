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

     for (let i=0 ; i < size * size ; i++) {
        const cell=document.creatElement('div')
        cell.className = 'cell w-[20vw] h-[20vw] rounded-lg sm:rounded-xl md:h-32 md:w-32 md:rounded-2xl';
         grid.appendChild(cell);
     }

     function spawn() { 
     }

     function slide(row) {
        row = row.filter(Boolean);
        for (let i = 0 ; i < row.length - 1 ; i++)
            if ( row[i] === row[i + 1]){
                row[i] *=2;
                row.splice(i+1 , 1);
            }
     }

     return row;
    }