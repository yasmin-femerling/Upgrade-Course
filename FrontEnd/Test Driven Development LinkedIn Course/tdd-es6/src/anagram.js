
export const areAnagram = (string1,string2) => {
    const letters = string1.split('');
    let isAnagram = true;

    //Remove empty space in string1
    string1 = string1.replace(/\s/g, '').toUpperCase().split('');
    string2 = string2.replace(/\s/g, '').toUpperCase().split('');
    string1.forEach((letter) => {
       if(string2.includes(letter)){
           string2.splice(string2.indexOf(letter),1,1);   
       }         
    });
    return string1.length == string2.reduce((acc,a) => acc+a, 0);
};