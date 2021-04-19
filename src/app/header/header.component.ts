import { Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html',
    styleUrls :['./header.component.css']
})
export class HeaderComponent{
    title = 'header-component';
    // @Output() selectedFeature=new EventEmitter<String>();
    // onSelect(feature : string)
    // {
    //   this.selectedFeature.emit(feature);
    // }
}