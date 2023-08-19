import React from 'react'

export default function operate(total,next,operation) {
    if(total){
        if(operation==="+"){
            return total+parseFloat(next);
        }
        if(operation==="-"){
            return total-parseFloat(next);
        }
        if(operation==="X"){
            return total*parseFloat(next);
        }
        if(operation==="/"){
            return total/parseFloat(next);
        }
    }
    return parseFloat(next)
}
