import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { TableComponent } from './table.component';
import { MatDatepickerModule, MatDatepickerToggle, MatNativeDateModule, MatTableModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


const routes = [
    {
        path     : '',
        component: TableComponent
    }
];

@NgModule({
    declarations: [
        TableComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatDatepickerModule,
        MatTableModule,

        // MatDatepickerToggle,
        MatNativeDateModule,

        
    ],
    providers: []
})
export class TableModule
{
}
