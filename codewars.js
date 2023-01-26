//String Reordering
const List = [
    {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
    {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
   ];


   function sentence(List) {
    let arr = [];
    let a = List.sort((a,b)=>Object.keys(a) - Object.keys(b));//sorting objects in array in order by key number values
    a.forEach(function(elem) {
      arr.push(Object.values(elem))//out put in array values of objects based on their keyyyy
    })
    return arr.join(' ') ;
    }


      //Data reverse 6kuy
    //data = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
    const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'];
    function dataReverse(data) {
      let final = [];
      var newArr = [];
        for (let i = 0; i < data.length; i = i + 8) {//run through array with step of 8
            final.unshift(data.slice(i, i + 8));//push into new array each segment with slice form 0 to 8 and so on
        }
           for(var i = 0; i < final.length; i++)
            {
               newArr = newArr.concat(final[i]);//trasform or concate 2d array in 1d array
           }
      return newArr;
    }
