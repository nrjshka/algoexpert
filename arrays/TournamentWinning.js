function tournamentWinner(competitions, results) {
	const hashTable = {}
	const maxValue = { team: '', value: 0 }
	
	for (let i = 0; i < competitions.length; i++) {
		const [homeTeam, awayTeam] = competitions[i]
		const result = results[i]
		
		const currentKey = result ? homeTeam : awayTeam
		
		hashTable[currentKey] = (hashTable[currentKey] || 0) + 3
		
		if (hashTable[currentKey] >= maxValue.value) {
			maxValue.team = currentKey
			maxValue.value = hashTable[currentKey]
		} 
	}
	
	return maxValue.team
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
