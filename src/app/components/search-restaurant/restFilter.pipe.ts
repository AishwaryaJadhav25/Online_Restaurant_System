import { Pipe, PipeTransform } from "@angular/core";
import { restaurant } from "../restaurant";

@Pipe({
    name:'restFilter'
})
export class restFilterPipe implements PipeTransform
{
    transform(resta:restaurant[],searchTerm:string):restaurant[]
    {
        if(!restaurant ||!searchTerm)
        {
            return resta;
        }


        return resta.filter(restaurant=>restaurant.restaurant_nm.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
    }
}