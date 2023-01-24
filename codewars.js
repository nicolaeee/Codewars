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

    //TEST
    describe("Tests", () => {
        it("test", () => {
      let List = [
                  {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
                  {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
                 ];

      Test.assertEquals(sentence(List), 'Vatsan took his dog for a spin');
        });
      });