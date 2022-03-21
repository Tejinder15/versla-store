const genderFilter = (data,{genderValue}) =>{
    if(genderValue === "men"){
        return data.filter(item=>item.gender==="m");
    }else if(genderValue === "women"){
        return data.filter(item=>item.gender==="w");
    }
    
}

export {genderFilter};