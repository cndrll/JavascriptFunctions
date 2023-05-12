
function ArtistAge(){
    let faveartist = prompt("Enter the age of your favorite artist:");

if (faveartist < 25) {
  document.write(`They're  ${faveartist}  years old and they're younger than Google`);
}
else if(faveartist == 25){
    document.write(`They're  ${faveartist} years old and they're as old as Google`);
}
else if(faveartist > 25){
    document.write(`They're ${faveartist} years old and they're older than Google`);
}

}
ArtistAge();
