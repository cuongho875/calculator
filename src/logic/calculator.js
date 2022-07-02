import React from 'react'
import isNumber from './isNumber'
import operate from './operate';
function calculator(obj,buttonName) {
    if(buttonName==="AC"){
        return {
            total:null,
            next:null,
            operation:null
        }
    }
    if(isNumber(buttonName)){
        if(obj.next){
            const next=obj.next==="0"?buttonName:obj.next+buttonName;
            return {
                next,
            }
        }
        return {
            next:buttonName,
        }
    }
    if(buttonName==="+"||buttonName==="-"||buttonName==="X"||buttonName==="/"){
        console.log(obj.total+ ": " +obj.next)
            return{
                total:operate(obj.total,obj.next,obj.operation),
                next:null,
                operation:buttonName
            }
    }
    if(obj.operation){
        if(obj.next){
            return{
                total:operate(obj.total,obj.next,obj.operation),
                next:operate(obj.total,obj.next,obj.operation),
                operation:null
            }
        }
    }
    if(buttonName==="="){
        if(obj.operation){
            return{
                total:operate(obj.total,obj.next,obj.operation),
                next:null,
                operation:null,
            } 
        }
    }
    if (buttonName === "+/-") {
        if (obj.next) {
          return { next: (-1 * parseFloat(obj.next)) };
        }
        if (obj.total) {
          return { total: (-1 * parseFloat(obj.total)) };
        }
        return {};
      }
    if(buttonName==="."){
        if(obj.next){
            if(obj.next.includes(".")){
                return {}
            }
            return {next:obj.next+"."}
        }
        return {next:"0"+"."}
    }
    if(buttonName==="%"){
        if(obj.next){
            return{next:parseFloat(obj.next)/100}
        }
        if(obj.total){
            return{total:parseFloat(obj.total)/100}
        }
    }
}

export default calculator