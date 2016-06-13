import {Pipe} from 'angular2/core';
import {PipeTransform} from 'angular2/core';
import {SearchItem} from '../interface/search-item';

@Pipe({
    name:'searchPipe'
})
export class SearchPipe implements PipeTransform{
    transform(value:SearchItem[], args:string[]):any{
        if(value.length === 0){
            return value;
        }
        let argTemperament = args[0][0];
        let argGrooming = args[0][1];
        let argEnergy = args[0][2];
        let counter = args[0][3];
      
        let resultArray = [];
        
        for(let item of value){
            let regTemperament = new RegExp(argTemperament);
            let regGrooming = new RegExp(argGrooming);
            let regEnergy = new RegExp(argEnergy);
            
            if(item.temperament.match(argTemperament) && item.grooming.match(argGrooming) && item.energy.match(argEnergy)){
                resultArray.push(item); 
            }
        }
        
        //Angular 2 does not like the way when expression is changed, so setTimeout helps
        setTimeout(function(){counter.count = resultArray.length;}, 20);
        
        return resultArray;
    }
}
