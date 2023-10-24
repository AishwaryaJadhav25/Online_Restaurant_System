import { Pipe, PipeTransform } from "@angular/core";
import { Restaurant } from "../models/restaurant";


@Pipe({
    name:'restFilter'
})
export class restFilterPipe implements PipeTransform
{
    transform(resta:Restaurant[],searchTerm:string):Restaurant[]
    {
        if(!resta||!searchTerm)
        {
            return resta;
        }


        return resta.filter(restaurant=>restaurant.restaurant_nm.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
    }
}