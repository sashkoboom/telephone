const DIAL_DATA = require('./dial-data.json');

module.exports = {
    walkThroughCharTree : function ( numberInput ) {

        console.log(numberInput);

        // '23' => [['a', 'b', 'c'], ['d', 'e', 'f']]
        const path = numberInput
        .split('')
        .map(( number ) => DIAL_DATA[number]);

        const resultsLevels = [];

        console.log(path);
        
        // '23' => [['a', 'b', 'c'], ['ad', 'ae', 'af', 'bd', 'be', 'bf', ...]]
        path.forEach(( level, i ) => {
            if( i === 0) { resultsLevels[i] = level }
            else { 
                const prevLevel = resultsLevels[ i - 1 ];
                resultsLevels[i] = prevLevel.flatMap(d => level.map(v => d + v));
            }
        });

        console.log(resultsLevels);
    
        return resultsLevels.slice(-1)[0];
    }
}