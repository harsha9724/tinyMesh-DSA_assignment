function validateSize(target,l,w){
    if(l<target || w<target){
        return "UPLOAD ANOTHER";
    }
    if(l>target || w>target){
        if(l==w){
            return "ACCEPTED"
        }
        else{
            return "CROP IT"
        }
    }
    if(l==w){
        return "ACCEPTED"
    }
};
let L=180;
let testCases=3;
let inputs=[[640,640],[120,300],[180,180]]

   inputs.map((input)=>{
    let [l,w]=input;
    console.log(validateSize(L,l,w));
   })
