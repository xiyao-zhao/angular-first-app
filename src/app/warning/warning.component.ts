import { Component } from "@angular/core";

@Component ({
    selector: 'app-warning',
    template: `
        <p>This is a WARNING message</p>
    `,
    styles: [`
        p {
            color: red;
            font-weight: bold;
            font-size: 18px;
        }
    `]
})

export class WarningComponent{

}