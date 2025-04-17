function firstWord(s) {
	let ans='';
	for(let i=0;i<s.length;i++){
		if(s[i]!=' '){
			ans+=s[i];
		}
		if(ans.length>0 && s[i]==' ') break;
	}
	return ans;
}

// Do not change the code below
   
const s = prompt("Enter String:");
alert(firstWord(s));
