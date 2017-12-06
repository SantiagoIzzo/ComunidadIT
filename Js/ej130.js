var mutantes=["Prof. Charles Francis Xavier","Scott Summers",`Dr. Henry Philip "Hank" McCoy`,"Jean Elaine Grey","Calvin Montgomery Rankin","Kevin Sydney","Lorna Sally Dane","Alexander Summers","Suzanne Chan",`James "Logan" Howlett`,"Ororo Monroe"]

mutantes.sort()
mutantes.forEach(function(mutante){
    console.log(mutante)
})
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
mutantes.reverse()
mutantes.forEach(function(mutante){
    console.log(mutante)
})
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
console.log(mutantes.join(" * "))
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")