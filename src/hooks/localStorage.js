import {useState,useEffect} from 'react'
export const useLocalStorage = (key,initialValue) => {
    const [value,setValue]=useState(()=>{
        try{
            const savedValue = localStorage.getItem(key);
            if(savedValue){
                return JSON.parse(savedValue);
        }
        return initialValue;       
        }catch(error){
            console.error("Error reading localStorage",error);
            return initialValue;
        }
    });

    useEffect(()=>{

         localStorage.setItem(key,JSON.stringify(value));
      },[ key, value]);
    return [value.setValue];
}