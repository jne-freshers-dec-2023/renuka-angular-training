import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'summary'
})
export class CustomPipeText implements PipeTransform{
    transform(value: String, ...args: any[]) {
            if(!value){
                return null;
            }
            return value.substr(0,50)+'...'
    }

}