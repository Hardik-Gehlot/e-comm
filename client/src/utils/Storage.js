export const getSeller =()=>{
    const seller = localStorage.getItem("seller");
    if(seller){
        return JSON.parse(seller);
    }
    return null;
}
export const setSeller=(seller)=>{
    localStorage.setItem("seller",JSON.stringify(seller));
}
export const removeSeller=()=>{
    localStorage.removeItem("seller");
}